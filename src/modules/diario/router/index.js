export default {

    name: 'diario',
    component: () =>
        import ( /* webpackChunkName: "diario" */ '@/modules/diario/layouts/DiarioLayout.vue'),
    children: [{
            path: '',
            name: 'sin-datos',
            component: () =>
                import ( /* webpackChunkName: "sin entradas" */ '@/modules/diario/views/Nodatos.vue'),

        }, {
            path: ':id',
            name: 'datos',
            component: () =>
                import ( /* webpackChunkName: "nueva entrada" */ '@/modules/diario/views/Datosentrada.vue'),

        }

    ]

}