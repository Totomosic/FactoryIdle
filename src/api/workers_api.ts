import { ApiBase } from "./api_base";
import { Employee } from "../game/employees/employee";
import store from "../store/store";
import { getModule } from "vuex-module-decorators";
import WorkersModule from "../store/modules/workers";

const WORKER_COST = 100

export class WorkersApi {
    constructor(private _api: ApiBase) {

    }

    public get module(): WorkersModule {
        return getModule(WorkersModule, store)
    }

    public get unassignedWorkers(): Employee[] {
        return this.module.workers.filter(w => !w.assigned)
    }

    public get allWorkers(): Employee[] {
        return this.module.workers
    }

    public addWorker(worker: Employee) {
        this.module.addWorker(worker)
    }

    public removeWorker(worker: Employee): boolean {
        return this.module.removeWorker(worker)
    }

    public purchaseWorker(): Employee | null {
        if (this._api.financial.funds >= WORKER_COST) {
            if (this._api.financial.removeFunds(WORKER_COST)) {
                const employee = new Employee(1.0)
                this.addWorker(employee)
                return employee
            }
        }
        return null
    }
}