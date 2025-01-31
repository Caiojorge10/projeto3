from rest_framework import serializers
from .models import License
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

class LicenseSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = License
        fields = ['id', 'user', 'name', 'description', 'status', 'created_at']