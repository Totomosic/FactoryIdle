import { FinanceApi } from "./finance_api";
import { WorkersApi } from "./workers_api";
import { WarehouseApi } from "./warehouse_api";

export class ApiBase {

    public financial: FinanceApi
    public warehouse: WarehouseApi
    public workers: WorkersApi

    constructor() {
        this.financial = new FinanceApi(this)
        this.warehouse = new WarehouseApi(this)
        this.workers = new WorkersApi(this)
    }
}
