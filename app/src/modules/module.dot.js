import { constrain } from "../../common/utils/utils";
import { TweenMax } from "gsap";
class DotModule {
  constructor(opt) {
    this.dotActive = false;
    this.view = opt.view;

    this.init();
  }
  init() {
    this.dotEase = 0.08;
    this.dotX = 0;
    this.dotY = 40;
    this.dotMouseX = 0;
    this.dotMouseY = 0;
    this.dotMouseXPercent = 0;
    this.dotMouseYPercent = 40;
    this.setup();

    console.log(this.view);
  }

  setup() {
    this.createDot();
    this.addEvents();
    this.startDrag();
  }

  addEvents() {
    const self = this;
    this.dot.addEventListener("mousedown", self.onEnter.bind(this));
    window.addEventListener("mousemove", self.onMove.bind(this));
    window.addEventListener("mouseup", self.onLeave.bind(this));
  }

  onEnter() {
    this.dotActive = true;
    this.dotLeave = false;
    this.view.scroll.pauseScroll();
  }

  onLeave() {
    this.dotLeave = true;
    // this.dotActive = false;
  }

  onMove(e) {
    if (this.dotActive && !this.dotLeave) {
      this.dotMouseX = e.x - this.dot.clientWidth / 2;
      this.dotMouseY = e.y - this.dot.clientHeight / 2;
      const areaX =
        (window.innerWidth - this.dot.clientWidth) * 100 / window.innerWidth;
      const areaY =
        (window.innerHeight - this.dot.clientHeight) * 100 / window.innerHeight;
      this.dotMouseXPercent = constrain(
        this.dotMouseX * 100 / window.innerWidth,
        0,
        areaX
      );
      this.dotMouseYPercent = constrain(
        this.dotMouseY * 100 / window.innerHeight,
        0,
        areaY
      );
    }
  }

  startDrag() {
    const self = this;
    requestAnimationFrame(self.startDrag.bind(this));

    let vx = (this.dotMouseXPercent - this.dotX) * this.dotEase;
    let vy = (this.dotMouseYPercent - this.dotY) * this.dotEase;

    this.dotX += vx;
    this.dotY += vy;


    this.dot.style.left = this.dotX + "%";
    this.dot.style.top = this.dotY + "%";

    if (this.dotActive) {
      this.view.scroll.scrollTarget = -self.dotX;
      this.view.scroll.scrollPercent = -self.dotX;

      if (this.dotX !== 0) {
        if (this.dotLeave) {
          if (this.dotMouseXPercent.toFixed(2) === this.dotX.toFixed(2)) {
            console.log("es lo mismo");
            this.dotActive = false;
          }
        }
      }

      this.view.scroll.scrollEl.style.transform =
        "translateX(" + -self.dotX + "%)";
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

    console.log(this.dot.style.top, this.dot);

    document.body.appendChild(this.dot);
  }
}

export default DotModule;
