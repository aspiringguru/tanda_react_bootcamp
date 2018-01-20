import React from "react";
import ReactDom from "react-dom";

import HelloWorld2 from "./Component/HelloWorld";
import HelloPluto from "./Component/HelloPluto";


const VIEW =
  <div>
    <HelloWorld2/>
    <HelloPluto/>
  </div>

ReactDom.render(
  VIEW,
  document.getElementById('root'),
);
