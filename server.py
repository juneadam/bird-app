# Flask routing for bird-dex app

from flask import Flask, render_template, request, flash, session, redirect, jsonify

from jinja2 import StrictUndefined

from model import Bird, connect_to_db, db

app = Flask(__name__)
app.secret_key = 'dev'
app.jinja_env.undefined = StrictUndefined

@app.route('/')
def homepage():
    """birddex homepage"""
    return render_template('birddex.html')

    # return render_template ('index.html')

if __name__ == "__main__":
    connect_to_db(app)
    app.run(host="0.0.0.0", debug=True)