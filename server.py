# server.py
from flask import Flask, send_from_directory
app = Flask(__name__, static_folder='.')

@app.after_request
def add_cors_headers(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Methods'] = 'GET, OPTIONS'
    response.headers['Access-Control-Allow-Headers'] = '*'
    return response

@app.route('/<path:path>')
def serve(path):
    return send_from_directory('.', path)

if __name__ == '__main__':
    app.run(port=8000)
