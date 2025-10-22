PARA CORRER LA APLICACIÓN

Crea una base de datos en PostgreSQL con la siguiente info

 'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'inventario_db', 
        'USER': 'usuario_inventario',    
        'PASSWORD': 'asd', 
        'HOST': '127.0.0.1',
        'PORT': '5432',

Puede ser modificadada en backend/settings.py

Para iniciar el backend:

- python -m venv venv
- venv/Scripts/actívate
- python install -r requirements.txt
- python manage.py migrate
- python manage.py runserver


Para iniciar el frontend:

- npm install
- npm start
