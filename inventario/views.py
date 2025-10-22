from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from .models import LoteDeStock
from .serializers import LoteDeStockSerializer, LoteDeStockCreateSerializer 

class LoteDeStockViewSet(viewsets.ModelViewSet):
  
    queryset = LoteDeStock.objects.all().order_by('-fecha_ingreso')
    
    serializer_class = LoteDeStockSerializer 
    
   

    def get_serializer_class(self):

        if self.action == 'create':

            return LoteDeStockCreateSerializer
        return LoteDeStockSerializer