import * as Vue from 'vue';
export interface VueClassOptions<V extends Vue> extends Vue.ComponentOptions<V> {
    name?: string;
    template?: any;
}
export interface WatchOptions extends Vue.WatchOptions {
}
export declare type VueClass = {
    new (): Vue;
} & typeof Vue;
declare const Component: <U extends Vue>(options: VueClassOptions<U>) => <V extends VueClass>(component: V) => V;
declare const Watch: (path: string, options?: WatchOptions) => MethodDecorator;
export { Vue, Component, Watch };
