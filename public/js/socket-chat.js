var socket = io();

var params = new URLSearchParams(window.location.search);

if (!params.has('nombre') || !params.has('sala')) {
    window.location = 'index.html';
    throw new Error('El nombre y sala son es necesario');
}

var usuario = {
    nombre: params.get('nombre'),
    sala: params.get('sala')
};

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('desconectado del servidor');

});

socket.emit('entrarChat', usuario, function(res) {
    console.log(res);
});

socket.on('crearMensaje', function(data) {
    console.log(data);
});

socket.on('listaPersona', function(data) {
    console.log(data);
})

// mensaje privado
socket.on('mensajePrivado', (data) => {
    console.log(data);
});