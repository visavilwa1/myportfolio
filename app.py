from flask import Flask, render_template, request
from flask_mail import Mail, Message

app = Flask(__name__)

# Configure Flask-Mail
app.config['MAIL_SERVER'] = 'daisyvisavilwa@gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'savilwadaisy@gmail.com'
app.config['MAIL_PASSWORD'] = 'daisyinreallife'

mail = Mail(app)

@app.route('/')
def home():
    return render_template('#contact')

@app.route('/contact', methods=['POST'])
def contact():
    name = request.form.get('name')
    email = request.form.get('email')
    message = request.form.get('message')

    msg = Message(subject='New Message from Your Website',
                  sender='savilwadaisy@gmail.com',
                  recipients=['daisyvisavilwa@gmail.com'])

    msg.body = f"Name: {name}\nEmail: {email}\nMessage:\n{message}"

    mail.send(msg)

    return 'Message sent successfully!'

if __name__ == '__main__':
    app.run(debug=True)