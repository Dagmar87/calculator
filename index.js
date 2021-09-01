const Hapi = require('@hapi/hapi');

const host = 'localhost';
const port = 3000;

const server = Hapi.Server({
    host: host,
    port: port
});

const init = async () => {

    await server.start();
    console.log("Servidor na porta: " + port);

}

require('./routes/routes')(server);

init();

