module.exports = function(server) {

    //route About
    server.route({
        method: 'GET',
        path: '/calculator/about',
        handler: function (pedido){

            var data = {
                msg: 'API Calculadora'
            };

            return data;

        }
    });

    //route Soma
    server.route({
        method: 'GET',
        path: '/calculator/soma/{n1}/{n2}',
        handler: function(pedido) {

            const n1 = parseInt(pedido.params.n1);
            const n2 = parseInt(pedido.params.n2);

            var data = {

                result: n1 + n2

            };

            return data;

        }
    });

    //route Subtração
    server.route({
        method: 'GET',
        path: '/calculator/sub/{n1}/{n2}',
        handler: function(pedido) {

            const n1 = parseInt(pedido.params.n1);
            const n2 = parseInt(pedido.params.n2);

            var data = {

                result: n1 - n2

            };

            return data;

        }
    });

    //route Multiplicação
    server.route({
        method: 'GET',
        path: '/calculator/multi/{n1}/{n2}',
        handler: function(pedido) {

            const n1 = parseInt(pedido.params.n1);
            const n2 = parseInt(pedido.params.n2);

            var data = {

                result: n1 * n2

            };

            return data;

        }
    });

    //route Divisão
    server.route({
        method: 'GET',
        path: '/calculator/div/{n1}/{n2}',
        handler: function(pedido) {

            const n1 = parseInt(pedido.params.n1);
            const n2 = parseInt(pedido.params.n2);

            var data = {

                result: n1 / n2

            };

            return data;

        }
    });

    //route Expressão
    server.route({
        method: 'GET',
        path: '/calculator/exp/{n1}/{n2}/{n3}/{n4}/{n5}',
        handler: function(pedido) {

            const n1 = parseInt(pedido.params.n1);
            const n2 = parseInt(pedido.params.n2);
            const n3 = parseInt(pedido.params.n3);
            const n4 = parseInt(pedido.params.n4);
            const n5 = parseInt(pedido.params.n5);

            var data = {

                result: n1 + n2 * n3 / n4 - n5

            };

            return data;

        }
    });

}