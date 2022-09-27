# CLASS 39

## server

- cuando escribo un URL, del lado del cliente hace una peticion al server, y este escucha la request y responde
- Responde con, html, ese archivo viene del disk, del lado del servidor donde esta guardado
- Api es un simple interfase que nos deja hacer algo super complejo, de url es el interfase
- Formas para hacer request un url,enter,form,fetches(eventlistener),refresh,link, son diferente tipos de request, en el core son HTTPS
- HTTP son los core siendo, pero se dice, set->read post->create put->update delete->delete, se se los llama a los 4 CRUD

## INSTAGRAMA

- El api es el codiogo que corre en nuestro servidor que escucha la request
- Como creamos en ig, con POST, deja el cliente va a al servidor, en vez de POST es CREATE
- En el server el codigo que esta corriendo esta preparando para escuchar este post, siendo el API del backend, esta esperando escuchar este especifico post request, y 1º toma todo el req.body para agarrar este data, 2º la guardamos en otra database y cuando terminamos, 3º le decimos al navegador que todo esta ok
- cuando todo esta esta OK, vieja escuela es un GET request, es refrescar la pagina es un GET -> read, en el server tenemos la api, escucha el app.get(main page), que se acaba de refrescar, 1º ir a la database y tomar la data 2º la data la pasamos a un template 3º spit out html 4º vamos a responde con html
- liking va a ser un appdate en tiempo real, put->update, y el api del server escucha el request, app.put(/like), 1º vemos el data que vino req.body y la data que vieno, 2º ver esas data y capaz sumarle uno, 3º ir al database y buscamos ese post y le sumamos al like uno, 4º respondemos que todo esta ok, refresca el navegador y hace un nuevo get donde en el servidor ya esta todo este get(porque ya lo hicimos antes)
- para hacer un delete, tocar el tacho o los likes, va a tener que tener un addeventlistener, siendo del client side, fetch puede hacer put/delete, va del cliente al server, escucha la api del server, app.delete 1º toma la data del req.body 2º va a la database y borra ese archivo, 3º y responde con todo esta ok, 4º despues refresca, 5º hace un get

## EXPRESS

- Se supone que sea reapido node+c+c++, no importa que herramientas traigas, y hace una cosa que trae http, para crear nuestra api, para devolver json, y tambien da lo que esta entre cliente y servidor,
- npm init, va a dar pacage.json donde va a estar todas las dependensi
- creo archivos server.js/.gitignore e instalo express

```js
const express = require("express");
const app = express();
const PORT = 8000;

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => {
  console.log(`the server is running in port ${PORT}, go catch it!`);
});
```

- es como un eventlistener, en vez de ser un click es un network request
- si quiero servir con un html response.send si solo pongo index.html no va a saber donde buscar por eso se usa \_\_dirname para decirle que busque en el directorio local, donde empezar a busca
- Uso app.listenr para hacer el "server"
