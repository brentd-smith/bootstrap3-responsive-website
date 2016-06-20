from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse


def index(request):
    #return HttpResponse("Hello, world. You're at the boot3 index.")
    return render(request, 'boot3/index.html')

