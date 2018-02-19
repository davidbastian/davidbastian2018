import RouteController from "../app/src/controllers/controller.route";
import App from "../app/index";
import Preloader from './src/modules/module.preloader';

class Route {
  constructor(){
    this.url = location.hash.slice(1) || "/";
  }
  start() {
    this.preloader = new Preloader(this.url);
  }
  updateUrl(event) {
    ga('send', 'pageview', location.href);
    this.url = location.hash.slice(1) || "/";
    App.model.currentURL = this.url;
    RouteController.checkParams(this.url);
  }

  addEvents() {
    window.addEventListener("hashchange", this.updateUrl.bind(this));
    window.addEventListener("load", this.updateUrl.bind(this));
  }
}

let r = new Route();

export default r;