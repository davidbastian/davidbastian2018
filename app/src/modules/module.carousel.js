import {
    constrain
} from '../../common/utils/utils';
import {
    TweenMax
} from 'gsap';
import VirtualScroll from 'virtual-scroll';


class Carousel {
    constructor(opt) {
        this.el = opt.el;
        this.wrap = opt.wrap;
        this.pos = opt.pos;
        this.target = opt.pos;
        this.ease = opt.ease;
        this.container = opt.container;
        this.moving = false;
        this.direction = opt.direction;
        this.delta = opt.delta;
        this.percent = opt.percent;
        this.zoom = opt.zoom;
        this.mX = 0;
        this.valR = 0;
        this.valL = 0;
        this.timeout;
        this.instance = new VirtualScroll({
            touchMultiplier: 6,
            passive:true
        });

       
    }

    init() {
        this.setup();
    }

    setup() {
        this.start();

    }

    start() {
        if (this.direction === "landscape") {
            this.area = this.el.offsetWidth - this.wrap.offsetWidth;
        } else {
            this.area = this.el.offsetHeight - this.wrap.offsetHeight;
        }


        this.addEvents();
        this.anima();
    }

    addEvents() {
        const self = this;
        window.addEventListener("mousemove", self.move.bind(this), {passive: true});
        this.container.addEventListener("mousedown", self.down.bind(this), {passive: true});
        window.addEventListener("mouseup", self.up.bind(this), {passive: true});
        this.instance.on(self.scroll.bind(this));


    }

    scroll(e) {
        const self = this;

            if (!this.moving) {

                if (e.deltaY < 0) {
                    self.target * 1;
                } else {
                    self.target * 1;
                }

                if (e.deltaX < 0) {
                    self.target * 1;
                } else {
                    self.target * 1;
                }

                self.target += e.deltaY;
                self.target += e.deltaX;
                self.target = constrain(self.target, -self.area, 0);


            }

    }

    down(e) {
        const self = this;

        if (e.which === 1) {

            if (this.direction === "landscape") {
                this.point = e.clientX;
            } else {
                this.point = e.clientY;
            }
            this.moving = true;
            this.mX = 0;
    
    
            TweenMax.to(this.wrap, 1, {
                scale: self.zoom,
                ease: 'Power3.easeOut'
            });

        }

       

    }

    move(e) {
        const self = this;

        if (this.moving) {
            let delta;

            document.body.classList.add('no-events');

            if (self.timeout !== undefined) {
                window.clearTimeout(self.timeout);
            }
            self.timeout = window.setTimeout(function () {
                // trigger the new event on event.target, so that it can bubble appropriately
                this.valR = 0;
                this.valL = 0;
                // console.log("stop moving");
            }, 50);

            let n;
            if (this.direction === "landscape") {
                delta = this.point - e.clientX;
                n = delta * this.el.offsetWidth / this.wrap.offsetWidth;

                if (e.pageX < this.mX) {
                    this.valR = 0;
                    this.valL = this.valL - 6;
                    this.target = this.target + this.valL;
                } else {
                    this.valL = 0;
                    this.valR = this.valR + 6;

                    this.target = this.target + this.valR;
                }

                this.mX = e.pageX;
            } else {
                delta = this.point - e.clientY;
                n = delta * this.el.offsetHeight / this.wrap.offsetHeight;

                if (e.pageY < this.mX) {
                    this.valR = 0;
                    this.valL = this.valL - 6;
                    this.target = this.target + this.valL;
                } else {
                    this.valL = 0;
                    this.valR = this.valR + 6;

                    this.target = this.target + this.valR;
                }

                this.mX = e.pageY;
            }

            this.target = constrain(this.target, -self.area, 0);
        }
    }

    up(e) {
        this.moving = false;

        TweenMax.to(this.wrap, 1, {
            scale: 1,
            ease: 'Power3.easeOut'
        });


        document.body.classList.remove('no-events');

    }


    anima() {
        const self = this;
        requestAnimationFrame(self.anima.bind(self));
        this.pos += (this.target - this.pos) * this.ease;


        if (this.direction === "landscape") {
            this.area = this.el.offsetWidth - this.wrap.offsetWidth;
        } else {
            this.area = this.el.offsetHeight - this.wrap.offsetHeight;
        }


        if (this.direction === "landscape") {
            this.percent = this.pos * 100 / this.el.offsetWidth;
            this.el.style.transform =
                "translateX(" + this.percent + "%) translateY(" + 0 + "%) translateZ(0)";
        } else {
            this.percent = this.pos * 100 / this.el.offsetHeight;
            this.el.style.transform =
                "translateY(" + this.percent + "%) translateX(" + 0 + "%) translateZ(0)";

        }
    }

    addDot(){
        let markup = /*html*/`
        <div class ="dot">
            <div class="dot-inner"></div>
            <div class="dot-instructions"></div>
        </div>
        `;
        markup = document.createRange().createContextualFragment(markup);
        document.body.querySelector('main').appendChild(markup);
    }

    reset(){
        this.pos = 0;
        this.target = 0;
        this.percent = 0;
    }




}

export default Carousel;