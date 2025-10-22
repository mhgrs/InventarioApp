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
- pip install django djangorestframework psycopg2-binary django-cors-headers
- python manage.py migrate
- python manage.py runserver


Para iniciar el frontend:

- npm install
- npm start

Se abre automaticamente, de no ser asi, puedes acceder por http://localhost:3000/.


*** ACTUALIZACION *** 19:21 22-10-2025

D
Para crear el usuario administrador es necesario usar " python manage.py createsuperuser " desde la consola que te posiciona en el 
backend, puedes usar "admin" como usuario y contraseña a elección, email no es obligatorio.

Para crear más usuarios puedes usar el panel de administración de Django: http://127.0.0.1:8000/admin/
