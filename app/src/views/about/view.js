import App from "../../../index";
import {
    getRandomArbitrary
} from '../../../common/utils/utils';
import "./style.scss";
import transitionModule from "../../modules/module.transition";
import {
    TimeLineMax,
    TweenMax,
    TimelineLite
} from "gsap";


import SplitText from '../../../common/plugins/SplitText.min';

class AboutView {

    init(params) {
      //  console.log('init About', params);
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

    removeEvents(){

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
        const spans = aboutHTMLDOM.querySelectorAll('h2 span');
        const social = aboutHTMLDOM.querySelectorAll('.social')[0];
        const tlParent = new TimelineMax({
            delay: 0.5,
            onComplete: function () {
                TweenMax.to(social, 1.3, {
                    ease: 'Power3.easeInOut',
                    opacity: 1,
                    delay:0.2
                });
            }
        });
        tlParent.pause();

        for (let i = 0; i < spans.length; i++) {
            const tl = new TimelineMax({
                delay: getRandomArbitrary(0.4, 0.5)
            });
            const span = spans[i];
            const spanSplit = new SplitText(span, {
                type: "words,chars",
                charsClass: 'char'
            });
            const spanSplitChars = spanSplit.chars;

            for (let j = 0; j < spanSplitChars.length; j++) {
                const char = spanSplitChars[j];

                const charTween = TweenMax.to(char, getRandomArbitrary(0.02, 0.04), {
                    opacity: 1,
                    delay: getRandomArbitrary(0.01, 0.04),
                    ease: SteppedEase.config(1)
                });

                tl.add(charTween);

            }
            tlParent.add(tl);
        }

        tlParent.play();
        aboutWrap.appendChild(aboutHTMLDOM.body.firstChild);

    }
}

var view = new AboutView();

export default view;