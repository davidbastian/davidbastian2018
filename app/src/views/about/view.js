import './style.scss';
class AboutView {
  setup(data) {
    const markup = /*html*/ `
      <div>
        <h2>${data.details.aboutme}</h2>
        <div class="about-social">
          <p>Find me on: </p> ${this.addSocial(data.details)}
        </div>
      </div>
    `;
    return '<section id="about"><div class="about-wrap container">' + markup + '</div></section>';


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