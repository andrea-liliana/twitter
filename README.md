# Twitter

Para crear la aplicación `Twitter` se han definido diferentes sprints con los siguientes requerimientos a desarrollar:

## SPRINT 1: Creación de un modelo
 
**Requerimiento 1:** Se necesita un modelo `User` para guardar la información de un usuario de nuestra app: `id`, `username`, `name`, `bio`, `dateCreated` y `lastUpdated`. 
 
**Requerimiento 2:** Las propiedades `dateCreated` y `lastUpdated` deberán ser datos de tipo fecha que guarden el momento en que se instancie un nuevo objeto de la clase `User`.
 
**Requerimiento 3:** Cada objeto tipo user necesita los siguietes getters: `getUsername`, `getBio`, `getDateCreated`, `getLastUpdated`.
 
**Requerimiento 4:** Cada objeto necesita los siguientes setters: `setUsername` y `setBio`, para actualizar dichas propiedades.

## SPRINT 2: Interacción con el modelo - Agregar Servicios

**Requerimiento 1:**  Crear un nuevo usuario con lo ya definido en el sprint anterior, usando una nueva clase llamada `UserService`.

Criterios de aceptación:

1. Esta clase deberá tener un método `create` que se pueda usar sin instanciar (static method), y que reciba solo los parámetros del `id`, `username` y `name`. 

2. El valor de `bio` deberá ser por default para todos los `user` creados.

**Requerimiento 2:** Agregar un nuevo método estático en `UserService` llamado `getInfo` que al recibir un objeto de la clase `User`, regrese una lista con todos los valores de los atributos de dicho objeto.

**Requerimiento 3:** Agregar un nuevo método estático en `UserService` llamado `updateUserUsername`, que reciba un objeto de la clase `User` y un nuevo string, que actualizará el valor de `username`. 

**Requerimiento 4:** Agregar un nuevo método estático en `UserService` llamado `getAllUsernames`, que recibirá una lista de objetos de la clase `User`, y regresará la lista de todos los usernames de dichos objetos. 

## SPRINT 3: Agregar vistas

Crear una clase llamada `UserView` que servirá para interactuar con el modelo `User` a través de `userService`. Crear un método en esta clase llamado `create User` que sirva para crear un nuevo objeto user a partir de un `payload`, es decir un objeto que contenga información para crearlo.

**Requerimiento 1:** Validar que al enviar en el `payload` un valor `null`, obtener un objeto con la llave `error` y el valor que indique `payload no existe`.

**Requerimiento 2:** Validar que un `payload` contenga en alguna de las llaves `username`, `name`, o `id` un valor en `null`. Si hay un valor `null` regresar un objeto con la llave `error` y que indique el texto: `necesitan tener un valor válido`.

**Requerimiento 3:** Validar que un `payload` con algunas de las propiedades necesarias regrese un objeto con la llave `error` indicando `necesitan tener un valor válido`.

**Requerimiento 4:** Verificar que se pueda crear un objeto `User`, al enviar un payload con las siguientes propiedades: `username`, `id` y `name`.