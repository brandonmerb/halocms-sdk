import "vue-router";
import { LayoutOptions } from "./layout-options.interface";

declare module "vue-router" {
    export interface RouteMeta {
        layout?: LayoutOptions;
    }
}