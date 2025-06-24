from django.views.generic import View
from django.http import HttpResponse
from django.shortcuts import render

class FrontendAppView(View):
    def get(self, request):
        if request.path == '/favicon.ico':
            return HttpResponse(status=204)  # No Content
        return render(request, 'index.html')
