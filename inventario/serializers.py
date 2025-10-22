from rest_framework import serializers
from .models import LoteDeStock


class LoteDeStockCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = LoteDeStock
        fields = '__all__' 
class LoteDeStockSerializer(serializers.ModelSerializer):
    nombre = serializers.CharField(source='producto.nombre', read_only=True)
    categoria = serializers.CharField(source='producto.categoria', read_only=True)
    class Meta:
        model = LoteDeStock
        fields = [
            'sku', 
            'nombre', 
            'categoria', 
            'cantidad', 
            'fecha_ingreso',
            'fecha_caducidad'
        ]