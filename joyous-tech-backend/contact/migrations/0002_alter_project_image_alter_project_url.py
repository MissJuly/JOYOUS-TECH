# Generated by Django 5.2.1 on 2025-05-24 18:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contact', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='image',
            field=models.ImageField(upload_to='project_images/'),
        ),
        migrations.AlterField(
            model_name='project',
            name='url',
            field=models.URLField(blank=True),
        ),
    ]
