from django.urls import path
from .views import LicenseListCreateView, LicenseDetailView

urlpatterns = [
    path('', LicenseListCreateView.as_view(), name='license-list-create'),
    path('<int:pk>/', LicenseDetailView.as_view(), name='license-detail'),
]