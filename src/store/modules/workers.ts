import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import { Employee } from "../../game/employees/employee"

@Module({ name: 'workers' })
export default class WorkersModule extends VuexModule {
    public workers: Employee[] = []

    @Mutation
    public addWorker(worker: Employee) {
        this.workers.push(worker)
    }

    @Mutation
    public removeWorker(worker: Employee): boolean {
        const index = this.workers.indexOf(worker)
        if (index >= 0) {
            this.workers.splice(index, 1)
            return true
        }
        return false
    }
}