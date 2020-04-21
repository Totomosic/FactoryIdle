import { ApiBase } from "./api_base";
import { ItemId } from "../items";
import { WarehouseModule } from "../store/modules/warehouse";
import store from "../store/store";
import { getModule } from "vuex-module-decorators";

export class WarehouseApi {
    constructor(_: ApiBase) {

    }

    public get module(): WarehouseModule {
        return getModule(WarehouseModule, store)
    }

    public get capacity(): number {
        return this.module.capacity
    }

    public get isFull(): boolean {
        return this.module.storedItems.size === this.capacity
    }

    public hasItem(itemId: ItemId): boolean {
        return this.module.storedItems.has(itemId)
    }

    public getItemCount(itemId: ItemId): number {
        const count = this.module.storedItems.get(itemId)
        if (count !== undefined) {
            return count
        }
        return 0
    }

    public storeItem(itemId: ItemId, amount: number = 1): boolean {
        return this.module.addItem(itemId, amount)
    }

    public removeItem(itemId: ItemId, amount: number): boolean {
        return this.module.removeItem(itemId, amount)
    }
}