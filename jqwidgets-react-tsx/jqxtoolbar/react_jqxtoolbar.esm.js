import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxscrollbar from '../../jqwidgets/jqxscrollbar';
import * as jqxlistbox from '../../jqwidgets/jqxlistbox';
import * as jqxdropdownlist from '../../jqwidgets/jqxdropdownlist';
import * as jqxcombobox from '../../jqwidgets/jqxcombobox';
import * as jqxinput from '../../jqwidgets/jqxinput';
import * as jqxtoolbar from '../../jqwidgets/jqxtoolbar';
import { createElement, PureComponent } from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var JqxToolBar = /** @class */ (function (_super) {
    __extends(JqxToolBar, _super);
    function JqxToolBar(props) {
        var _this = _super.call(this, props) || this;
        /* tslint:disable:variable-name */
        _this._jqx = JQXLite;
        _this._id = 'JqxToolBar' + _this._jqx.generateID();
        _this._componentSelector = '#' + _this._id;
        _this.state = { lastProps: props };
        return _this;
    }
    JqxToolBar.getDerivedStateFromProps = function (props, state) {
        var areEqual = Object.is(props, state.lastProps);
        if (!areEqual) {
            var newState = { lastProps: props };
            return newState;
        }
        return null;
    };
    JqxToolBar.prototype.componentDidUpdate = function () {
        var widgetOptions = this._manageProps();
        this.setOptions(widgetOptions);
    };
    JqxToolBar.prototype.componentDidMount = function () {
        if (this.props.autoCreate) {
            this._createComponent();
        }
    };
    JqxToolBar.prototype.render = function () {
        return (createElement("div", { id: this._id, className: this.props.className, style: this.props.style }, this.props.children));
    };
    JqxToolBar.prototype.createComponent = function (options) {
        if (!this.props.autoCreate) {
            this._createComponent(options);
        }
        else {
            /* tslint:disable:no-console */
            console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" prop to "false".');
        }
    };
    JqxToolBar.prototype.setOptions = function (options) {
        this._jqx(this._componentSelector).jqxToolBar(options);
    };
    JqxToolBar.prototype.getOptions = function (option) {
        return this._jqx(this._componentSelector).jqxToolBar(option);
    };
    JqxToolBar.prototype.addEventListener = function (name, callbackFn) {
        this._jqx(this._componentSelector).on(name, callbackFn);
    };
    JqxToolBar.prototype.removeEventListener = function (name) {
        this._jqx(this._componentSelector).off(name);
    };
    JqxToolBar.prototype.addTool = function (type, position, separator, menuToolIninitialization) {
        this._jqx(this._componentSelector).jqxToolBar('addTool', type, position, separator, menuToolIninitialization);
    };
    JqxToolBar.prototype.disableTool = function (index, disable) {
        this._jqx(this._componentSelector).jqxToolBar('disableTool', index, disable);
    };
    JqxToolBar.prototype.destroy = function () {
        this._jqx(this._componentSelector).jqxToolBar('destroy');
    };
    JqxToolBar.prototype.destroyTool = function (index) {
        this._jqx(this._componentSelector).jqxToolBar('destroyTool', index);
    };
    JqxToolBar.prototype.getTools = function () {
        return this._jqx(this._componentSelector).jqxToolBar('getTools');
    };
    JqxToolBar.prototype.renderWidget = function () {
        this._jqx(this._componentSelector).jqxToolBar('render');
    };
    JqxToolBar.prototype.refresh = function () {
        this._jqx(this._componentSelector).jqxToolBar('refresh');
    };
    JqxToolBar.prototype._createComponent = function (options) {
        var widgetOptions = options ? options : this._manageProps();
        this._jqx(this._componentSelector).jqxToolBar(widgetOptions);
        this._wireEvents();
    };
    JqxToolBar.prototype._manageProps = function () {
        var widgetProps = ['disabled', 'height', 'initTools', 'minimizeWidth', 'minWidth', 'maxWidth', 'rtl', 'tools', 'theme', 'width'];
        var options = {};
        for (var prop in this.props) {
            if (widgetProps.indexOf(prop) !== -1) {
                options[prop] = this.props[prop];
            }
        }
        return options;
    };
    JqxToolBar.prototype._wireEvents = function () {
        for (var prop in this.props) {
            if (prop.indexOf('on') === 0) {
                var originalEventName = prop.slice(2);
                originalEventName = originalEventName.charAt(0).toLowerCase() + originalEventName.slice(1);
                this._jqx(this._componentSelector).on(originalEventName, this.props[prop]);
            }
        }
    };
    JqxToolBar.defaultProps = {
        autoCreate: true
    };
    return JqxToolBar;
}(PureComponent));
var jqx = window.jqx;
var JQXLite = window.JQXLite;
var jqwidgets = window.jqwidgets;

export default JqxToolBar;
export { jqx, JQXLite, jqwidgets };
