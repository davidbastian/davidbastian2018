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

      if (self.oldView.dot) {
        self.oldView.dot.removeEvents();

        TweenMax.to(self.oldView.dot.dot, 1, {
          autoAlpha: 0,
          ease: "Power3.easeOut",
          onComplete: function() {
            self.oldView.dot.dot.outerHTML = "";
          }
        });
      }

      TweenMax.to(self.oldView.el, 1, {
        autoAlpha: 0,
        ease: "Power3.easeInOut",
        y: -100,
        onComplete: function() {
          self.oldView.el.outerHTML = "";
        }
      });
    }

    if (self.activeView.dot) {
      TweenMax.set(self.activeView.dot.dot.querySelector(".dot-inner"), {
        autoAlpha: 0
      });

      TweenMax.to(self.activeView.dot.dot.querySelector(".dot-inner"), 1, {
        autoAlpha: 1,
        ease: "Power3.easeInOut",
        delay: 0.5
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
        onStart:function(){

        },
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
