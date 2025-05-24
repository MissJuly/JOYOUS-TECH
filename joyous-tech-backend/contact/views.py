from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from .models import Project
from .serializers import ProjectSerializer
import os

class ProjectListView(ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ContactView(APIView):
    @method_decorator(csrf_exempt)
    def post(self, request, *args, **kwargs):
        data = request.data
        print("Received data:", data)
        name = data.get('name')
        email = data.get('email')
        message = data.get('message')

        subject = f"New contact from {name}"
        body = f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}"

        try:
            send_mail(subject, body, os.getenv('EMAIL_HOST_USER'), [os.getenv('EMAIL_HOST_USER')])
            return Response({'success': True, 'message': 'Email sent successfully'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'success': False, 'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
