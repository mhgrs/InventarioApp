from django.db import models
from productos.models import Producto

class LoteDeStock(models.Model):
   
    
    sku = models.AutoField(primary_key=True)

   
    
  
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE, related_name="lotes")

    cantidad = models.PositiveIntegerField()
    lote_numero = models.CharField(max_length=100, verbose_name="Número de Lote")
    fecha_ingreso = models.DateField()
    fecha_caducidad = models.DateField(null=True, blank=True)

    def __str__(self):
        
        return f"{self.sku:03d} ({self.producto.nombre})"