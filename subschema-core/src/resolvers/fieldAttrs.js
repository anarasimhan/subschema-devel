"use strict";

import {applyFuncs} from "subschema-utils";

function handleAttrs(value, attr, propKeys) {
    if (!value) return;


    const keys = Object.keys(value);
    for (let i = 0, l = keys.length; i < l; i++) {
        const key = keys[i];
        if (propKeys.indexOf(key) === -1) {
            propKeys.push(key);
        }

        if (value[key] != null || this.injected && this.injected[key] != null) {
            if (!this.injected) this.injected = {};
            //This may be indeterminate, depending if something sets it later.

            this.injected[key] = value[key];
        }
    }
}

export default function fieldAttrs(Clazz, key, propKeys) {


    const ClazzP = Clazz.prototype;

    ClazzP.componentWillMount = applyFuncs(function () {
        const idx = propKeys.indexOf(key);
        if (idx > -1) {
            propKeys.splice(idx, 1);
        }
        this::handleAttrs(this.props[key], key, propKeys);
    }, ClazzP.componentWillMount);

    ClazzP.componentWillReceiveProps = applyFuncs(function (newProps) {
        if (this.props[key] !== newProps[key]) {
            this::handleAttrs(newProps[key], key);
        }
    }, ClazzP.componentWillReceiveProps);
}
