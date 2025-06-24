from django.shortcuts import render
from django.views.generic import TemplateView
import os

# def index(request):
#     return render(request, os.path.join('frontend', 'index.html'))


class FrontendAppView(TemplateView):
    template_name = 'index.html'
