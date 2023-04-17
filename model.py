"""Model(s) for bird pokedex app."""

from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()


class Bird(db.Model):
    """SQL table tracking birds for the Bird-Dex."""

    _data_file = "static/birddex.csv"

    __tablename__ = "birds"

    bird_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(99), nullable=False)
    state = db.Column(db.String(30), unique=True)
    latin = db.Column(db.String(255))
    bird_type1 = db.Column(db.String(15))
    bird_type2 = db.Column(db.String(15), nullable=True)
    description = db.Column(db.String(255))
    image = db.Column(db.String(255))
    call = db.Column(db.String(255))
    length = db.Column(db.String(20))
    weight = db.Column(db.String(20))
    wingspan = db.Column(db.String(20))
    ability = db.Column(db.String(255))

    def __init__(self, name, state, latin, bird_type1, bird_type2, description, image, call, length, weight, wingspan, ability):
        self.name = name
        self.state = state
        self.latin = latin
        self.bird_type1 = bird_type1
        self.bird_type2 = bird_type2
        self.description = description
        self.image = image
        self.call = call
        self.length = length
        self.weight = weight
        self.wingspan = wingspan
        self.ability = ability

    @classmethod
    def from_file(cls):
        """Create a bird using CSV data."""

        bird_list = []

        for line in open(cls._data_file):
            data_name, data_state, data_latin, data_bird_type1, data_bird_type2, data_description, data_image, data_call, data_length, data_weight, data_wingspan, data_ability = line.split(',')
            new_bird = cls(data_name, data_state, data_latin, data_bird_type1, data_bird_type2, data_description, data_image, data_call, data_length, data_weight, data_wingspan, data_ability)
            bird_list.append(new_bird)

        db.session.add_all(bird_list)
        db.session.commit()
        return print('birds flapping!')


    def __repr__(self):
        return f'<Bird object bird_id: {self.bird_id}, name: {self.name}>'


def connect_to_db(flask_app, db_uri="postgresql:///birddex", echo=True):
    flask_app.config["SQLALCHEMY_DATABASE_URI"] = db_uri
    flask_app.config["SQLALCHEMY_ECHO"] = echo
    flask_app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    db.app = flask_app
    db.init_app(flask_app)

    print("Connected to the db!")

if __name__ == "__main__":
    from server import app
    connect_to_db(app)

