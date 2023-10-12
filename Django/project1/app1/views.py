from django.shortcuts import render, redirect
from app1.serializer import CustomerSerializer
from django.http import JsonResponse, HttpResponse
from app1.models import Customer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


# Create your views here.

def home(request):
    
    return render(request, 'index.html')

def about(request):
    
    return render(request, 'about.html')

# def customers(request):
    
#     data = Customer.objects.all()
#     serializer = CustomerSerializer(data, many=True)
#     return JsonResponse({'customers' : serializer.data})

# def details(request, id):

#     try:
#         data = Customer.objects.get(id=id)
#     except Customer.DoesNotExist:
#         # return HttpResponse("Record Does Not Exist")
#         return redirect("/")
#     serializer = CustomerSerializer(data)
#     return JsonResponse({'customer' : serializer.data})


@api_view(['GET', 'POST'])
def customers(request):
    if request.method == 'GET':
        data = Customer.objects.all()
        serializer = CustomerSerializer(data, many=True)
        return Response({'customers' : serializer.data}, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        serializer = CustomerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'customer': serializer.data}, status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)
        


@api_view(['GET', 'POST', 'DELETE'])
def details(request, id):

    try:
        data = Customer.objects.get(id=id)
    except Customer.DoesNotExist:
        # return HttpResponse("Record Does Not Exist")
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer = CustomerSerializer(data)
        return Response({'customer' : serializer.data}, status=status.HTTP_200_OK)
    elif request.method =='DELETE':
        data.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    elif request.method == 'POST':
        serializer = CustomerSerializer(data, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'customer': serializer.data}, status=status.HTTP_200_OK)
        return Response(status=status.HTTP_400_BAD_REQUEST)