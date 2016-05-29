from flask import Flask, render_template

app = Flask(__name__)

@app.route('/../../website\ development/')
@app.route('/../../website\ development/<name/>')
def index(name=None):
    #return send_from_directory('html', '../../website\ development/index.html')
    return render_template('index.html', name=name);

if __name__ == '__main__':
    app.run()
