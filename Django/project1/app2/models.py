from django.db import models

# Create your models here.
class Student(models.Model):
    name = models.CharField(max_length=200)
    industries = models.CharField(max_length=200, null=False, default="tets")
    # session = models.CharField(max_length=100)
