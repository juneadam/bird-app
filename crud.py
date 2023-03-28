"""CRUD operations"""

from model import db, Bird, connect_to_db

def create_bird(name, latin):
    """Create a new bird entry"""
    bird = Bird(name=name, latin=latin)
    return bird


def get_bird_by_name(name):
    """Return a bird by english name"""
    return Bird.query.filter(Bird.name == name).first()


def get_birds_by_place(state):
    """Return all birds in a certain place/region"""
    return Bird.query.filter_by(state=state).all()


def get_birds_by_type1(bird_type1):
    """Return all birds by a certain type"""
    return Bird.query.filter_by(bird_type1=bird_type1).all()


def get_birds_by_type2(bird_type2):
    """Return all birds by a certain type"""
    return Bird.query.filter_by(bird_type2=bird_type2).all()

if __name__ == '__main__':
    from server import app
    connect_to_db
    # with app.app_context():
        # db.create_all()