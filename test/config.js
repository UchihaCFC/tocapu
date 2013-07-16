require.config({
    baseUrl: './',
    paths: {
        jquery: 'vendor/jquery/jquery',
        cartodb: 'vendor/cartodb.js/dist/cartodb.nojquery'
    },
    shim: {
        cartodb: {
            deps: ['jquery'],
            exports: 'cartodb'
        },
        jquery: {
            exports: '$'
        }
    }
});