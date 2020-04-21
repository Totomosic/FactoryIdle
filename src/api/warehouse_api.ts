import { ApiBase } from "./api_base";
import { ItemId } from "../items";
import { WarehouseModule, warehouseHasItem, getWarehouseItemInfo, IStoredItem } from "../store/modules/warehouse";
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
        return this.module.storedItems.length === this.capacity
    }

    public get capacityUsed(): number {
        return this.module.storedItems.length
    }

    public get storedItems(): IStoredItem[] {
        return this.module.storedItems
    }

    public hasItem(itemId: ItemId): boolean {
        return warehouseHasItem(this.module, itemId)
    }

    public getItemCount(itemId: ItemId): number {
        const info = getWarehouseItemInfo(this.module, itemId)
        if (info !== null) {
            return info.amount
        }
        return 0
    }

    public storeItem(itemId: ItemId, amount: number = 1) {
        this.module.addItem({itemId, amount})
    }

    public removeItem(itemId: ItemId, amount: number) {
        this.module.removeItem({itemId, amount})
    }
}
