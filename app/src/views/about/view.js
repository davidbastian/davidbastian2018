import './style.scss';
import {
  TweenMax
} from 'gsap';

class AboutView {
  setup(data, main) {
    this.header = document.body.querySelector('header');
    this.main = main;

    TweenMax.to(this.header, 0.5, {
      y: 0 + '%',
      ease: 'Power3.easeOut',
    });

    const markup = /*html*/ `
      <div>
        <h2>${data.details.aboutme}</h2>
        <div class="about-social">
          <p>Find me on: </p> ${this.addSocial(data.details)}
        </div>
      </div>
    `;
    const string = '<section id="about"><div class="about-wrap container">' + markup + '</div></section>';

    this.render(string);


  }

  render(string) {
    this.main.innerHTML = string;
  }

  addSocial(data) {
    let string = '';

    for (let i = 0; i < data.social.length; i++) {
      let social = data.social[i];
      let socialHTML = /*html*/ `
      <a href="#/${social.url}">
        ${social.title}
      </a>
      `;

      string += socialHTML + "";


    }
    return string;
  }

}


export default AboutView;