import Vue from "vue"
import Element from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import Scene from "./components/scene.vue"
import store from "./store/store"
import { ApiBase } from "./api/api_base"

Vue.use(Element)

export function init(): ApiBase {
    const api = new ApiBase()
    new Vue({
        el: "#scene",
        store,
        components: { Scene },
        data() {
            return {
                api
            }
        }
    });
    (window as any).api = api
    return api
}