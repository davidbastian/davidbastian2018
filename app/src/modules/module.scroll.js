import VirtualScroll from "virtual-scroll";

class ScrollModule {
  constructor(opt) {
    this.scrollWrap = opt.wrap;
    this.scrollEl = opt.el;
    this.scrollTarget = 0;
    this.scrollPos = 0;
    this.scrollEase = opt.ease;
    this.scrollActive = true;
    this.scrollReady = true;
    this.scrollPercent = 0;
    this.scrollDirection = opt.direction;
    this.scrollDelta = opt.delta;
    this.scrollStop = false;

    this.init();
  }

  init() {
    this.setScroll();
    this.addEvents();
    this.startScroll();
  }

  setScroll() {
    const self = this;
    self.instance = new VirtualScroll({
      el: this.scrollWrap
    });
  }
  addEvents() {
    const self = this;
    self.instance.on(self.onScroll.bind(this));
    window.addEventListener("resize", self.onResize.bind(this));
  }

  removeEvents() {
    const self = this;
    window.removeEventListener("resize", self.onResize);
    self.instance.off(self.onScroll);
    self.scrollStop = true;
  }

  pauseScroll(){
    this.scrollReady = false;
  }
  playScroll(){
    this.scrollReady = true;
  }

  onResize() {
    const self = this;

    if (self.scrollDirection === "x") {
      self.scrollPos = self.scrollPercent * self.scrollEl.offsetWidth / 100;
      self.scrollEl.style.transform = "translateX(" + self.scrollPercent + "%)";
    }
    if (self.scrollDirection === "y") {
      self.scrollPos = self.scrollPercent * self.scrollEl.offsetHeight / 100;
      self.scrollEl.style.transform = "translateY(" + self.scrollPercent + "%)";
    }
  }

  onScroll(e) {
    const self = this;
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
      delta = e.deltaX;
    }

    if (self.scrollDelta === "y") {
      delta = e.deltaY;
    }

    self.scrollTarget += delta;
    self.scrollTarget = Math.max(
      (directionEl - directionWrap) * -1,
      self.scrollTarget
    );
    self.scrollTarget = Math.min(0, self.scrollTarget);
  }

  startScroll() {
    const self = this;
    let directionWrap, directionEl;

    if (!self.scrollStop) {
      requestAnimationFrame(self.startScroll.bind(this));
      if (self.scrollReady === true) {
        if (self.scrollDirection === "x") {
          directionEl = self.scrollEl.offsetWidth;
        }
        if (self.scrollDirection === "y") {
          directionEl = self.scrollEl.offsetHeight;
        }

        self.scrollPos +=
          (self.scrollTarget - self.scrollPos) * self.scrollEase;
        self.scrollPercent = self.scrollPos * 100 / directionEl;

        if (self.scrollDirection === "x") {
          self.scrollEl.style.transform =
            "translateX(" + self.scrollPercent + "%)";
        }
        if (self.scrollDirection === "y") {
          self.scrollEl.style.transform =
            "translateY(" + self.scrollPercent + "%)";
        }
      }
    }
  }
}

export default ScrollModule;
