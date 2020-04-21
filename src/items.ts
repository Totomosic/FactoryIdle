export enum ItemId {
    None,
    Logs,
}

export interface IItemData {
    id: ItemId
    name: string
    description?: string
    sellPrice: number
    image?: string
}

function registerItem(map: Map<number, IItemData>, data: IItemData) {
    map.set(data.id, data)
}

export const ItemData = new Map<number, IItemData>()
registerItem(ItemData, { id: ItemId.None, name: "null", sellPrice: 0 })
registerItem(ItemData, { id: ItemId.Logs, name: "Logs", sellPrice: 1, image: "items/logs_oak.svg" })