import {
  toSlug
} from '../../../common/utils/utils';
import './style.scss';
import {
  TweenMax
} from 'gsap';

class HomeView {
  setup(data, main) {
    this.header = document.body.querySelector('header');
    this.main = main;


    TweenMax.to(this.header, 0.5, {
      y: 0 + '%',
      ease: 'Power3.easeOut',
    });

    let string = '';
    for (let i = 0; i < data.projects.length; i++) {
      let project = data.projects[i];
      let projectHTML = /*html*/ `
      <a href="#/${toSlug(project.slug)}">
        <img src="${project.img}" alt="">
        <p><span>${project.slug}</span> <i>—</i> <span>${project.role}</span></p>
      </a>
      `;

      string += projectHTML + "";

    }

    string = '<section id="home"><div class="home-wrap container">' + string + '</div></section>';
    this.render(string);
  }

  render(string) {
    this.main.innerHTML = string;
    this.addEvents();
  }

  addEvents() {
    const self = this;
    this.main.querySelector('#home').addEventListener('scroll', self.scroll.bind(this));
  }

  scroll() {
    let st = this.main.querySelector('#home').scrollTop;
    if (st > this.lastScrollTop) {
      TweenMax.to(this.header, 0.5, {
        y: -100 + '%',
        ease: 'Power3.easeOut',
      });
    } else {
      TweenMax.to(this.header, 0.5, {
        y: 0 + '%',
        ease: 'Power3.easeOut',
      });

    }
    this.lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling


  }

}


export default HomeView;