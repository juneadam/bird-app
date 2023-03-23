"""CRUD operations"""

from model import db, Bird, connect_to_db


if __name__ == '__main__':
    from server import app
    connect_to_db
    # with app.app_context():
        # db.create_all()