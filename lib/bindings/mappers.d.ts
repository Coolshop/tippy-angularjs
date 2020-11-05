declare const _default: {
    boolean: {
        beforeTest(value: any, attr: string): any;
    };
    'string,string[]': {
        beforeSet(value?: string | undefined): string | string[];
    };
    number: {
        beforeSet(value?: string | undefined): number;
    };
    'number,number[]': {
        beforeSet(value?: string | undefined): number | number[];
    };
    'number,string': {
        beforeSet(value?: string | undefined): string | number | undefined;
    };
};
export default _default;
