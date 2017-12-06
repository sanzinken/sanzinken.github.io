requirejs.config = ({
    baseUrl: 'js/lib',
    paths: {
        'app': '../app',
        'jquery': 'jquery'
    },
    shim: {
        jquery: {
            exports: '$'
        },
        lodash: {
            exports: '_'
        }
    }

});

requirejs(['app/model', 'app/controller', 'app/view'], function(Model, Controller, View) {
    const model = new Model();
    const view = new View(model);
    const controller = new Controller(model, view);
});