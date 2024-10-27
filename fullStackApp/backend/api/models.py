from django.db import models

# Create your models here.
class Authors(models.Model):
    name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    birth_date = models.DateField()
    
    def __str__(self):
        return self.name

class Books(models.Model):
    title = models.CharField(max_length=100)
    author =models.ForeignKey(Authors, on_delete=models.CASCADE)
    publication_date = models.DateField()
    pages = models.IntegerField()
    price = models.FloatField()
    stock = models.IntegerField()
    
    def __str__(self):
        return self.title

