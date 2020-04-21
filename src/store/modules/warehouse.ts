import { Module, VuexModule, Mutation } from "vuex-module-decorators";
import { ItemId } from "../../items";

export interface IStoredItem {
    id: ItemId
    amount: number
}

export function getWarehouseItemInfo(warehouse: WarehouseModule, itemId: ItemId): IStoredItem | null {
    return warehouse._itemMap.get(itemId) || null
}

export function warehouseHasItem(warehouse: WarehouseModule, itemId: ItemId): boolean {
    return warehouse._itemMap.has(itemId)
}

@Module({ name: 'warehouse' })
export class WarehouseModule extends VuexModule {
    public capacity: number = 5
    public storedItems: IStoredItem[] = []
    public _itemMap = new Map<ItemId, IStoredItem>()

    @Mutation
    public addItem({ itemId, amount }: { itemId: ItemId, amount?: number }) {
        const amt = amount === undefined ? 1 : amount
        const info = getWarehouseItemInfo(this, itemId)
        if (info !== null) {
            info.amount += amt
        } else if (this.storedItems.length < this.capacity) {
            const item: IStoredItem = { id: itemId, amount: amt }
            this.storedItems.push(item)
            this._itemMap.set(itemId, item)
        }
    }

    @Mutation
    public removeItem({ itemId, amount }: { itemId: ItemId, amount: number }) {
        const info = getWarehouseItemInfo(this, itemId)
        if (info !== null && info.amount >= amount) {
            info.amount -= amount
            if (info.amount <= 0) {
                const index = this.storedItems.indexOf(info)
                if (index >= 0) {
                    this.storedItems.splice(index, 1)
                    this._itemMap.delete(info.id)
                }
            }
        }
    }
}