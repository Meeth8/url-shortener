from django.shortcuts import render

# Create your views here.

def index(request):
    context = {'message': 'Hello from Django!'}
    return render(request, 'index.html', context)

def url_history(request):
    return render(request, 'urls.html')
