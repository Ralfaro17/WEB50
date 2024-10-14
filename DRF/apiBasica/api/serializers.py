from rest_framework import serializers
from .models import Songs

class SongSerializer(serializers.ModelSerializer):
    class Meta:
        model = Songs # Modelo a serializar.
        fields = '__all__' # Una lista de campos específicos o ‘__all__’.
    
    # Se pueden agregar métodos para validar datos recibidos.
    def validate_name(self, value):
        print(f"yo soy el valor de 'name' {value}")
        if(value == "canción"):
            raise serializers.ValidationError("No se permite la palabra canción")
        return value
