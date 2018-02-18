import App from "../../../index";
import "./style.scss";
import transitionModule from "../../modules/module.transition";
import {
    TweenMax
} from "gsap";

import SplitText from '../../../common/plugins/SplitText.min';

class AboutView {

    init(params) {
        console.log('init About', params);
        this.params = params;
        this.data = App.model.getData();
        this.setup();

    }
    setup() {
        this.setData();
        this.setTransition();
        App.controller.updateActiveView(this);
    }

    setTransition() {
        const self = this;
        this.transition = new transitionModule({
            oldView: App.model.getActiveView(),
            activeView: self
        });

    }

    setData() {
        const section = new DOMParser().parseFromString(
            '<section id="about"><div class="about-wrap"></div></section>',
            "text/html"
        );
        const aboutHTML = section.body.firstChild;
        this.el = section.body.firstChild;
        const aboutWrap = aboutHTML.querySelector(".about-wrap");

        const markup = `
        <div> 
            <h2>
                   ${this.data.details.aboutme}
            </h2>

            <div class="social">
                <p>
                        Find me on: 
                </p>
               <a href="https://twitter.com/davidbastian_cl" target="_blank">Twitter</a>
               <a href="https://cl.linkedin.com/in/davidbastianf" target="_blank">LinkedIn</a>
               <a href="" target="_blank">Instagram</a>
               <a href="http://davidbastiancl.tumblr.com/" target="_blank">Tumblr</a>
            </div>
        </div>
      `;
        const aboutHTMLDOM = new DOMParser().parseFromString(markup, "text/html");
        const mySplitText = new SplitText(aboutHTMLDOM.querySelectorAll('h2 span')[0], {
            type: "words,chars"
        });
        const chars = mySplitText.chars;

        setTimeout(function(){

            for (let i = 0; i < chars.length; i++) {
                const char = chars[i];
    
                TweenMax.to(char, (i + Math.random()) * 0.02, {
                    opacity: 1,
                    delay: (i + Math.random()) * 0.06,
                    ease: SteppedEase.config(1)
                });
            }

        },1500);
       

        aboutWrap.appendChild(aboutHTMLDOM.body.firstChild);

    }

    addEvents() {

    }

    removeEvents() {

    }

    render() {

    }
}

var view = new AboutView();

export default view;