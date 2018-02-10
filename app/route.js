import RouteController from "../app/src/controllers/controller.route";
class Route {
  start() {
    this.addEvents();
  }
  updateUrl(event) {
    console.log(event.state, "asdasd", event);
    this.url = location.hash.slice(1) || "/";
    RouteController.checkParams(this.url);
  }

  addEvents() {
    window.addEventListener("hashchange", this.updateUrl.bind(this));
    window.addEventListener("load", this.updateUrl.bind(this));
  }
}

let r = new Route();

export default r;
