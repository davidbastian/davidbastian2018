import VirtualScroll from "virtual-scroll";
import { constrain } from "../../common/utils/utils";

class ScrollModule {
  constructor(opt) {
    this.view = opt.view;

    this.scrollWrap = opt.wrap;
    this.scrollEl = opt.el;
    this.scrollTarget = 0;
    this.scrollPos = 0;

    this.scrollEase = opt.ease;
    this.scrollActive = true;
    this.scrollReady = true;

    this.scrollDirection = opt.direction;
    this.scrollDelta = opt.delta;
    this.scrollStop = true;

    this.init();
  }

  init() {
    this.setScroll();
    this.addEvents();
    this.startScroll();
  }


  setScroll() {
    const self = this;

    let directionWrap, directionEl;

    if (self.scrollDirection === "x") {
      directionWrap = self.scrollWrap.innerWidth;
      directionEl = self.scrollEl.offsetWidth;
    }

    if (self.scrollDirection === "y") {
      directionWrap = self.scrollWrap.innerHeight;
      directionEl = self.scrollEl.offsetHeight;
    }

    self.scrollArea = (directionEl - directionWrap) * 100 / directionEl;

    self.instance = new VirtualScroll({
      el: this.scrollWrap,
      touchMultiplier: 5,
      firefoxMultiplier:35,
    });
  }

  addEvents() {
    const self = this;
    self.instance.on(self.onScroll.bind(this));
  }

  removeEvents() {
    const self = this;
    self.instance.off();
  }


  onScroll(e) {
    const self = this;

    self.scrollStop = false;

    let delta, directionWrap, directionEl;

    if (self.scrollDirection === "x") {
      directionWrap = self.scrollWrap.innerWidth;
      directionEl = self.scrollEl.offsetWidth;
    }

    if (self.scrollDirection === "y") {
      directionWrap = self.scrollWrap.innerHeight;
      directionEl = self.scrollEl.offsetHeight;
    }

    if (self.scrollDelta === "x") {
      delta = e.deltaX * 0.01;
    }

    if (self.scrollDelta === "y") {
      delta = e.deltaY * 0.01;
    }

    //set target for scroll
    self.scrollTarget += delta;
    self.scrollArea = (directionEl - directionWrap) * 100 / directionEl;
    self.scrollTarget = constrain(self.scrollTarget, -self.scrollArea, 0);

  }

  startScroll() {
    const self = this;
    let directionWrap, directionEl;

    requestAnimationFrame(self.startScroll.bind(this));
    if (self.scrollDirection === "x") {
      directionEl = self.scrollEl.offsetWidth;
      directionWrap = self.scrollWrap.innerWidth;
    }
    if (self.scrollDirection === "y") {
      directionEl = self.scrollEl.offsetHeight;
      directionWrap = self.scrollWrap.innerHeight;
    }
    self.scrollArea = (directionEl - directionWrap) * 100 / directionEl;

    if (self.scrollReady === true) {
      // set position for scroll
      self.scrollPos += (self.scrollTarget - self.scrollPos) * self.scrollEase;

      if (self.scrollDirection === "x") {
        self.scrollEl.style.transform = "translateX(" + self.scrollPos + "%)";
      }
      if (self.scrollDirection === "y") {
        self.scrollEl.style.transform = "translateY(" + self.scrollPos + "%)";
      }
    }

  }
}

export default ScrollModule;
