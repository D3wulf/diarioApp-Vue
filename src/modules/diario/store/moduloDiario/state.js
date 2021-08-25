export default () => ({

    isLoading: true,
    entries: [{
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aperiam nesciunt delectus nihil officiis optio magnam non molestias perferendis, fuga, dicta libero, autem excepturi ipsum est beatae temporibus consequuntur rem.',
            img: null
        }, {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aperiam nesciunt delectus nihil officiis optio magnam non molestias perferendis, fuga, dicta libero, autem excepturi ipsum est beatae temporibus consequuntur rem.',
            img: null
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aperiam nesciunt delectus nihil officiis optio magnam non molestias perferendis, fuga, dicta libero, autem excepturi ipsum est beatae temporibus consequuntur rem.',
            img: null
        },
    ]
})