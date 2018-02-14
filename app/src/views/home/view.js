import { toSlug } from "../../../common/utils/utils";
import App from "../../../index";
import "./style.scss";
import ScrollDotModule from "../../modules/module.scrollDot";
import transitionModule from "../../modules/module.transition";
import { TweenMax } from "gsap";

class HomeView {
  init(params) {
    console.log("init Home", params, App);

    this.params = params;
    this.data = App.model.getData();

    console.log(App);
    this.setup();
  }
  setup() {
    this.setData();
    this.setScrollDot();
    this.setTransition();
    App.controller.updateActiveView(this);

  }

  setTransition() {
    const self = this;
    this.transition = new transitionModule({
      oldView:App.model.getActiveView(),
      activeView:self
    });

  }

  removeEvents(){
    this.scroll.removeEvents();
  }

  setScrollDot() {
    const self = this;
    this.scroll = new ScrollDotModule({
      el: self.el.querySelector(".home-wrap"),
      wrap: window,
      ease: 0.06,
      delta: "y",
      direction: "x",
      view: self,
      dot: true,
      track: true
    });
  }
  setData() {
    const section = new DOMParser().parseFromString(
      '<section id="home"><div class="home-wrap"></div></section>',
      "text/html"
    );
    const homeHTML = section.body.firstChild;
    this.el = section.body.firstChild;
    const homeWrap = homeHTML.querySelector(".home-wrap");

    for (let i = 0; i < this.data.projects.length; i++) {
      const project = this.data.projects[i];
      const markup = `
        <a href= "#/${toSlug(project.slug)}"> 
            <img src="${project.img}" alt ="${project.slug}" />
            <p>
                 ${project.slug} — ${project.role}
            </p>
        </a>
      `;
      const projectHTML = new DOMParser().parseFromString(markup, "text/html");
      homeWrap.appendChild(projectHTML.body.firstChild);
    }
  }
}

let view = new HomeView();

export default view;
