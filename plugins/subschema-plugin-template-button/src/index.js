import React, { Component } from "react";
import PropTypes from 'prop-types';

export class Button extends Component {

    static defaultProps = {
        action     : 'Submit',
        label      : 'Submit',
        buttonClass: 'btn',
        iconClass  : null,
        disabled   : false
    };
    static propTypes    = {
        onClick       : PropTypes.func,
        disabled      : PropTypes.bool,
        title         : PropTypes.string,
        buttonClass   : PropTypes.string,
        iconClass     : PropTypes.string,
        activeClass   : PropTypes.string,
        action        : PropTypes.string,
        label         : PropTypes.string,
        name          : PropTypes.string,
        type          : PropTypes.string,
        value         : PropTypes.any,
        className     : PropTypes.string,
        formAction    : PropTypes.string,
        formEncType   : PropTypes.string,
        formMethod    : PropTypes.string,
        formNoValidate: PropTypes.string,
        formTarget    : PropTypes.string
    };

    handleClick = (e) => {
        const { onChange, value, name, action, label } = this.props;
        if (name && onChange) {
            onChange(value, name);
        }
        this.props.onClick(e, value || action || label, this);
    };

    render() {
        const { buttonClass, className, title, iconClass, onClick, label, ...props } = this.props;
        return <button className={className || buttonClass} {...props}
                       onClick={this.handleClick}>
            {iconClass ? <i className={iconClass}/> : null}
            {label}</button>
    }
}

export const ButtonTemplate = Button;

export default ({
    type    : {
        Button
    },
    template: {
        ButtonTemplate
    }
})
