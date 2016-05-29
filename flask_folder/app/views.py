from app import app
from flask import render_template
from random import randint

@app.route('/')

def index():
	return render_template('index.html')
