import './style.scss';
import HideHeader from '../../modules/module.hideHeader';
import Carousel from '../../modules/module.carousel';
import {
  checkDevice
} from '../../../common/utils/utils';

class SingleView {
  setup(data, main,type) {
    this.main = main;
    this.type = type;

    const markup = /*html*/ `
    <div class="container">
      <div class="single-description">
        <div class="single-title"><h2>${data.title}</h2></div>
        <div class="single-info">
          <p>${data.description}</p>
          <div class="single-credits">
            ${this.setAgency(data)}
            ${this.setYear(data)}
            ${this.setLink(data)}
          </div>
        </div>
      </div>
      <div class="single-media">
        <div class="single-media-inner">${this.setMedia(data.media)}</div>
      </div>
    </div>
      
    `;

    const string = '<section id="single"><div class="single-wrap">' + markup + '</div></section>';
    this.render(string);

  }

  render(string) {
    const self = this;

    this.main.innerHTML = string;
    new HideHeader({
      el: this.main.querySelector('#single')
    });


    if (checkDevice() === 'desktop') {
      this.carousel = new Carousel({
        container: document.body,
        wrap: self.main.querySelector('#single'),
        el: self.main.querySelector('.single-media-inner'),
        percent:window.App.getPercent(self.type),
        ease: 0.05,
        direction: "portait",
        delta: 100,
        zoom: 1,
        type:self.type
      });

      this.carousel.init();

    }




  }
  setMedia(data) {
    let string = '';

    for (let i = 0; i < data.length; i++) {
      let media = data[i];
      let mediaHTML;
      if (media.type === "video") {
        mediaHTML = /*html*/ `
      <video playsinline autoplay loop muted src="${media.links[0].src}">
                <source src="${media.links[0].src}" type="video/mp4">
        </video>
      `;
      } else {
        mediaHTML = /*html*/ `
          <img src="${media.links[0].src}">
        `;
      }
      string += mediaHTML + "";
    }
    return string;
  }
  setAgency(data) {
    if (data.agency) {
      return '<div>Agency: ' + data.agency + '</div>';
    } else {
      return ' ';
    }
  }
  setYear(data) {
    if (data.year) {
      return '<div>Year: ' + data.year + '</div>';
    }
  }
  setLink(data) {
    if (data.link) {
      return '<a href=' + data.link + ' target="_blank">Take a Look</a>';
    } else {
      return ' ';
    }
  }


}

export default SingleView;