from django.shortcuts import render, redirect
from app1.serializer import CustomerSerializer
from django.http import JsonResponse, HttpResponse
from app1.models import Customer


# Create your views here.

def home(request):
    
    return render(request, 'index.html')

def about(request):
    
    return render(request, 'about.html')

def customers(request):
    
    data = Customer.objects.all()
    serializer = CustomerSerializer(data, many=True)
    return JsonResponse({'customers' : serializer.data})

def details(request, id):

    try:
        data = Customer.objects.get(id=id)
    except Customer.DoesNotExist:
        # return HttpResponse("Record Does Not Exist")
        return redirect("/")
    serializer = CustomerSerializer(data)
    return JsonResponse({'customer' : serializer.data})
