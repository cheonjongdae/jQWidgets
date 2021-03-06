import * as React from 'react';
declare class JqxRating extends React.PureComponent<IRatingProps, IState> {
    protected static defaultProps: IRatingProps;
    protected static getDerivedStateFromProps(props: IRatingProps, state: IState): null | IState;
    private _jqx;
    private _id;
    private _componentSelector;
    constructor(props: IRatingProps);
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): React.ReactNode;
    createComponent(options: IRatingProps): void;
    setOptions(options: IRatingProps): void;
    getOptions(option: string): any;
    addEventListener(name: string, callbackFn: (e?: Event) => void): void;
    removeEventListener(name: string): void;
    disable(): void;
    enable(): void;
    getValue(): number;
    setValue(value: number): void;
    val(value?: number): number;
    private _createComponent;
    private _manageProps;
    private _wireEvents;
}
export default JqxRating;
export declare const jqx: any;
export declare const JQXLite: any;
export declare const jqwidgets: any;
interface IState {
    lastProps: object;
}
interface IRatingOptions {
    count?: number;
    disabled?: boolean;
    height?: string | number;
    itemHeight?: number;
    itemWidth?: number;
    precision?: number;
    singleVote?: boolean;
    value?: number;
    width?: string | number;
}
export interface IRatingProps extends IRatingOptions {
    autoCreate?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onChange?: (e?: Event) => void;
}
