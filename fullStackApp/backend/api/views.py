from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import *
from .serializers import *

# Create your views here.
class TestView(APIView):
    http_method_names = ['get', 'post', 'patch']
    
    def get(self, request):
        return Response({'message': 'Esto fue un get'}, status=status.HTTP_200_OK)
    
    def post(self, request):
        return Response({'message': 'Estas usando el post'}, status=status.HTTP_201_CREATED)
    
    def patch(self, request):
        return Response({'message': 'Estas usando el patch'}, status=status.HTTP_418_IM_A_TEAPOT)


class AuthorsView(APIView):
    http_method_names = ['get', 'post']
    
    def get(self, request):
        authors = Authors.objects.all()
        serializer = AuthorsSerializer(authors, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = AuthorsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class AuthorsViewDetails(APIView):
    http_method_names = ['get', 'put', 'delete', 'patch']
    
    def get(self, request, id):
        try:
            author = Authors.objects.get(id=id)
        except:
            return Response({'message': 'El autor no existe'}, status=status.HTTP_404_NOT_FOUND)
        serializer = AuthorsSerializer(author)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, id):
        try:
            author = Authors.objects.get(id=id)
        except:
            return Response({'message': 'El autor no existe'}, status=status.HTTP_404_NOT_FOUND)
        serializer = AuthorsSerializer(author, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def patch(self, request, id):
        try:
            author = Authors.objects.get(id=id)
        except:
            return Response({'message': 'El autor no existe'}, status=status.HTTP_404_NOT_FOUND)
        serializer = AuthorsSerializer(author, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, id):
        try:
            author = Authors.objects.get(id=id)
        except:
            return Response({'message': 'El autor no existe'}, status=status.HTTP_404_NOT_FOUND)
        author.delete()
        return Response({'message': 'El autor fue eliminado'}, status=status.HTTP_200_OK)

class BooksView(APIView):
    http_method_names = ['get', 'post']
    
    def get(self, request):
        books = Books.objects.all()
        serializer = BooksSerializer(books, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        request.data["author"] = request.user.id
        serializer = BooksSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class BooksViewDetails(APIView):
    http_method_names = ['get', 'put', 'delete', 'patch']
    
    def get(self, request, id):
        try:
            book = Books.objects.get(id=id)
        except:
            return Response({'message': 'El libro no existe'}, status=status.HTTP_404_NOT_FOUND)
        serializer = BooksSerializer(book)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def put(self, request, id):
        try:
            book = Books.objects.get(id=id)
        except:
            return Response({'message': 'El libro no existe'}, status=status.HTTP_404_NOT_FOUND)
        serializer = BooksSerializer(book, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, id):
        try:
            book = Books.objects.get(id=id)
        except:
            return Response({'message': 'El libro no existe'}, status=status.HTTP_404_NOT_FOUND)
        book.delete()
        return Response({'message': 'El libro fue eliminado'}, status=status.HTTP_200_OK)   

    def patch(self, request, id):
        try:
            book = Books.objects.get(id=id)
        except:
            return Response({'message': 'El libro no existe'}, status=status.HTTP_404_NOT_FOUND)
        serializer = BooksSerializer(book, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)