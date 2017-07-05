Third Party Components
===
Often you will want to include 3rd party components in your Subschema app.  
You can see a project doing just that [here](https://github.com/subschema/subschema-external-component-example), though most should work with very little work.

Here are some hints.

[PropTypes](./Resolvers) are what Subschema uses for determining what to inject into a type or template.   However 3rd party components probably don't use subschema's PropTypes.  No problem here is one way to get around that.


```es6
import {PropTypes, loaderFactory} from 'subschema';
//ReactSelect does not come with subschema.
import ReactSelect from "react-select";

//This tells Subschema to use these propTypes instead of the components original.
ReactSelect.injectedPropTypes = {
 onChange : PropTypes.valueEvent;
 value : PropTypes.value;
}
//This says to use these default Props rather than the components original defaultProps.
ReactSelect.injectedProps = {
  onChange:".",
  value:"."
}

```

The 3rd party types will need to be added to the loader

```js
loader.addType('ReactSelect', ReactSelect);
```