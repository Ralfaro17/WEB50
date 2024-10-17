from .models import Songs
from .serializers import SongSerializer

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.pagination import PageNumberPagination

# Create your Pagination here.
class CustomPagination(PageNumberPagination):
    page_size = 2
    page_size_query_param = 'page_size'
    max_page_size = 10

# Create your views here.
class SongView(APIView):
    http_method_names = ['get', 'post']
    pagination_class = CustomPagination
    
    def get(self, request):
        if (request.query_params):
            limit = int(request.query_params.get('limit', 0))
            if(limit > 0):
                songs = Songs.objects.all()[:limit]
            else:
                songs = Songs.objects.all()
        else:
            songs = Songs.objects.all()
        
        paginator = self.pagination_class()
        result_page = paginator.paginate_queryset(songs, request)
        
        serializer = SongSerializer(result_page, many=True)
        
        return paginator.get_paginated_response(serializer.data)
    
    
    def post(self, request):
        print(request.data)
        serializer = SongSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SongDetailsView(APIView):
    http_method_names = ['get', 'put', 'patch', 'delete']
    
    def get(self, request, id):
        try:
            song = Songs.objects.get(id=id)
            serializer = SongSerializer(song)
            
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Songs.DoesNotExist:
            return Response({"message": "La canción no existe"}, status=status.HTTP_404_NOT_FOUND)
    
    def put(self, request, id):
        
        try:
            song = Songs.objects.get(id=id)
        except Songs.DoesNotExist:
            return Response({"message": "La canción no existe"}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = SongSerializer(song, data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
    def patch(self, request, id):
        
        try:
            song = Songs.objects.get(id=id)
        except Songs.DoesNotExist:
            return Response({"message": "La canción no existe"}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = SongSerializer(song, data=request.data, partial=True)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, id):
        
        try:
            song = Songs.objects.get(id=id)
        except Songs.DoesNotExist:
            return Response({"message": "La canción no existe"}, status=status.HTTP_404_NOT_FOUND)
        
        song.delete()
        return Response({"message": "La canción ha sido eliminada"}, status=status.HTTP_204_NO_CONTENT)
    