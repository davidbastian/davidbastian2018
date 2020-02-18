import {toSlug} from '../../../common/utils/utils';
import './style.scss';
class HomeView {
  setup(data) {
    let string = '';

    for (let i = 0; i < data.projects.length; i++) {
      let project = data.projects[i];
      let projectHTML = /*html*/`
      <a href="#/${toSlug(project.slug)}">
        <img src="${project.img}" alt="">
        <p>${project.slug} — ${project.role}</p>
      </a>
      `;

      string += projectHTML + "";

    }

    return '<section id="home"><div class="home-wrap container">'+string+'</div></section>';


  }

}


export default HomeView;