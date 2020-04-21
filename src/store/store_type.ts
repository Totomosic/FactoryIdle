import WorkersModule from "./modules/workers";
import FinancialModule from "./modules/financial";
import { WarehouseModule } from "./modules/warehouse";

export interface StoreType {
    workers: WorkersModule
    financial: FinancialModule
    warehouse: WarehouseModule
}