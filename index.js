import React from "react";
import ReactDOM from "react-dom";

import { goldenLayoutSetup } from "./src/golden_layout_setup";
import { buildMenu } from "./src/menu_builder";

goldenLayoutSetup(document.getElementById("layoutContainer"));
buildMenu();
