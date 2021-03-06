require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxbuttons');
require('../../jqwidgets/jqxwindow');
require('../../jqwidgets/jqxdocking');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
    (factory((global.react_jqxdocking = {}),global.React));
}(this, (function (exports,React) { 'use strict';

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

    var JqxDocking = /** @class */ (function (_super) {
        __extends(JqxDocking, _super);
        function JqxDocking(props) {
            var _this = _super.call(this, props) || this;
            /* tslint:disable:variable-name */
            _this._jqx = JQXLite;
            _this._id = 'JqxDocking' + _this._jqx.generateID();
            _this._componentSelector = '#' + _this._id;
            _this.state = { lastProps: props };
            return _this;
        }
        JqxDocking.getDerivedStateFromProps = function (props, state) {
            var areEqual = Object.is(props, state.lastProps);
            if (!areEqual) {
                var newState = { lastProps: props };
                return newState;
            }
            return null;
        };
        JqxDocking.prototype.componentDidUpdate = function () {
            var widgetOptions = this._manageProps();
            this.setOptions(widgetOptions);
        };
        JqxDocking.prototype.componentDidMount = function () {
            if (this.props.autoCreate) {
                this._createComponent();
            }
        };
        JqxDocking.prototype.render = function () {
            return (React.createElement("div", { id: this._id, className: this.props.className, style: this.props.style }, this.props.children));
        };
        JqxDocking.prototype.createComponent = function (options) {
            if (!this.props.autoCreate) {
                this._createComponent(options);
            }
            else {
                /* tslint:disable:no-console */
                console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" prop to "false".');
            }
        };
        JqxDocking.prototype.setOptions = function (options) {
            this._jqx(this._componentSelector).jqxDocking(options);
        };
        JqxDocking.prototype.getOptions = function (option) {
            return this._jqx(this._componentSelector).jqxDocking(option);
        };
        JqxDocking.prototype.addEventListener = function (name, callbackFn) {
            this._jqx(this._componentSelector).on(name, callbackFn);
        };
        JqxDocking.prototype.removeEventListener = function (name) {
            this._jqx(this._componentSelector).off(name);
        };
        JqxDocking.prototype.addWindow = function (windowId, mode, panel, position) {
            this._jqx(this._componentSelector).jqxDocking('addWindow', windowId, mode, panel, position);
        };
        JqxDocking.prototype.closeWindow = function (windowId) {
            this._jqx(this._componentSelector).jqxDocking('closeWindow', windowId);
        };
        JqxDocking.prototype.collapseWindow = function (windowId) {
            this._jqx(this._componentSelector).jqxDocking('collapseWindow', windowId);
        };
        JqxDocking.prototype.destroy = function () {
            this._jqx(this._componentSelector).jqxDocking('destroy');
        };
        JqxDocking.prototype.disableWindowResize = function (windowId) {
            this._jqx(this._componentSelector).jqxDocking('disableWindowResize', windowId);
        };
        JqxDocking.prototype.disable = function () {
            this._jqx(this._componentSelector).jqxDocking('disable');
        };
        JqxDocking.prototype.exportLayout = function () {
            return this._jqx(this._componentSelector).jqxDocking('exportLayout');
        };
        JqxDocking.prototype.enable = function () {
            this._jqx(this._componentSelector).jqxDocking('enable');
        };
        JqxDocking.prototype.expandWindow = function (windowId) {
            this._jqx(this._componentSelector).jqxDocking('expandWindow', windowId);
        };
        JqxDocking.prototype.enableWindowResize = function (windowId) {
            this._jqx(this._componentSelector).jqxDocking('enableWindowResize', windowId);
        };
        JqxDocking.prototype.focus = function () {
            this._jqx(this._componentSelector).jqxDocking('focus');
        };
        JqxDocking.prototype.hideAllCloseButtons = function () {
            this._jqx(this._componentSelector).jqxDocking('hideAllCloseButtons');
        };
        JqxDocking.prototype.hideAllCollapseButtons = function () {
            this._jqx(this._componentSelector).jqxDocking('hideAllCollapseButtons');
        };
        JqxDocking.prototype.hideCollapseButton = function (windowId) {
            this._jqx(this._componentSelector).jqxDocking('hideCollapseButton', windowId);
        };
        JqxDocking.prototype.hideCloseButton = function (windowId) {
            this._jqx(this._componentSelector).jqxDocking('hideCloseButton', windowId);
        };
        JqxDocking.prototype.importLayout = function (Json) {
            this._jqx(this._componentSelector).jqxDocking('importLayout', Json);
        };
        JqxDocking.prototype.move = function (windowId, panel, position) {
            this._jqx(this._componentSelector).jqxDocking('move', windowId, panel, position);
        };
        JqxDocking.prototype.pinWindow = function (windowId) {
            this._jqx(this._componentSelector).jqxDocking('pinWindow', windowId);
        };
        JqxDocking.prototype.setWindowMode = function (windowId, mode) {
            this._jqx(this._componentSelector).jqxDocking('setWindowMode', windowId, mode);
        };
        JqxDocking.prototype.showCloseButton = function (windowId) {
            this._jqx(this._componentSelector).jqxDocking('showCloseButton', windowId);
        };
        JqxDocking.prototype.showCollapseButton = function (windowId) {
            this._jqx(this._componentSelector).jqxDocking('showCollapseButton', windowId);
        };
        JqxDocking.prototype.setWindowPosition = function (windowId, top, left) {
            this._jqx(this._componentSelector).jqxDocking('setWindowPosition', windowId, top, left);
        };
        JqxDocking.prototype.showAllCloseButtons = function () {
            this._jqx(this._componentSelector).jqxDocking('showAllCloseButtons');
        };
        JqxDocking.prototype.showAllCollapseButtons = function () {
            this._jqx(this._componentSelector).jqxDocking('showAllCollapseButtons');
        };
        JqxDocking.prototype.unpinWindow = function (windowId) {
            this._jqx(this._componentSelector).jqxDocking('unpinWindow', windowId);
        };
        JqxDocking.prototype._createComponent = function (options) {
            var widgetOptions = options ? options : this._manageProps();
            this._jqx(this._componentSelector).jqxDocking(widgetOptions);
            this._wireEvents();
        };
        JqxDocking.prototype._manageProps = function () {
            var widgetProps = ['cookies', 'cookieOptions', 'disabled', 'floatingWindowOpacity', 'height', 'keyboardNavigation', 'mode', 'orientation', 'rtl', 'theme', 'width', 'windowsMode', 'windowsOffset'];
            var options = {};
            for (var prop in this.props) {
                if (widgetProps.indexOf(prop) !== -1) {
                    options[prop] = this.props[prop];
                }
            }
            return options;
        };
        JqxDocking.prototype._wireEvents = function () {
            for (var prop in this.props) {
                if (prop.indexOf('on') === 0) {
                    var originalEventName = prop.slice(2);
                    originalEventName = originalEventName.charAt(0).toLowerCase() + originalEventName.slice(1);
                    this._jqx(this._componentSelector).on(originalEventName, this.props[prop]);
                }
            }
        };
        JqxDocking.defaultProps = {
            autoCreate: true
        };
        return JqxDocking;
    }(React.PureComponent));
    var jqx = window.jqx;
    var JQXLite = window.JQXLite;
    var jqwidgets = window.jqwidgets;

    exports.default = JqxDocking;
    exports.jqx = jqx;
    exports.JQXLite = JQXLite;
    exports.jqwidgets = jqwidgets;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
