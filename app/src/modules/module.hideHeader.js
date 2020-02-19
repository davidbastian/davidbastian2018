import {
    TweenMax
} from "gsap";

class HideHeader {
    constructor(args) {
        this.el = args.el;
        this.header = document.body.querySelector('header');

        this.init();
    }

    init() {

        TweenMax.to(this.header, 0.5, {
            y: 0 + '%',
            ease: 'Power3.easeOut',
        });


        this.addEvents();

    }

    addEvents() {
        this.el.addEventListener('scroll', this.scroll.bind(this));
    }

    scroll() {
        let st = this.el.scrollTop;
        if (st > this.lastScrollTop) {
            TweenMax.to(this.header, 0.5, {
                y: -100 + '%',
                ease: 'Power3.easeOut',
            });
        } else {
            TweenMax.to(this.header, 0.5, {
                y: 0 + '%',
                ease: 'Power3.easeOut',
            });

        }
        this.lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling

    }

}

export default HideHeader;