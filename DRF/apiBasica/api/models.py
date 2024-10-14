from django.db import models

# Create your models here.
class Songs(models.Model):
    name = models.CharField(max_length=100)
    artist = models.CharField(max_length=100)
    description = models.TextField()
    image = models.CharField(max_length=100)
    
    def __str__(self):
        return f"Canción {self.name} - Por {self.artist}"