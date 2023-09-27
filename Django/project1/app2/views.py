from django.shortcuts import render
from django.http import JsonResponse
from django.shortcuts import render, redirect
from app2.serializers import StudentSerializer
from app2.models import Student

# Create your views here.
def students(request):
    data = Student.objects.all()
    serializer = StudentSerializer(data, many=True)
    return JsonResponse({'students' : serializer.data})

def details(request, id):

    try:
        data = Student.objects.get(id=id)
    except Student.DoesNotExist:
        # return HttpResponse("Record Does Not Exist")
        return redirect("/")
    serializer = StudentSerializer(data)
    return JsonResponse({'student': serializer.data})