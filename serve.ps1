# Finisher Technologies - Local Static Web Server
$port = 3000
$prefix = "http://localhost:$port/"
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($prefix)

try {
    $listener.Start()
    Write-Host "=================================================================" -ForegroundColor Cyan
    Write-Host " Finisher Technologies Web Application Live" -ForegroundColor Green
    Write-Host " URL: $prefix" -ForegroundColor Yellow
    Write-Host " Press Ctrl+C in terminal to stop server" -ForegroundColor Gray
    Write-Host "=================================================================" -ForegroundColor Cyan

    $root = $PSScriptRoot

    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $path = $request.Url.LocalPath
        if ($path -eq "/") { $path = "/index.html" }
        $filePath = Join-Path $root $path.TrimStart('/')

        if (Test-Path $filePath -PathType Leaf) {
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            
            if ($filePath.EndsWith(".html")) { $response.ContentType = "text/html" }
            elseif ($filePath.EndsWith(".css")) { $response.ContentType = "text/css" }
            elseif ($filePath.EndsWith(".js")) { $response.ContentType = "application/javascript" }
            elseif ($filePath.EndsWith(".svg")) { $response.ContentType = "image/svg+xml" }
            elseif ($filePath.EndsWith(".json")) { $response.ContentType = "application/json" }

            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $buffer = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
            $response.ContentLength64 = $buffer.Length
            $response.OutputStream.Write($buffer, 0, $buffer.Length)
        }
        $response.OutputStream.Close()
    }
} finally {
    $listener.Stop()
}
