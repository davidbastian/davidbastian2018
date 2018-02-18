import App from "../../index";

class TransitionModule {
  constructor(opt) {
    this.oldView = opt.oldView;
    this.activeView = opt.activeView;
    this.init();
  }


  firstAnima() {
    const self = this;


    TweenMax.to(self.activeView.el.querySelectorAll('.dot-instruction'), 1, {
      autoAlpha: 0,
      ease: "Power3.easeInOut",
      onComplete: function () {
        self.activeView.el.querySelectorAll('.dot-instruction')[0].outerHTML = "";
      }
    });


    TweenMax.fromTo(self.activeView.el.querySelectorAll('.home-wrap'), 1, {
      top: 100,
      autoAlpha: 0,
    }, {
      top: 0,
      autoAlpha: 1,
      ease: "Power3.easeInOut",
    });

  }

  standardAnima() {
    const self = this;

    TweenMax.fromTo(
      self.activeView.el,
      1, {
        autoAlpha: 0,
        y: 50
      }, {
        autoAlpha: 1,
        ease: "Power3.easeInOut",
        delay: 0.5,
        y: 0,
        onStart: function () {},
        onComplete: function () {
          App.model.updatingView = false;
          history.replaceState(undefined, undefined, "#" + App.model.getActiveView().params);
          if (!self.oldView) {
            App.controller.updateActiveView(self.activeView);
          }
        }
      }
    );

  }

  init() {
    const self = this;
    document.querySelector("main").appendChild(self.activeView.el);
    App.model.updatingView = true;

    if (self.oldView === self.activeView) {
      const s = document.querySelectorAll('.single')[0];
      TweenMax.to(s, 1, {
        autoAlpha: 0,
        ease: "Power3.easeInOut",
        y: -100,
        onComplete: function () {
          s.outerHTML = "";
        }
      });
    }


    if (self.oldView) {
      this.oldView.removeEvents();

      TweenMax.to(self.oldView.el, 1, {
        autoAlpha: 0,
        ease: "Power3.easeInOut",
        y: -100,
        onComplete: function () {
          self.oldView.el.outerHTML = "";
        }
      });
    }

    TweenMax.set(self.activeView.el, {
      autoAlpha: 0,
    });


    if (this.activeView.name === 'home') {

      if (App.model.firstView) {
        App.model.firstView = false;
        TweenMax.set(self.activeView.el.querySelectorAll('.home-wrap'), {
          autoAlpha: 0,
          top: 50,
        });


        setTimeout(function () {
          self.firstAnima();
        }, 3000);

        self.standardAnima();

      } else {
        self.standardAnima();
      }


    } else {

      self.standardAnima();

    }


  }
}

export default TransitionModule;