POST http://localhost:3000/authUser/registerUser HTTP/1.1
Content-Type: application/json

//no es necesrio pasar todos los campos, solo los del frontend,con la id generad se obtendran los demas

# { "nombre":"Daisy",

# "apellido":"Castillo",

# "email":"daisylogin@gmail.com",

# "password": "2qasasL"

# }

{

    "nombre":"Daisy ",
    "apellido": "Castillo",
    "email":"daisy111wooe@gmail.com",
    "password": "10Lqwsss"

}

###

POST http://localhost:3000/authUser/loginUser HTTP/1.1
Content-Type: application/json

{
"email":"daisy111wooe@gmail.com",
"password": "10Lqwsss"
}

###

//logout ok
POST http://localhost:3000/authUser/logoutUser HTTP/1.1
Content-Type: application/json

{
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQxNmYyYjZlYWY3MGZmNjQ2YmU4ZGMiLCJyb2xlIjpbeyJfaWQiOiI2NWM4ZDA3YTY0MGFmNjJhYWY3MTFjYjEiLCJuYW1lIjoidXNlciIsIl9fdiI6MH1dLCJpYXQiOjE3MDgyMjQzMDIsImV4cCI6MTcwODIyNzkwMn0.6z9GACjcPECZW29iW9I6w7XoS69F4ej2NmkEXRboF2o"
}

###

POST http://localhost:3000/materials/QRGenerator HTTP/1.1
Content-Type: application/json
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQwYzFmMGFiYThhZWMyMzVmNDUxM2MiLCJyb2xlIjpbXSwiaWF0IjoxNzA4MTg0NTY1LCJleHAiOjE3MDgxODgxNjV9.0D2Cr9UDUnyQwbz-cGiEkB3j5MCyE5lZCFGoce_dBwI

{
"imagen": ""
}

###

//RUTAS ADMIN

###

POST http://localhost:3000/authAdmin/registerAdmin HTTP/1.1
Content-Type: application/json

# { "nombre":"Daisy",

# "apellido":"Castillo",

# "email":"daisylogin@gmail.com",

# "password": "2qasasL"

# }

{

    "nombre":"Daisy",

"apellido":"Castillo",
"email":"daisyadmin9s1@gmail.com",
"password": "109qaaLR"

}

//si quero registrar un admin o subadmin,debo dar aca el rol

###

###

//este token es de post ligin..tomo este token y lo pruebo en una ruta create course
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTkxODAzOTM4NjQzYzk3NTVlYjVlZmQiLCJpYXQiOjE3MDQxNTU5NTAsImV4cCI6MTcwNDE2MzE1MH0.84fwC8xZ-bTKXkhGDIlL9yw2dyJKNTV8rx7dRAAZ4iI"
"password": "109qasasaLR"

###

POST http://localhost:3000/authAdmin/loginAdmin HTTP/1.1
Content-Type: application/json

{
"email":"daisyadmin9s1@gmail.com",
"password": "109qaaLR"
}

###

POST http://localhost:3000/authAdmin/logoutAdmin HTTP/1.1
Content-Type: application/json

{
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQxNzA1NDYzNTMwOGZlZDAxYjJhMzkiLCJyb2xlIjpbeyJfaWQiOiI2NWQxNzAxMGRlNjAxMmViZmQxMjcyNzEiLCJuYW1lIjoiVXNlciIsIl9fdiI6MH1dLCJpYXQiOjE3MDgyMjQ2MDIsImV4cCI6MTcwODIyODIwMn0.lQqU5IaPuKpeyQaayKhmYVGGaY-py0LnFviX2GXFguw"
}

###

//get all users ok
GET http://localhost:3000/users HTTP/1.1

###

//get a user
GET http://localhost:3000/users/65c91ee6fc4a4cb9eea76ce0 HTTP/1.1

###

//update user:
PUT http://localhost:3000/users/65d0de1daed740fe3005a4d2 HTTP/1.1
Content-Type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQwZGUxZGFlZDc0MGZlMzAwNWE0ZDIiLCJyb2xlIjpbXSwiaWF0IjoxNzA4MTg3NjU1LCJleHAiOjE3MDgxOTEyNTV9.hWVN6eGFAUPWeOQNX6-ucDQFfndZReUVZV93T7l7QTw

{  
 "email":"daisyuser2@gmail.com",
"password": "10Lqwssseeeee"
}

###

//delete user, me dice no autorizado,revisar
//para eliminar user,debo pasar token de login del admin,no del user a eliminar,para eliminar, hacer los roles de usuario
DELETE http://localhost:3000/users/65d0de1daed740fe3005a4d2
Content-Type: application/json
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWNkNDJlZGI0NDAzMDdkYmFhZDA2YzEiLCJyb2xlIjpbXSwiaWF0IjoxNzA3OTUwOTEzLCJleHAiOjE3MDc5NTQ1MTN9.KU3pyx4QuI2l0wF7sW2IcUo0ph-_fz5kr1FCXrTq_-Q

###

//Crear Punto de reciclaje
POST http://localhost:3000/recycling-center/points

Ejemplo:
{
"nombre": "Punto de Reciclaje 4",
"imagen": "https://ejemplo.com/imagen.jpg",
"ubicacion": "Avenida El Sopita 54",
"latLng": {
"lat": "-58.46463459803104",
"lng": "-34.5673114271266"
},
"horario_atencion": "Martes a Sábado de 11 a 17 hs.",
"materiales": [
"RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor"
]
}

//Obtener todos los puntos de reciclaje
GET http://localhost:3000/recycling-center/points

//Obtener Punto de reciclaje por Id
GET http://localhost:3000/recycling-center/point/65d230afcca96b9e6660677c

//Filtrado de puntos de reciclaje por latitud y longitud
GET http://localhost:3000/recycling-center/filter-points?lat=-58.483418715328696&lng=-34.649461140523
