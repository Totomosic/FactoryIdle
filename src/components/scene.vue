<template>
    <div class="scene-root">
        <div style="display: flex">
            <div class="game-title">Factory Idle</div>
            <div class="page-header">
                <span class="header-content"><i style="margin-right: 10px" :class="currentPage.icon"/>{{ currentPage.name }}</span>
            </div>
        </div>
        <div style="display: flex">
            <div class="sidebar">
                <el-menu :default-active="`${currentIndex}`" background-color="#444455" text-color="#EBEBEB" active-text-color="#44AA44" style="border: none">
                    <el-menu-item v-for="(menu, index) of submenus" :index="`${index}`" :key="index" @click="handleClicked">
                        <i :class="menu.icon"/>
                        <span>{{ menu.name }}</span>
                    </el-menu-item>
                </el-menu>
            </div>
            <div>
                <component class="selected-page" :is="currentPageComponent" :api="api"></component>
            </div>
        </div>
    </div>
</template>

<style>
    :root {
        --title-width: 15vw;
        --header-width: calc(100vw - var(--title-width));
    }
</style>

<style scoped>

    .scene-root {
        font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }

    .game-title {
        height: 50px;
        width: var(--title-width);
        min-width: var(--title-width);
        background-color: #4444AA;
        text-align: center;
        vertical-align: middle;
        font-size: 20px;
        line-height: 45px;
        font-weight: bolder;
        color: #EBEBEB
    }

    .page-header {
        width: var(--header-width);
        min-width: var(--header-width);
        height: 50px;
        font-size: 20px;
        font-weight: bold;
        background-color: rgb(161, 130, 27);
        line-height: 45px;
        color: #EBEBEB
    }

    .header-content {
        margin-left: 10%;
    }

    .sidebar {
        width: var(--title-width);
        min-width: var(--title-width);
        height: calc(100vh - 50px);
        min-height: calc(100vh - 50px);
        background-color: #444455;
    }

    .selected-page {
        min-width: var(--header-width);
        min-height: calc(100vh - 50px);
    }

</style>

<script>
    import WarehouseComponent from "./warehouse"

    export default {
        props: ["api"],
        components: { WarehouseComponent },
        data() {
            return {
                defaultComponent: null,
                currentIndex: 0,
                submenus: [
                    {
                        name: "Shop",
                        icon: "el-icon-wallet",
                        component: null
                    },
                    {
                        name: "Warehouse",
                        icon: "el-icon-present",
                        component: WarehouseComponent
                    },
                    {
                        name: "Workforce",
                        icon: "el-icon-user-solid",
                        component: null
                    },
                    {
                        name: "Resources",
                        icon: "el-icon-truck",
                        component: null
                    },
                    {
                        name: "Processing",
                        icon: "el-icon-office-building",
                        component: null
                    },
                    {
                        name: "Trade",
                        icon: "el-icon-coin",
                        component: null
                    },
                    {
                        name: "Settings",
                        icon: "el-icon-setting",
                        component: null
                    }
                ]
            }
        },
        methods: {
            handleClicked(component) {
                this.currentIndex = parseInt(component.index)
            }
        },
        computed: {
            currentPageComponent() {
                return this.submenus[this.currentIndex].component || this.defaultComponent
            },
            currentPage() {
                return this.submenus[this.currentIndex] || {}
            },
            funds() {
                return this.api.financial.funds
            }
        }
    }

</script>