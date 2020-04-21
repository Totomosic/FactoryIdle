import Vue from 'vue'
import Vuex from 'vuex'
import { StoreType } from './store_type'
import WorkersModule from './modules/workers'
import FinancialModule from './modules/financial'
import { WarehouseModule } from './modules/warehouse'

Vue.use(Vuex)

export default new Vuex.Store<StoreType>({
    modules: {
        workers: WorkersModule,
        financial: FinancialModule,
        warehouse: WarehouseModule
    }
})