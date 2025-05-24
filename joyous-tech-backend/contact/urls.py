from django.urls import path
from .views import ContactView, ProjectListView


urlpatterns = [
    path('contact/', ContactView.as_view(), name='contact'),
    path('projects/', ProjectListView.as_view(), name='project-list'),
]
