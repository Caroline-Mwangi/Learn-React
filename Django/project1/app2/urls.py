from django.urls import path
from . import views

app_name = "app2"

urlpatterns = [
    path('api/customers/', views.students, name="students"),
    path('api/customers/<int:id>', views.details, name="details")
]