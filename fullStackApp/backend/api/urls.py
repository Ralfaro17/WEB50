from django.urls import path
from .views import *

urlpatterns = [
    path('test/', TestView.as_view(), name='test'),
    path('authors/', AuthorsView.as_view(), name='authors'),
    path("authors/<int:id>/", AuthorsViewDetails.as_view(), name='authors_details'),
    path('books/', BooksView.as_view(), name='books'),
    path("books/<int:id>/", BooksViewDetails.as_view(), name='books_details'),
]