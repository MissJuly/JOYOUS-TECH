from rest_framework import serializers
from .models import Project

class ProjectSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(use_url=True)

    class Meta:
        model = Project
        fields = ['id', 'title', 'description', 'image', 'url']
