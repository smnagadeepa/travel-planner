from flask import Flask, render_template, request, redirect, url_for, session,make_response
from flask_cors import CORS
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
app = Flask(__name__)
app.secret_key = 'your secret key'
from playsound import playsound
chatgpt=""

@app.route('/start', methods =['GET', 'POST'])
def start():
    global chatgpt
    from chatGPT_automator import ChatGPTAutomator    
    chatgpt = ChatGPTAutomator()
    return "started"

@app.route('/', methods =['GET', 'POST'])
def index():
    return render_template('index.html')

@app.route('/index', methods =['GET', 'POST'])
def index1():
    return render_template('index.html')

@app.route('/beach', methods =['GET', 'POST'])
def beach():
    return render_template('beach.html')

@app.route('/serch', methods =['GET', 'POST'])
def serch():
    return render_template('serch.html')

@app.route('/blog', methods =['GET', 'POST'])
def blog():
    return render_template('blog.html')

@app.route('/cml', methods =['GET', 'POST'])
def cml():
    return render_template('chickamagaluru.html')

@app.route('/contact', methods =['GET', 'POST'])
def contact():
    return render_template('contact.html')

@app.route('/coorg', methods =['GET', 'POST'])
def coorg():
    return render_template('coorg.html')

@app.route('/gallery', methods =['GET', 'POST'])
def gallery():
    return render_template('gallery.html')

@app.route('/mysuru', methods =['GET', 'POST'])
def mysuru():
    return render_template('mysuru.html')

@app.route('/readmore', methods =['GET', 'POST'])
def readmore():
    return render_template('readmore.html')

@app.route('/touch', methods =['GET', 'POST'])
def touch():
    return render_template('touch.html')

@app.route('/answers', methods =['GET', 'POST'])
def answers():
    global chatgpt
    days=request.form.get('days')
    frm=request.form.get('from')
    to=request.form.get('to')
    if frm==to:
        return redirect(request.referrer)
    else:
        question="I want to travel from "+frm+" to "+to+" for "+days+" Please suggest a travel itinerary in Karnataka"
        #question = input("Give the question")
        chatgpt.send_prompt_to_chatgpt(question)
        answer = chatgpt.return_last_response()
        answer = answer.replace('\n', '<br />')
        return answer
#chatgpt=""   
if __name__ == '__main__':  
    app.run(debug=True)