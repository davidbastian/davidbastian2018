import './style.scss';
import {
  TweenMax
} from 'gsap';

class SingleView {
  setup(data, main) {
    this.header = document.body.querySelector('header');
    this.main = main;

    TweenMax.to(this.header, 0.5, {
      y: 0 + '%',
      ease: 'Power3.easeOut',
    });


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

  render(string){
    console.log(string);
    this.main.innerHTML = string;
    this.addEvents();

  }

  addEvents() {
    const self = this;
    this.main.querySelector('#single').addEventListener('scroll', self.scroll.bind(this));

  }

  scroll(){
    let st = this.main.querySelector('#single').scrollTop;
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