import Graph from "graphology";
interface GraphologyLayout<T> {
    (graph: Graph, options: T): {
        [node: string]: {
            [dimension: string]: number;
        };
    };
    assign(graph: Graph, options: T): void;
}
export declare type LayoutHook<T> = (settings?: T) => {
    positions: () => {
        [node: string]: {
            [dimension: string]: number;
        };
    };
    assign: () => void;
};
export declare function useLayoutFactory<T>(layout: GraphologyLayout<T>, defaultSettings: T): LayoutHook<T>;
export {};
