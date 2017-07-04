import React from "react";
import {render} from "react-dom";
import {loader, ValueManager} from "subschema";
import samples from "subschema-test-samples";
import Index from "./IndexPage.jsx";
import schema from "./schema.json";
import createHistory from "history/createHashHistory";
import {NavigationForm} from "subschema-component-navigation";
import {DynamicSchema} from "subschema-component-demo";
import docs from "subschema.wiki";

import "subschema-transitions/lib/style.css";
//import "./sample.lessp";

const history = createHistory({
    hashType: 'slash' // Google's legacy AJAX URL format

});
loader.addType({Index});
loader.loaderType('Sample');
loader.loaderType('Doc');
loader.addSamples(samples);
loader.addDocs(docs);

const valueManager = ValueManager({
    samples: loader.listSamples().map(v => v.name),
    docs: loader.listDocs().filter(v => v.name !== 'Home').map(v => ({name: v.name, label: v.name.replace(/_/g, ' ')})),
    subschemaVersion: SUBSCHEMA_VERSION,
    schema
});

render(<NavigationForm valueManager={valueManager} history={history}
                       schema={"schema"}
                       ObjectType={DynamicSchema}
                       loader={loader}
                       template="FieldSetTemplate"/>,
    document.getElementById('content'));
