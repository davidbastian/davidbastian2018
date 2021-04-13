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
import Data from '../../../common/data/data';
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
      ease: 0.05,
      delta: d,
      direction: "x",
      view: self,
      dot: true,
      track: true
    });
  }
  setData() {
    const self = this;
    const section = new DOMParser().parseFromString(
      '<section id="home"><div class="home-wrap"></div></section>',
      "text/html"
    );
    const homeHTML = section.body.firstChild;
    this.el = section.body.firstChild;
    const homeWrap = homeHTML.querySelector(".home-wrap");

    for (let i = 0; i < this.data.projects.length; i++) {
      const project = this.data.projects[i];
      let slug = toSlug(project.slug);
      const type = self.checkType(project);


      if (!type) {
        slug = slug;
      } else {
        slug = ""
      }
      const markup = /*html*/`
        <a href= "#/${slug}" data-type=${type}> 
          <div>
            <img src="${project.img}" alt ="${project.slug}" />
            ${self.setConfidential(type)}
          </div>
           
            
            <p>
                 ${project.slug} <span>${project.role}</span>
            </p>
            
        </a>
        
      `;
      const projectHTML = new DOMParser().parseFromString(markup, "text/html");
      homeWrap.appendChild(projectHTML.body.firstChild);

      if (i === this.data.projects.length) {
        App.router.preloader.preloadSingle();

      }

    }
    self.addEvents(homeWrap);
  }

  setConfidential(type) {
    if (type === "confidential") {
      let markup = /*html*/ `
                <div class="confidential">

                <span>
                This project is protected, <br>
                        if you would like to know more about it,<br>
                        or invest on its creation, please contact me.
                </span>
                        
                </div>`;

      return markup;
    } else {
      return '';
    }
  }

  checkType(p) {

    if (p.type) {
      return p.type
    } else {
      return ''
    }

  }


  addEvents(homeWrap) {
    const links = homeWrap.querySelectorAll('a');
    for (let i = 0; i < homeWrap.querySelectorAll('a').length; i++) {
      const link = homeWrap.querySelectorAll('a')[i];
      link.addEventListener("click", function (e) {
        const dataType = e.currentTarget.getAttribute("data-type");
        if (!e.currentTarget.classList.contains('modal')) {
          e.currentTarget.classList.add('modal');
          TweenMax.to(e.currentTarget.querySelector('img'), 1, {opacity:0.5, ease: "Power3.easeInOut"});
          TweenMax.to(e.currentTarget.querySelector('.confidential'), 1, {opacity:1, ease: "Power3.easeInOut"});
          TweenMax.to(e.currentTarget.querySelector('img'), 1, {
            filter: "blur(50px)",
            autoRound: false,
            ease: "Power2.easeOut"
           // yoyo: true,
           // repeat: -1
          });
        } else {
          e.currentTarget.classList.remove('modal');
          TweenMax.to(e.currentTarget.querySelector('img'), 1, {opacity:1, ease: "Power3.easeOut"});
          TweenMax.to(e.currentTarget.querySelector('img'), 0.5, {
            filter: "blur(0px)",
            autoRound: false,
            ease: "Power3.easeOut"
          });
          TweenMax.to(e.currentTarget.querySelector('.confidential'), 0.5, {opacity:0, ease: "Power3.easeOut"});

        }
 

      });

      link.addEventListener("mouseleave", function (e) {
        const dataType = e.currentTarget.getAttribute("data-type");
        if (dataType === "confidential") {
         // console.log(e.currentTarget);
          e.currentTarget.classList.remove('modal');
          TweenMax.to(e.currentTarget.querySelector('img'), 1, {opacity:1, ease: "Power3.easeOut"});
          TweenMax.to(e.currentTarget.querySelector('img'), 0.5, {
            filter: "blur(0px)",
            autoRound: false,
            ease: "Power3.easeOut"
          });
          TweenMax.to(e.currentTarget.querySelector('.confidential'), 0.5, {opacity:0, ease: "Power3.easeOut"});
        }
      });


    }
  }


}

let view = new HomeView();

export default view;