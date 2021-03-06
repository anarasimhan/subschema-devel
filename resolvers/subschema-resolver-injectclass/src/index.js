
import PropTypes from 'subschema-prop-types';

export function injectClass(value, key, props, {injector}) {
    if (value == null) return;

    if (value.injectClass) {
        const {injectClass, propTypes, injectProps, strict}  = value;
        return injector.inject(injectClass, propTypes, injectProps, strict);
    }

    return injector.inject(value);

}

export default {
    resolver: {
        injectClass(Clazz, key) {

            Clazz.contextTypes.injector = PropTypes.injector;
            Clazz::this.property(key, injectClass);
        }
    }
};
