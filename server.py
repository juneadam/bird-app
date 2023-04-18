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

@app.route('/bird-request.json', methods=['GET'])
def bird_request():
    """answers a fetch quest from the onClick and responds with a JSON package of bird data."""

    bird_data = {"name": "Articuno",
    "state": "Kanto",
    "latin": "Flappius snowflakeum",
    "bird_type1": "ice",
    "bird_type2": "flying",
    "description": "It's said that this Pokémon's beautiful blue wings are made of ice. Articuno flies over snowy mountains - its long tail fluttering along behind it.",
    "image": "/static/img/Articuno.png",
    "call": "placeholder",
    "length": "1.7m",
    "weight": "55.4 kg",
    "wingspan": "5.3 m",
    "ability": "Pressure"}

    bird_data2 = {"name": "Greater roadrunner",
    "state": "NM",
    "latin": "Geococcyx californianus",
    "bird_type1": "ground",
    "bird_type2": "fire",
    "description": "Roadrunner can reach sustained speeds of 30km/hr. In intense sunshine it gains the fire typing.",
    "image": "placeholder",
    "call": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Roadrunner_Clatter.ogg",
    "length": "57 cm",
    "weight": "13.4 oz",
    "wingspan": "52 cm",
    "ability": "Speed Boost/Sunbathe"}

    return bird_data2

    # return render_template('index.html')

if __name__ == "__main__":
    connect_to_db(app)
    app.run(host="0.0.0.0", debug=True)