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

const itemImagePrefix = "static/images/items/"
function registerItem(map: Map<number, IItemData>, data: IItemData) {
    if (data.image) {
        data.image = `${itemImagePrefix}${data.image}`
    }
    map.set(data.id, data)
}

export const ItemData = new Map<number, IItemData>()
registerItem(ItemData, { id: ItemId.None, name: "null", sellPrice: 0 })
registerItem(ItemData, { id: ItemId.Logs, name: "Logs", sellPrice: 1, image: "logs_oak.svg" })