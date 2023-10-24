from django.shortcuts import render
from django.http import JsonResponse
from django.shortcuts import render, redirect
from app2.serializers import StudentSerializer
from app2.models import Student
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
# def students(request):
#     data = Student.objects.all()
#     serializer = StudentSerializer(data, many=True)
#     return JsonResponse({'students' : serializer.data})

# def details(request, id):

#     try:
#         data = Student.objects.get(id=id)
#     except Student.DoesNotExist:
#         # return HttpResponse("Record Does Not Exist")
#         return redirect("/")
#     serializer = StudentSerializer(data)
#     return JsonResponse({'student': serializer.data})


@api_view(['GET', 'POST'])
def students(request):
    if request.method == 'GET':
        data = Student.objects.all()
        serializer = StudentSerializer(data, many=True)
        return Response({'customers' : serializer.data})

    elif request.method == 'POST':
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'customer': serializer.data}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        
        
@api_view(['GET', 'POST', 'DELETE'])
def details(request, id):

    try:
        data = Student.objects.get(id=id)
    except Student.DoesNotExist:
        # return HttpResponse("Record Does Not Exist")
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = StudentSerializer(data)
        return Response({'customer': serializer.data})
    elif request.method =='DELETE':
        data.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    elif request.method == 'POST':
        serializer = StudentSerializer(data, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'customer': serializer.data}, status=status.HTTP_200_OK)
        return Response(status=status.HTTP_400_BAD_REQUEST)