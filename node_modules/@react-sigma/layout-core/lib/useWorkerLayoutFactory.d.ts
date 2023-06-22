import Graph from "graphology";
export declare type LayoutWorkerHook<T> = (settings: T) => {
    stop: () => void;
    start: () => void;
    kill: () => void;
    isRunning: boolean;
};
interface GraphologyWorkerLayout {
    stop: () => void;
    start: () => void;
    kill: () => void;
}
interface GraphologyWorkerLayoutConstructor<T> {
    new (graph: Graph, settings: T): GraphologyWorkerLayout;
}
export declare function useWorkerLayoutFactory<T>(worker: GraphologyWorkerLayoutConstructor<T>): LayoutWorkerHook<T>;
export {};
