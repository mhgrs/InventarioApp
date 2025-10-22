from django.db import models

class Producto(models.Model):
    
    codigo_barras = models.CharField(max_length=100, unique=True, verbose_name="Código de barras")
    nombre = models.CharField(max_length=255, verbose_name="Nombre del Producto")
    categoria = models.CharField(max_length=100, blank=True, null=True)
    formato = models.CharField(max_length=100, verbose_name="Formato")

    def __str__(self):
        return f"{self.nombre} ({self.formato})"