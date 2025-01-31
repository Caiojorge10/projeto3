from django.shortcuts import render

# Create your views here.

from rest_framework import generics, permissions
from .models import License
from .serializers import LicenseSerializer

class LicenseListCreateView(generics.ListCreateAPIView):
    queryset = License.objects.all()
    serializer_class = LicenseSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class LicenseDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = License.objects.all()
    serializer_class = LicenseSerializer
    permission_classes = [permissions.IsAuthenticated]