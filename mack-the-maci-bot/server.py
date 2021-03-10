from flask import Flask
from threading import Thread

app = Flask('')


@app.route('/')
def home():
    return "Hello. I am alive!"


def run():
    from waitress import serve
    serve(app, host="0.0.0.0", port=8080)


def keep_alive():
    print('server up')
    t = Thread(target=run)
    t.start()
