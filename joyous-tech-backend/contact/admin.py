from django.contrib import admin
from django.contrib.auth.models import User, Group
from .models import Project
from django.conf import settings


admin.site.site_header = getattr(settings, "ADMIN_SITE_HEADER", "Django administration")
admin.site.site_title = getattr(settings, "ADMIN_SITE_TITLE", "Site administration")
admin.site.index_title = getattr(settings, "ADMIN_INDEX_TITLE", "Welcome")


# Unregister default models
admin.site.unregister(User)
admin.site.unregister(Group)


admin.site.register(Project)
