from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import LoteDeStockViewSet

router = DefaultRouter()

router.register(r'inventario', LoteDeStockViewSet, basename='lotedestock')

urlpatterns = [
    path('', include(router.urls)),
]