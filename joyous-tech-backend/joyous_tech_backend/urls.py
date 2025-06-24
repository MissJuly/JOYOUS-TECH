from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include, re_path
from frontend_app.views import FrontendAppView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('contact.urls')),
]

# Serve media files in both development AND production
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# React frontend fallback must come LAST
urlpatterns += [
    re_path(r'^.*$', FrontendAppView.as_view(), name='frontend'),
]
