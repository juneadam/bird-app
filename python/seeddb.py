import model
from server import app

model.connect_to_db(app)

with app.app_context():
    model.db.drop_all()
    model.db.create_all()
    model.Bird.from_file()
