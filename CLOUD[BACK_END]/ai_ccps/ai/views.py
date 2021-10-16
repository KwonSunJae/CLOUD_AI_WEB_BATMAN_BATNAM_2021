from django.shortcuts import render
import threading
from queue import Queue
# Create your views here.
from django.http import HttpResponse
from . import rtsp_ai
import requests
def index(request):
    return get_post(request)
def reciver(que,send_url):
    while True:
        data,evt =que.get()
        
        evt.set()
        que.task_done()

def get_post(request):

    if request.method == 'POST':
        rtspp= request.POST['rtsp']
        runwayp = request.POST['runway']
        sectorp = request.POST['sector']
        senurl= request.POST['url']
        q= Queue()
        ai_thread = threading.Thread(target = rtsp_ai.Do_yolo,args=(rtspp,runwayp,sectorp,q))
        post_thread = threading.Thread(target = reciver, args=(q,senurl))
        q.join()