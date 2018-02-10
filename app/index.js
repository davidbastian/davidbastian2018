import "./common/styles/_base.scss";
import AppModel from "./src/models/model.app.js";
import AppView from "./src/views/view.app.js";
import AppController from "./src/controllers/controller.app.js";
import Route from "./route.js";
import Data from "./common/data/data.json";

class App {
  constructor() {
    this.model = AppModel;
    this.view = AppView;
    this.controller = AppController;
    this.controller.view = this.view;
    this.controller.model = this.model;
    this.controller.setData(Data);
    this.view.init();
  }
}

window.App = new App();
Route.start();
window.App.router = Route;

export default window.App;
