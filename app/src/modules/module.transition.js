import App from "../../index";

class TransitionModule {
  constructor(opt) {
    this.oldView = opt.oldView;
    this.activeView = opt.activeView;

    this.init();
  }
  init() {
    const self = this;

    document.querySelector("main").appendChild(self.activeView.el);

    if (self.oldView) {
      self.oldView.scroll.removeEvents();
      TweenMax.to(self.oldView.el, 1, {
        autoAlpha: 0,
        ease: "Power3.easeInOut",
        y: -100,
        onComplete: function() {
          self.oldView.el.outerHTML = "";
        }
      });
    }

    TweenMax.set(self.activeView.el, {
      autoAlpha: 0,
      y: 100
    });

    TweenMax.fromTo(
      self.activeView.el,
      1,
      {
        autoAlpha: 0,
        y: 50
      },
      {
        autoAlpha: 1,
        ease: "Power3.easeInOut",
        delay: 0.5,
        y: 0,
        onComplete: function() {
          if (!self.oldView) {
            App.controller.updateActiveView(self.activeView);
          }
        }
      }
    );
  }
}

export default TransitionModule;
