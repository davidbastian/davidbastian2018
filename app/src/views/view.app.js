import HomeView from '../views/home/view';
import SingleView from '../views/single/view';
import AboutView from '../views/about/view';

class View {
    constructor() {
        this.body = document.querySelector('body');
    }

    setup(data) {
        const markup = /*html*/ `
            <header>
                <div class="header-container container">
                <a id="logo" href="#/">${data.details.logo}</a>
                <nav>
                    <a href="#/about">about me</a>
                    <a href="mailto:d@davidbastian.red" target="_blank">${data.details.email}</a>
                </nav>
                
                </div>
                   
            </header>
            <main></main>
            <footer class="container">
                <small>${data.details.copyright}</small>
            </footer>
        `;
        this.render(markup);
    }

    updateView(type, data) {
        this.main = this.body.querySelector('main');
        if (type === 'home') {
             new HomeView().setup(data,this.main);          
        } else if (type === 'single') {
            new SingleView().setup(data,this.main);
        } else if (type === 'about') {
            new AboutView().setup(data,this.main);
        }
    }

    render(markup) {
        this.body.innerHTML = markup;
    }

}

export default View;