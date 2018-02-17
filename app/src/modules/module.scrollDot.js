import VirtualScroll from "virtual-scroll";
import { constrain } from "../../common/utils/utils";

class ScrollDotModule {
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

    this.dotTrack = opt.track;
    this.dot = opt.dot;
    this.dotPosX = 0;
    this.dotPosY = -40;
    this.dotTargetX = 0;
    this.dotTargetY = -40;

    this.init();
  }

  init() {
    this.setDot();
    this.setScroll();
    this.addEvents();

    this.startScroll();
  }

  setDot() {
    //append dot inside html
    const self = this;
    const markup = `
        <div class= "dot">
            <div class="dot-inner"></div>
        </div>  
    `;

    const dotHTML = new DOMParser().parseFromString(markup, "text/html");
    this.dotEl = dotHTML.body.firstChild;

    this.view.el.appendChild(this.dotEl);

    setTimeout(function() {
      self.dotAreaX =
        (window.innerWidth - self.dotEl.clientWidth) * 100 / window.innerWidth;
      self.dotAreaY =
        (window.innerHeight - self.dotEl.clientHeight) *
        100 /
        window.innerHeight;


    }, 100);
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
      el: this.scrollWrap
    });
  }

  addEvents() {
    const self = this;
    self.instance.on(self.onScroll.bind(this));
    self.dotEl.addEventListener("mousedown", self.onDotEnter.bind(this));
    window.addEventListener("mousemove", self.onDotMove.bind(this));
    window.addEventListener("mouseup", self.onDotLeave.bind(this));
  }

  removeEvents() {
    const self = this;
    self.instance.off(self.onScroll);
    self.dotEl.removeEventListener("mousedown", self.onDotEnter);
    window.removeEventListener("mousemove", self.onDotMove);
    window.removeEventListener("mouseup", self.onDotLeave);
  }

  onDotEnter(e) {
    const self = this;
    self.scrollReady = false;
  }

  onDotLeave() {
    const self = this;
    self.scrollReady = true;
  }

  onDotMove(e) {
    const self = this;
    if (!self.scrollReady) {
      this.dotMouseX = e.x - this.dotEl.clientWidth / 2;
      this.dotMouseY = e.y - this.dotEl.clientHeight / 2;

      this.dotTargetX = constrain(
        this.dotMouseX * 100 / window.innerWidth,
        0,
        this.dotAreaX
      );

      this.dotTargetY = constrain(
        this.dotMouseY * 100 / window.innerHeight,
        0,
        this.dotAreaY
      );

      this.dotTargetX = -1 * this.dotTargetX;
      this.dotTargetY = -1 * this.dotTargetY;
    }
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

    //set target for dot
    self.dotTargetX += delta;
    self.dotAreaX =
      (window.innerWidth - self.dotEl.clientWidth) * 100 / window.innerWidth;
    self.dotTargetX = constrain(self.dotTargetX, -self.dotAreaX, 0);
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

      //set position for dot on scroll
      self.dotPosX += (self.dotTargetX - self.dotPosX) * self.scrollEase;
      self.dotEl.style.left = -self.dotPosX + "%";
    } else {
      //set dot onDrag
      let vx = (self.dotTargetX - self.dotPosX) * self.scrollEase;
      self.dotPosX += vx;
      self.dotEl.style.left = -self.dotPosX + "%";
    }

    self.scrollPos = -self.dotPosX * self.scrollArea / self.dotAreaX * -1;
    self.scrollTarget = self.scrollPos;
    self.scrollEl.style.transform = "translateX(" + self.scrollPos + "%)";

    //dot dragY
    let vy = (self.dotTargetY - self.dotPosY) * self.scrollEase;
    self.dotPosY += vy;
    self.dotEl.style.top = -self.dotPosY + "%";
  }
}

export default ScrollDotModule;
