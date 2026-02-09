#!/usr/bin/env python3
"""
Simple HTTP Server for Portfolio Website
Run this script to start a local development server.
"""

import http.server
import socketserver
import os
import sys

# Configuration
PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)
    
    def end_headers(self):
        # Add CORS headers for local development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()

def run_server():
    """Start the HTTP server"""
    try:
        with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
            print("=" * 60)
            print("🚀 Portfolio Website Server")
            print("=" * 60)
            print(f"\n✓ Server running at: http://localhost:{PORT}")
            print(f"✓ Directory: {DIRECTORY}")
            print("\n📝 Press Ctrl+C to stop the server\n")
            print("=" * 60)
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n\n👋 Server stopped. Goodbye!")
        sys.exit(0)
    except OSError as e:
        if e.errno == 48 or e.errno == 98:  # Address already in use
            print(f"\n❌ Error: Port {PORT} is already in use.")
            print(f"💡 Try using a different port or stop the other server.\n")
            sys.exit(1)
        else:
            raise

if __name__ == "__main__":
    run_server()
