import {
  toSlug
} from "../../../common/utils/utils";
import App from "../../../index";
import "./style.scss";
import ScrollModule from "../../modules/module.scroll";
import DotNextModule from "../../modules/module.dotNext";
import transitionModule from "../../modules/module.transition";
import {
  TweenMax
} from "gsap";

import Config from '../../../config';

class SingleView {
  init(params) {
    //  console.log("init Single", params);
    this.params = params;
    this.data = App.model.getData();
    this.name = 'single';
    this.setup();

  }
  setup() {
    this.setData();
    this.setScroll();
    this.setDotNext();
    this.setTransition();
    App.controller.updateActiveView(this);
  }

  setTransition() {
    const self = this;
    const dot = (self.el.querySelector('.dot-inner'));

    TweenMax.to(dot, 0.7, {
      ease: 'Expo.easeIn',
      delay: 1,
      scale: 0.85,
      yoyo: true,
      repeat: 1,
    });


    if (Config.checkDevice() === 'mobile' || Config.checkDevice() === 'tablet') {

      const footer = document.querySelector('footer');
      TweenMax.to(footer, 0.5, {
        ease: 'Power3.easeInOut',
        opacity: 0
      });
    }



    this.transition = new transitionModule({
      oldView: App.model.getActiveView(),
      activeView: self
    });
  }

  setDotNext() {
    const self = this;
    this.dotNext = new DotNextModule({
      ease: 0.06,
      view: self,
      slug: self.nextSlug
    })
  }

  removeEvents() {
    this.scroll.removeEvents();
  }

  setScroll() {
    const self = this;
    this.scroll = new ScrollModule({
      el: self.el.querySelector(".single-media-inner"),
      wrap: window,
      ease: 0.06,
      delta: "y",
      direction: "y",
      view: self
    });
  }

  setData() {
    const self = this;

    for (let i = 0; i < this.data.projects.length; i++) {
      const project = this.data.projects[i];
      const slug = "/" + toSlug(project.slug);


      if (this.params === slug) {
        // console.log(project);

        self.nextSlug = undefined;

        if (this.data.projects[i + 1]) {
          self.nextSlug = toSlug(this.data.projects[i + 1].slug);

        } else {
          self.nextSlug = toSlug(this.data.projects[0].slug);
        }


        const section = new DOMParser().parseFromString(
          `<section class="single" id=${toSlug(
            project.slug
          )}><div class="single-wrap"><div class="single-next">Next</div></div></section>`,
          "text/html"
        );

        const singleHTML = section.body.firstChild;
        self.el = singleHTML;
        const singleWrap = singleHTML.querySelector(".single-wrap");

        let markup;

        if (Config.checkDevice() === 'mobile' || Config.checkDevice() === 'tablet') {
          markup = `
                <div class= "container">
                  
                    <div class="single-media">
                        
                        <div class="single-media-inner">
                          <div class="single-description">
                              <h2>
                                  ${project.title}
                              </h2>

                              <div class= "single-info">
                                  <p>${project.description}</p>
                                  <div class="single-credits"> </div>
                              </div>

                          </div>
                        </div>

                    </div>
                </div>  
            `;

        } else {
          markup = `
                <div class= "container">
                    <div class="single-description">
                        <h2>
                            ${project.title}
                        </h2>

                        <div class= "single-info">
                            <p>${project.description}</p>
                            <div class="single-credits"> </div>
                        </div>

                    </div>

                    <div class="single-media">
                        <div class="single-media-inner">
                        </div>

                    </div>
                </div>  
            `;
        }

        const projectHTML = new DOMParser().parseFromString(
          markup,
          "text/html"
        );
        singleWrap.appendChild(projectHTML.body.firstChild);

        //set credits
        const credits = this.setCredits(
          project,
          singleWrap.querySelector(".single-credits")
        );

        //set media
        const media = this.setMedia(
          project,
          singleWrap.querySelector(".single-media-inner")
        );
      }
    }
  }

  setMedia(project, mediaDOM) {
    for (let i = 0; i < project.media.length; i++) {
      const media = project.media[i];

      if (media.type === "image") {
        const markupImage = `
          <img alt="${media.type}" src="${media.links[0].src}"/>
          `;
        const ImageHTML = new DOMParser().parseFromString(
          markupImage,
          "text/html"
        );

        mediaDOM.appendChild(ImageHTML.body.firstChild);
      }

      if (media.type === "video") {
        const markupVideo = `
        <video  preload="auto" playsinline loop muted autoplay>
                <source src="${media.links[0].src}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        `;
        const videoHTML = new DOMParser().parseFromString(
          markupVideo,
          "text/html"
        );

        mediaDOM.appendChild(videoHTML.body.firstChild);
      }

    }

    if (Config.checkDevice() === 'mobile' || Config.checkDevice() === 'tablet') {


      const markupFooter = `<p class="copyright">© 2018 David Bastian. Chilean Designer &amp; Web Developer.
            </p>`;

      const markupFooterHTML = new DOMParser().parseFromString(
        markupFooter,
        "text/html"
      );

      mediaDOM.appendChild(markupFooterHTML.body.firstChild);

    }
  }

  setCredits(project, creditsDOM) {
    let markupYear, markupLink, markupAgency;

    if (project.agency) {
      markupAgency = `<div>Agency: ${project.agency}</div>`;
    } else {
      markupAgency = "";
    }

    if (project.year) {
      markupYear = `<div>Year: ${project.year}</div>`;
    } else {
      markupYear = "";
    }

    if (project.link) {
      markupLink = `<a href = "${
        project.link
      }" target="_blank">Take a Look</a>`;
    } else {
      markupLink = "";
    }

    const creditsHTML = new DOMParser().parseFromString(
      "<div>" + [markupAgency + markupYear + markupLink] + "</div>",
      "text/html"
    );

    creditsDOM.appendChild(creditsHTML.body.firstChild);
  }
}

var view = new SingleView();

export default view;