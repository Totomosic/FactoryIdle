import { Module, VuexModule, Mutation } from "vuex-module-decorators";
import { ItemId } from "../../items";

export interface IStoredItem {
    id: ItemId
    amount: number
}

@Module({ name: 'warehouse' })
export class WarehouseModule extends VuexModule {
    public capacity: number = 0
    public storedItems: Map<ItemId, number> = new Map<ItemId, number>()

    @Mutation
    public addItem(itemId: ItemId, amount: number = 1): boolean {
        const existingAmount = this.storedItems.get(itemId)
        if (existingAmount !== undefined) {
            this.storedItems.set(itemId, existingAmount + amount)
            return true
        }
        if (this.storedItems.size < this.capacity) {
            this.storedItems.set(itemId, amount)
            return true
        }
        return false
    }

    @Mutation
    public removeItem(itemId: ItemId, amount: number): boolean {
        const existingAmount = this.storedItems.get(itemId)
        if (existingAmount !== undefined && existingAmount >= amount) {
            const remaining = existingAmount - amount
            if (remaining > 0) {
                this.storedItems.set(itemId, remaining)
            } else {
                this.storedItems.delete(itemId)
            }
            return true
        }
        return false
    }
}