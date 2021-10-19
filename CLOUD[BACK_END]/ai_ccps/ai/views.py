from django.shortcuts import render
import threading
from queue import Queue
# Create your views here.
from django.http import HttpResponse
from . import rtsp_ai
import requests
def index(request):
    return get_post(request)


def get_post(request):
    if request.method== 'GET':
        rtspp= request.GET['rtsp']
        runwayp = request.GET['runway']
        sectorp = request.GET['sector']
        senurl= request.GET['url']
        
        q=Queue()
        rtsp_ai.Do_yolo(rtspp,runwayp,sectorp,q)
        #
        

    if request.method == 'POST':
        rtspp= request.POST['rtsp']
        runwayp = request.POST['runway']
        sectorp = request.POST['sector']
        senurl= request.POST['url']
        
        q=Queue()
        rtsp_ai.Do_yolo(rtspp,runwayp,sectorp,q)
        #
        