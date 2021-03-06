import React, { Component } from "react";
import PropTypes from "subschema-prop-types";
import { Content as UninjectedContent } from 'subschema-plugin-content';

export class EditorTemplate extends Component {
    static propTypes = {
        error  : PropTypes.error,
        title  : PropTypes.title,
        name   : PropTypes.string,
        help   : PropTypes.content,
        style  : PropTypes.style,
        htmlFor: PropTypes.htmlFor,
        Content: PropTypes.injectClass
    };

    static defaultProps = {
        Content: UninjectedContent
    };


    render() {
        let { Content, name, htmlFor, title, help, labelClass, hasTitleClass, noTitleClass, errorClass, helpClass, error, hasErrorClass, errorClassName, message, fieldClass, children } = this.props;

        if (hasErrorClass) {
            errorClassName = hasErrorClass;
        }
        const titleObj = typeof title == 'string' ? { htmlFor, content: title }
            : title;
        return (<div
            className={fieldClass + " " + (error != null ? errorClassName || ''
                : '')}>
            <Content content={titleObj} className={labelClass} type="label"/>

            <div className={title ? hasTitleClass : noTitleClass}>
                {children}
                <Content content={error || help} key='error-block' type='p'
                         className={error ? errorClass : helpClass}/>
            </div>
        </div>);
    }
}

export default ({
    template: {
        EditorTemplate
    }
});
