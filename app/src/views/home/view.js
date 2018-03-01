import {
  toSlug
} from "../../../common/utils/utils";
import App from "../../../index";
import "./style.scss";
import ScrollDotModule from "../../modules/module.scrollDot";
import transitionModule from "../../modules/module.transition";
import {
  TweenMax
} from "gsap";

import Config from '../../../config';

class HomeView {
  init(params) {
    //  console.log("init Home", params, App);

    this.params = params;
    this.data = App.model.getData();
    this.name = 'home';
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


    if (!App.model.firstView) {

      const dot = (self.el.querySelector('.dot-inner'));

      TweenMax.to(dot, 1, {
        ease: "Power3.easeIn",
        delay: 1,
        scale: 0.85,
        yoyo: true,
        repeat: 1,
      });

    }


    const footer = document.querySelector('footer');
    TweenMax.to(footer, 1, {
      ease: 'Power3.easeInOut',
      opacity: 1
    });



    this.transition = new transitionModule({
      oldView: App.model.getActiveView(),
      activeView: self
    });
  }

  removeEvents() {
    this.scroll.removeEvents();
  }

  setScrollDot() {
    const self = this;
    let d;

    if (Config.checkDevice() === 'mobile' || Config.checkDevice() === 'tablet') {
      d = 'x';
    } else {
      d = "y";
    }

    this.scroll = new ScrollDotModule({
      el: self.el.querySelector(".home-wrap"),
      wrap: window,
      ease: 0.06,
      delta: d,
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

      if (i === this.data.projects.length) {
        App.router.preloader.preloadSingle();

      }
    }

    console.log('complete SET DATA');
    //App.router.preloader.preloadSingle();



  //  App.preloader.preloadSingle();
  }
}

let view = new HomeView();

export default view;