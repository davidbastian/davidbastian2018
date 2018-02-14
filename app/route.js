import RouteController from "../app/src/controllers/controller.route";
import App from "../app/index";
class Route {
  constructor() {
    this.hasStarted = false;
    this.counter = 0;
  }
  start() {
    this.addEvents();
    this.checkUrl();
  }
  updateUrl(event) {
    console.log(event.state, "asdasd", event);
    this.url = location.hash.slice(1) || "/";
    App.model.currentURL = this.url;
    RouteController.checkParams(this.url);
    this.counter = 0;
  }

  checkUrl() {
    const self = this;

   /* if (!this.hasStarted) {
      console.log("asdasd");
      setTimeout(function() {
        self.hasStarted = true;

        function inter() {
          var i = setInterval(function() {
            if (self.hasStarted) {
              self.counter = self.counter + 1;
              if (self.counter > 200) {
                //  console.log("hola, ready to change");
                App.model.updatingView = false;
              } else {
                //   console.log('no ready to change');
                App.model.updatingView = true;
              }

              // if (!App.model.updatingView) {
              if (self.url !== App.model.getActiveView().params) {
                console.log("mmmmmm");
                clearInterval(i);

                setTimeout(function(){
                  console.log(self.counter,self.url,App.model.getActiveView().params);
                  App.model.updatingView = false;
                  location.hash = '#' + App.model.getActiveView().params;
                },1500);
               

               // inter();

              }
              // }

              //   console.log(self.counter);
            }
          }, 1);
        }

        inter();
      }, 500);
  }*/
  }

  addEvents() {
    window.addEventListener("hashchange", this.updateUrl.bind(this));
    window.addEventListener("load", this.updateUrl.bind(this));
  }
}

let r = new Route();

export default r;
