from django.urls import path
from .views import SongView, SongDetailsView

urlpatterns = [
    path("songs/", SongView.as_view(), name="songs"),
    path("songs/<int:id>", SongDetailsView.as_view(), name="song_details")
]