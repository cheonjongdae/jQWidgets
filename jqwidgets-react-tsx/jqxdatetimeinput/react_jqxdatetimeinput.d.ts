import * as React from 'react';
declare class JqxDateTimeInput extends React.PureComponent<IDateTimeInputProps, IState> {
    protected static defaultProps: IDateTimeInputProps;
    protected static getDerivedStateFromProps(props: IDateTimeInputProps, state: IState): null | IState;
    private _jqx;
    private _id;
    private _componentSelector;
    constructor(props: IDateTimeInputProps);
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): React.ReactNode;
    createComponent(options: IDateTimeInputProps): void;
    setOptions(options: IDateTimeInputProps): void;
    getOptions(option: string): any;
    addEventListener(name: string, callbackFn: (e?: Event) => void): void;
    removeEventListener(name: string): void;
    close(): void;
    destroy(): void;
    focus(): void;
    getRange(date: any): any;
    getText(): string;
    getDate(): any;
    getMaxDate(): any;
    getMinDate(): any;
    open(): void;
    setRange(date: any, date2: any): void;
    setMinDate(date: any): void;
    setMaxDate(date: any): void;
    setDate(date: any): void;
    val(value?: any, value2?: any): any;
    private _createComponent;
    private _manageProps;
    private _wireEvents;
}
export default JqxDateTimeInput;
export declare const jqx: any;
export declare const JQXLite: any;
export declare const jqwidgets: any;
interface IState {
    lastProps: object;
}
interface IDateTimeInputOptions {
    animationType?: 'fade' | 'slide' | 'none';
    allowNullDate?: boolean;
    allowKeyboardDelete?: boolean;
    clearString?: string;
    culture?: string;
    closeDelay?: number;
    closeCalendarAfterSelection?: boolean;
    dropDownHorizontalAlignment?: 'left' | 'right';
    dropDownVerticalAlignment?: 'top' | 'bottom';
    disabled?: boolean;
    enableBrowserBoundsDetection?: boolean;
    enableAbsoluteSelection?: boolean;
    firstDayOfWeek?: number;
    formatString?: 'd' | 'f' | 'n' | 'c' | 'p' | 'd' | 'dd' | 'ddd' | 'dddd' | 'h' | 'hh' | 'H' | 'HH' | 'm' | 'mm' | 'M' | 'MM' | 'MMM' | 'MMMM' | 's' | 'ss' | 't' | 'tt' | 'y' | 'yy' | 'yyy' | 'yyyy';
    height?: string | number;
    min?: Date;
    max?: Date;
    openDelay?: number;
    placeHolder?: string;
    popupZIndex?: number;
    rtl?: boolean;
    readonly?: boolean;
    showFooter?: boolean;
    selectionMode?: 'none' | 'default' | 'range';
    showWeekNumbers?: boolean;
    showTimeButton?: boolean;
    showCalendarButton?: boolean;
    theme?: string;
    template?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
    textAlign?: 'left' | 'right' | 'center';
    todayString?: string;
    value?: Date;
    width?: string | number;
}
export interface IDateTimeInputProps extends IDateTimeInputOptions {
    autoCreate?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onChange?: (e?: Event) => void;
    onClose?: (e?: Event) => void;
    onOpen?: (e?: Event) => void;
    onTextchanged?: (e?: Event) => void;
    onValueChanged?: (e?: Event) => void;
}
