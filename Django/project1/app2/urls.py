from django.urls import path
from . import views

app_name = "app2"

urlpatterns = [
    path('api/students', views.students, name="students"),
    path('api/students/<int:id>/', views.details, name="details")
]