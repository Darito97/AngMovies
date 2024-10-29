# Movies

Esta es una página similar a Netflix con el catalogo de peliculas de TMDB.


###### Dependencias:
Las dependencias utilizadas son las siguientes:
- @angular/animations: Librería usada para agregar animaciones.
- ngx-toastr: Librería usada para agregar notificaciones en tiempo real.
  
Todas las demás dependencias encontradas en el package.json son del proyecto inicial de angular.


## Sobre el proyecto
En la estructura del proyecto encontraremos primero en la carpeta src el `app.component.html` el cual gestiona el proyecto y sirve como plantilla principal.
Dentro de el encontramos el header y el footer así como otros elementos que sirven para gestionar las vistas.

Despues podemos visualizar algunos componentes:
- **buscador**: se encarga de mostrar un formulario reactivo que permite realizar busquedas de peliculas
- **details-movie**: nos muestra en una pantalla completa la pelicula que estemos visitando.
- **favorites**: Se encarga de mostrar la lista de favoritos que tenemos guardada en nuestro usuario. Es una ruta protegida.
- **home**: Es la vista principal al comenzar a renderizar nuestra aplicación que permite visualizar nuestras peliculas listadas en un layout de carga infinita por scroll.
- **login**: Nos permite ingresar y es la ruta que inyecta el script para utilizar nuestro servicio de clerk
- **movie-card**: Es un componente creado para reutilizar en todo el proyecto. Muestra de una forma sencilla pero agradable una de las peliculas.
- **search**: Es la página encargada de mostrar los resultados de las busquedas que tenemos.

Tambien es importante destacar que utilizamos modulos como HttpClient para el manejo de las peticiones al servidor y un guard para la protección de nuestra ruta llamado: `auth.guard`.

Sobre los servicios que manejamos en angular son:
- **favorites**: se encarga de gestionar los favoritos, agregarlos a un estado temporal y conectarlos con el servidor para su guardado.
- **session**: Gestiona la sesión activa.


### Rutas
Las rutas de nuestro proyecto son las siguientes:
- **/** => Nuestra ruta principal
- **search/:query** => muestra los resultados de nuestra busqueda
- **login** => Muestra la pantalla de login
- **favorites** => Es una pestaña protegida y nos muestra nuestros favoritos
- **details/:id** => muestra los detalles de una pelicula especifica 

### Variables de entorno
Solamente tenemos una variable de entorno llamada `urlConfig` la cual se encarga de entregar la URL para las peticiones al servidor.