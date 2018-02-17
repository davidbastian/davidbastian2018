import VirtualScroll from "virtual-scroll";
import {
  constrain
} from "../../common/utils/utils";
import {
  TweenMax
} from "gsap";

class DotNextModule {
  constructor(opt) {
    this.view = opt.view;

    this.dotEase = opt.ease;
    this.dotReady = true;

    this.dotPosX = -50;
    this.dotPosY = -40;
    this.dotTargetX = -50;
    this.dotTargetY = -40;
    this.dotLeft = false;

    this.init();
  }

  init() {
    this.singleMedia = this.view.el.querySelectorAll(".single-media");
    this.singleDescription = this.view.el.querySelectorAll(
      ".single-description"
    );

    this.singleNext = this.view.el.querySelectorAll(".single-next");

    this.setDot();
    this.addEvents();
    this.startDot();
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

    setTimeout(function () {
      self.dotAreaX =
        (window.innerWidth - self.dotEl.clientWidth) * 100 / window.innerWidth;
      self.dotAreaY =
        (window.innerHeight - self.dotEl.clientHeight) *
        100 /
        window.innerHeight;

      self.dotPosX = self.dotTargetX = -self.dotAreaX;
    }, 100);
  }

  addEvents() {
    const self = this;
    self.dotEl.addEventListener("mousedown", self.onDotEnter.bind(this));
    window.addEventListener("mousemove", self.onDotMove.bind(this));
    window.addEventListener("mouseup", self.onDotLeave.bind(this));
  }

  removeEvents() {
    const self = this;
    self.dotEl.removeEventListener("mousedown", self.onDotEnter);
    window.removeEventListener("mousemove", self.onDotMove);
    window.removeEventListener("mouseup", self.onDotLeave);
  }

  onDotEnter(e) {
    const self = this;
    self.dotReady = false;
  }

  onDotLeave() {
    const self = this;
    self.dotReady = true;
    self.dotLeft = true;

    const timingBack = 1.3;

    TweenMax.to(self.dotEl, timingBack, {
      top: 40 + "%",
      left: self.dotAreaX + "%",
      ease: "Expo.easeOut",
      onComplete: function () {
        self.dotPosX = self.dotTargetX = -self.dotAreaX;
        self.dotPosY = self.dotTargetY = -40;

        self.dotLeft = false;
      }
    });

    TweenMax.to(self.singleMedia, timingBack, {
      xPercent: 0,
      ease: "Expo.easeOut"
    });

    TweenMax.to(self.singleDescription, timingBack, {
      x: 0,
      opacity: 1,
      ease: "Expo.easeOut"
    });

    TweenMax.to(self.singleNext, timingBack, {
      xPercent: 100,
      ease: "Expo.easeOut"
    });
  }

  onDotMove(e) {
    const self = this;

    if (!self.dotLeft) {
      if (!self.dotReady) {
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
  }

  startDot() {
    const self = this;
    let directionWrap, directionEl;

    requestAnimationFrame(self.startDot.bind(this));

    if (!self.dotLeft) {
      //set dot onDrag
      let vx = (self.dotTargetX - self.dotPosX) * self.dotEase;
      self.dotPosX += vx;
      self.dotEl.style.left = -self.dotPosX + "%";

      //dot dragY
      let vy = (self.dotTargetY - self.dotPosY) * self.dotEase;
      self.dotPosY += vy;
      self.dotEl.style.top = -self.dotPosY + "%";

      const posSingleMedia = self.singleMedia[0].getBoundingClientRect().left;
      const posSingleDescription = self.singleDescription[0].offsetWidth;

      // console.log(posSingleMedia,posSingleDescription);

      //next
      TweenMax.set(self.singleMedia, {
        xPercent: -(self.dotAreaX + self.dotPosX) / 1
      });

      TweenMax.set(self.singleNext, {
        xPercent: 100 - (self.dotAreaX + self.dotPosX) / 0.8
      });

      if (posSingleMedia <= posSingleDescription) {
        const rest = posSingleDescription - posSingleMedia;

        console.log(rest);

        TweenMax.set(self.singleDescription, {
          x: -rest / 3
        });
      }

      TweenMax.set(self.singleDescription, {
        opacity: 1 - (self.dotAreaX + self.dotPosX) * 0.02
      });
    }
  }
}

export default DotNextModule;