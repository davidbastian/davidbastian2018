
import {toSlug} from '../../common/utils/utils';
class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.setView(model);
  }

  setView(model) {
    this.view.setup(model.data);
    this.checkURL(model.data);

  }

  checkURL(data) {
    window.addEventListener("load", this.updateUrl.bind(this, data));
    window.addEventListener("hashchange", this.updateUrl.bind(this, data));
  }

  getPercent(type){
    return this.model.carousel[type].percent;
  }

  setPercent(type,val){
    this.model.carousel[type].percent = val;

  }

  updateUrl(data) {
    ga('send', 'pageview', location.href);
    
    const self = this;
    const params = location.hash.slice(1) || "/";
    document.querySelector('main').innerHTML = "";
    if (('/' === params)) {
     // history.pushState({}, null, '#/');
      this.view.updateView('home',data); 
      
      
    } else if (('/about' === params) || ('/about/' === params)) {
    //  history.pushState({}, null, '#/about');
      this.view.updateView('about',data);

      
    } else {
      for (let i = 0; i < data.projects.length; i++) {
        const project = data.projects[i];
        const slug = toSlug(project.slug);
        if ('/'+slug === params) {
          this.view.updateView('single',project,self);
        }
      }
    }

  }

}

export default Controller;