import {
  toSlug
} from '../../../common/utils/utils';
import './style.scss';
import HideHeader from '../../modules/module.hideHeader';
import Carousel from '../../modules/module.carousel';

class HomeView {
  setup(data, main) {
    this.main = main;
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

    string = '<section id="home"><div class="home-wrap"><div class="container">' + string + '</div></div></section>';
    this.render(string);
  }

  render(string) {
    const self = this;

    this.main.innerHTML = string;
    new HideHeader({
      el: this.main.querySelector('#home')
    });

    this.carousel = new Carousel({
      container: document.body,
      wrap:self.main.querySelector('#home'),
      el:self.main.querySelector('.home-wrap'),
      pos: 0,
      ease: 0.05,
      direction: "landscape",
      delta: 100
    });


    this.carousel.init();

    this.addEvents();

  }

  addEvents(){

  }

}


export default HomeView;