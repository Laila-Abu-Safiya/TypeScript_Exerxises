declare module 'stats' {
    type stats<T> = (input: T, comparator: T) =>  number;
    type getIndex = <T>(input: T[], comparator: Comparator<T>) => number ;
    type getElement = <T>(input: T[], comparator: Comparator<T>) => T |null;

    export const getMaxIndex : getIndex;
    export const getMaxElement : getElement;
    export const getMinIndex : getIndex;
    export const getMinElement : getElement;
    export const getMedianIndex : getIndex;
    export const getMedianElement : getElement;
    /*revesion for avarge */
    export const getAverageValue: <T>(input: T[], getValue: (item: T) => number) => number | null; 

}
