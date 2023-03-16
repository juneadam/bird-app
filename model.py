"""Model(s) for bird pokedex app."""

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Bird(db.Model):
    """SQL table tracking birds for the Bird-Dex."""

    _data_file = "birddex.csv"

    __tablename__ = "birds"

    bird_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(99), nullable=False)
    state = db.Column(db.String(10), unique=True)
    latin = db.Column(db.String(255))
    bird_type1 = db.Column(db.String(15))
    bird_type2 = db.Column(db.String(15), nullable=True)
    ability = db.Column(db.String(255))
    description = db.Column(db.String(255))
    image = db.Column(db.String(255), unique=True)
    call = db.Column(db.String(255), unique=True)
    length = db.Column(db.String(20))
    weight = db.Column(db.String(20))
    wingspan = db.Column(db.String(20))

    # @classmethod

    def __repr__(self):
        return f'<Bird object bird_id: {self.bird_id}, name: {self.name}>'


# ============ connect / dunder name ============ #

def connect_to_db(flask_app, db_uri="postgresql:///birddex", echo=True):
    flask_app.config["SQLALCHEMY_DATABASE_URI"] = db_uri
    flask_app.config["SQLALCHEMY_ECHO"] = echo
    flask_app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    db.app = flask_app
    db.init_app(flask_app)

    print("Connected to the db!")

if __name__ == "__main__":
    from server import app

    # Call connect_to_db(app, echo=False) if your program output gets
    # too annoying; this will tell SQLAlchemy not to print out every
    # query it executes.

    connect_to_db(app)
    db.create_all()