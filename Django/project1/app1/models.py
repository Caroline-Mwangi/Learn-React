from django.db import models

# Create your models here.
class Customer(models.Model):
    name = models.CharField(max_length=200)
    industries = models.CharField(max_length=150)
