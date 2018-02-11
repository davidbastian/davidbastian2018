import { toSlug } from "../../../common/utils/utils";
import App from "../../../index";
import "./style.scss";
import ScrollModule from "../../modules/module.scroll";
import DotModule from "../../modules/module.dot";
import TransitionModule from "../../modules/module.transition";
import { TweenMax } from "gsap";

class HomeView {
  init(params) {
    console.log("init Home", params);

    this.params = params;
    this.data = App.model.getData();
    this.setup();
  }
  setup() {
    this.setData();
    this.setScroll();
    this.setDot();
    this.setTransition();

    App.controller.updateActiveView(this);
  }

  setDot() {
    const self = this;
    this.dot = new DotModule({
      view: self,
      trackScroll:true
    });
  }

  setTransition() {
    const self = this;
    this.transition = new TransitionModule({
      oldView: App.model.getActiveView(),
      activeView: self
    });
  }

  setScroll() {
    const self = this;
    this.scroll = new ScrollModule({
      el: self.el.querySelector(".home-wrap"),
      wrap: window,
      ease: 0.06,
      delta: "y",
      direction: "x",
      view: self,
      trackDot:true,
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
