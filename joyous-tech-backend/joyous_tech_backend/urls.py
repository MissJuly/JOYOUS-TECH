"""
URL configuration for joyous_tech_backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls.static import static
from frontend_app.views import FrontendAppView
from django.views.generic import TemplateView
from django.contrib import admin
from django.urls import path, include, re_path
from django.core.management import call_command
from django.contrib.auth import get_user_model

# One-time DB migration + superuser script
try:
    call_command('migrate')

    # Create a superuser only if none exist
    User = get_user_model()
    if not User.objects.filter(username='joytech_admin').exists():
        User.objects.create_superuser(
            username='joytech_admin',
            email='me@joyoustech.com',
            password='AstrongPassword!2025'
        )
        print(" Superuser 'joytech_admin' created!")
except Exception as e:
    print(f" Migration or superuser creation failed: {e}")



urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('contact.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


#  React frontend fallback (must come last!)
urlpatterns += [
    re_path(r'^.*$', FrontendAppView.as_view(), name='frontend'),
]
