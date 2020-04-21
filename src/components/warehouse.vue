<template>
    <div style="background-color: #575757">
        <div style="display: flex">
            <span v-for="(item, index) of storedItems" :key="index">
                <el-tooltip placement="top" :content="getItemName(item.id)" :enterable="false">
                    <el-button type="text">
                        <div class="item-container">
                            <img class="item-icon" :src="getItemImage(item.id)"/>
                            <div>{{ item.amount }}</div>
                        </div>
                    </el-button>
                </el-tooltip>
            </span>
        </div>
    </div>
</template>

<style scoped>
    .item-container {
        padding: 10px;
        padding-left: 20px;
        padding-right: 20px;
        border-radius: 15px;
        margin-left: 10px;
        margin-top: 10px;
        background-color: #444455;
        text-align: center;
        color: #EBEBEB;
        font-weight: bold;
    }

    .item-icon {
        width: 50px;
        height: 50px;
    }
</style>

<script>
import { ItemData } from "../items"

export default {
    props: ["api"],
    data() {
        return {}
    },
    methods: {
        getItemImage(itemId) {
            const data = ItemData.get(itemId)
            if (data) {
                return data.image
            }
            return ""
        },
        getItemName(itemId) {
            const data = ItemData.get(itemId)
            if (data) {
                return data.name
            }
            return "Unknown"
        }
    },
    computed: {
        storedItems() {
            return this.api.warehouse.storedItems
        },
        spaceUsed() {
            return this.api.warehouse.capacityUsed
        },
        capacity() {
            return this.api.warehouse.capacity
        }
    }
}
</script>