import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module({ name: 'financial' })
export default class FinancialModule extends VuexModule {
    public funds: number = 0

    @Mutation
    public setFunds(funds: number) {
        this.funds = funds
    }
}