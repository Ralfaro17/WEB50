from rest_framework import serializers
from .models import *

class AuthorsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Authors
        fields = '__all__'  

class BooksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Books
        fields = '__all__'
    
    def validate_author(self, value):
        print(value.last_name)
        """ if not Authors.objects.filter(id=value.id).exists():
            raise serializers.ValidationError('El autor no existe') """
        return value