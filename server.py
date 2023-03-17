# Flask routing for bird-dex app

from flask import Flask, render_template, request, flash, session, redirect, jsonify
# from passlib.hash import argon2
from jinja2 import StrictUndefined
# from random import choice, randint, shuffle
from model import connect_to_db, db
# import crud

app = Flask(__name__)
app.secret_key = 'dev'
app.jinja_env.undefined = StrictUndefined

@app.route('/')
def homepage():

    return render_template ('index.html')

if __name__ == "__main__":
    connect_to_db(app)
    app.run(host="0.0.0.0", debug=True)