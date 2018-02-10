import AppController from "./controller.app";
import AppModel from "../models/model.app";
import HomeView from "../views/home/view";
import AboutView from "../views/about/view";
import SingleView from "../views/single/view";

class RouteController {
  checkParams(params) {
    if (params === "/") {
      HomeView.init(params);
    } else if (params === "/about") {
      AboutView.init(params);
    } else {
      SingleView.init(params);
    }
  }

  updateView() {}
}

let r = new RouteController();

export default r;
