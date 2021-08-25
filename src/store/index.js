import { createStore } from 'vuex'

import moduloDiario from '../modules/diario/store/moduloDiario'

// Create a new store instance.
const store = createStore({
    modules: {

        diario: moduloDiario
    }

})



export default store