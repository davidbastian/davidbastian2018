import './style.scss';
class SingleView {
  setup(data) {
    console.log(data);
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

    return '<section id="single"><div class="single-wrap">' + markup + '</div></section>';

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