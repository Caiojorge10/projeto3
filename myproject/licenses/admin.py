from django.contrib import admin

from django.contrib import admin
from .models import License

class LicenseAdmin(admin.ModelAdmin):
    list_display = ('name', 'user', 'status', 'created_at')  # Campos exibidos na lista
    list_filter = ('status', 'created_at')  # Filtros laterais
    search_fields = ('name', 'user__username')  # Campos de pesquisa
    actions = ['approve_licenses', 'reject_licenses']  # Ações personalizadas

    # Ação para aprovar licenças
    def approve_licenses(self, request, queryset):
        queryset.update(status='approved')
    approve_licenses.short_description = "Aprovar licenças selecionadas"

    # Ação para recusar licenças
    def reject_licenses(self, request, queryset):
        queryset.update(status='rejected')
    reject_licenses.short_description = "Recusar licenças selecionadas"

# Registra o modelo License com a classe personalizada LicenseAdmin
admin.site.register(License, LicenseAdmin)
