import React from "react";
import { render } from "react-dom";
// import "papercss/dist/paper.min.css";
import { Provider } from "react-redux";
import store from "./store";
import App from "./components/index";
import "./style.css";
import "./css/plugins/animation.css";
import "./css/plugins/bicon.min.css";
import "./css/plugins/fakeloader.css";
import "./css/plugins/font-awesome.min.css";
import "./css/plugins/jquery-ui.min.css";
import "./css/plugins/lightbox.css";
import "./css/plugins/mainmenu.css";
import "./css/plugins/material-design-iconic-font.min.css";
import "./css/plugins/nivo-preview-2.css";
import "./css/plugins/nivo-slider.css";
import "./css/plugins/owl.carousel.min.css";
import "./css/plugins/owl.theme.default.min.css";
import "./css/plugins/pe-icon-7-stroke.css";
import "./css/plugins/simple-line-icons.css";
import "./css/plugins/slick.min.css";
import "./css/bootstrap.min.css";
import "./css/custom.css";
import "./css/plugins.css";

render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.querySelector("#root")
);
