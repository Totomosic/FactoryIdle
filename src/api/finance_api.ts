import store from "../store/store";
import { getModule } from "vuex-module-decorators";
import FinancialModule from "../store/modules/financial";
import { ApiBase } from "./api_base";

export class FinanceApi {
    constructor(_: ApiBase) {

    }

    public get module(): FinancialModule {
        return getModule(FinancialModule, store)
    }

    public get funds(): number {
        return this.module.funds
    }

    public set funds(funds: number) {
        this.module.setFunds(funds)
    }

    public addFunds(funds: number) {
        this.funds += funds
    }

    public removeFunds(funds: number): boolean {
        if (this.funds >= funds) {
            this.funds -= funds
            return true
        }
        return false
    }
}
