import HomeView from '../views/home/view';
import SingleView from '../views/single/view';
import AboutView from '../views/about/view';

class View {
    constructor() {
        this.body = document.querySelector('body');
    }

    setup(data) {
        const markup=/*html*/ `
            <header class="container">
                    <a id="logo" href="#/">${data.details.logo}</a>
                    <nav>
                        <a href="#/about">about me</a>
                        <a href="mailto:d@davidbastian.red" target="_blank">${data.details.email}</a>
                    </nav>
            </header>
            <main></main>
            <footer class="container">
                <small>${data.details.copyright}</small>
            </footer>
        `;
        this.render(markup);
    }

    updateView(type,data){
        if(type === 'home') {
          this.body.querySelector('main').innerHTML = new HomeView().setup(data);
        }

        else if(type === 'single') {
            this.body.querySelector('main').innerHTML = new SingleView().setup(data);
        }

        else if(type === 'about') {
            this.body.querySelector('main').innerHTML = new AboutView().setup(data);
        }
    }
    
    render(markup) {
        this.body.innerHTML = markup;
    }

}

export default View;