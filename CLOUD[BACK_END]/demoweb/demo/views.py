from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
class IndexView(View):

    def post(self, request):
        runway = request.POST['runway']
        sector = request.POST['sector']
        bid_dec = request.POST['finding']
        response = "runway: " + runway ", sector: " + sector + ", number of birds: "+ bid_dec + "batman detect!"
        print(response)
        return HttpResponse(response)

    