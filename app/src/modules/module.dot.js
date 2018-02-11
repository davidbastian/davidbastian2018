import { constrain } from "../../common/utils/utils";
import { TweenMax } from "gsap";
class DotModule {
  constructor(opt) {
    this.dotActive = false;
    this.view = opt.view;
    this.dotEase = 0.08;
    this.dotX = 0;
    this.dotY = 40;
    this.dotMouseX = 0;
    this.dotMouseY = 0;
    this.dotMouseXPercent = 0;
    this.dotMouseYPercent = 40;
    this.dotStop = false;
    this.trackScroll = opt.trackScroll;

    this.init();
  }
  init() {
    this.setup();
  }

  setup() {
    this.createDot();

    //this.startDrag();
   // this.addEvents();
  }

  addEvents() {
    const self = this;
    this.dot.addEventListener("mousedown", self.onEnter.bind(this));
    window.addEventListener("mousemove", self.onMove.bind(this));
    window.addEventListener("mouseup", self.onLeave.bind(this));
  }

  removeEvents() {
    const self = this;
    this.dot.removeEventListener("mousedown", self.onEnter);
    window.removeEventListener("mousemove", self.onMove);
    window.removeEventListener("mouseup", self.onLeave);
  }

  onEnter() {
    this.dotActive = true;
    this.dotLeave = false;
    this.dotStop = false;

    //pause scroll if dot is tracking scroll
    if (this.trackScroll) {
      this.view.scroll.pauseScroll();
    }
  }

  onLeave() {
    this.dotLeave = true;
  }

  onMove(e) {
    if (!this.dotStop) {
      if (this.dotActive && !this.dotLeave) {
        this.dotMouseX = e.x - this.dot.clientWidth / 2;
        this.dotMouseY = e.y - this.dot.clientHeight / 2;

        this.dotMouseXPercent = constrain(
          this.dotMouseX * 100 / window.innerWidth,
          0,
          this.areaX
        );
        this.dotMouseYPercent = constrain(
          this.dotMouseY * 100 / window.innerHeight,
          0,
          this.areaY
        );

        console.log(this.dotMouseX, this.dotMouseXPercent);
      }
    }
  }

  startDrag() {
    const self = this;
    requestAnimationFrame(self.startDrag.bind(this));

    if (!this.dotStop) {
      let vx = (this.dotMouseXPercent - this.dotX) * this.dotEase;
      let vy = (this.dotMouseYPercent - this.dotY) * this.dotEase;

      this.dotX += vx;
      this.dotY += vy;

      this.dot.style.left = this.dotX + "%";
      this.dot.style.top = this.dotY + "%";

      //if track scroll then update scroll
      if (self.trackScroll) {
        if (this.dotActive) {
          const pos =
            this.dotX *
            (this.view.scroll.scrollEl.offsetWidth -
              this.view.scroll.scrollWrap.innerWidth) /
            this.areaX;
          const posPercent = pos * 100 / this.view.scroll.scrollEl.offsetWidth;

          // reset scroll position
          this.view.scroll.scrollPos = -pos;
          this.view.scroll.scrollTarget = -pos;
          this.view.scroll.scrollPercent = -posPercent;
          this.view.scroll.scrollEl.style.transform =
            "translateX(" + -posPercent + "%)";
        }
      }
    }
  }

  createDot() {
    const markup = `
    <div class= "dot">
        <div class="dot-inner"></div>
    </div>  
`;

    const dotHTML = new DOMParser().parseFromString(markup, "text/html");
    this.dot = dotHTML.body.firstChild;
    document.body.appendChild(this.dot);

    this.areaX =
      (window.innerWidth - this.dot.clientWidth) * 100 / window.innerWidth;
    this.areaY =
      (window.innerHeight - this.dot.clientHeight) * 100 / window.innerHeight;
  }
}

export default DotModule;
