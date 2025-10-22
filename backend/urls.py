from django.contrib import admin
from django.urls import path, include
from .views import tokenPersonalizado
urlpatterns = [
    path('admin/', admin.site.urls),
    
    path('api/', include('productos.urls')),
    path('api/', include('inventario.urls')),
    
    path('api-login/', tokenPersonalizado.as_view(), name='api_token_auth'),
]