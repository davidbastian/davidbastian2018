import Data from '../../common/data/data';

import Config from '../../config';

class AppView {
    init() {

        if (Config.checkDevice() === 'mobile') {
            let viewport = document.querySelector("meta[name=viewport]");
            viewport.setAttribute('content', 'width=device-width, initial-scale=0.8, maximum-scale=0.8, user-scalable=0');
        }


        this.addEvents();
        // console.log("AppView", Data);

        const markup = `
        <header>
            <div class="container">
                <a id="logo" href="#/">${Data.details.logo}</a>
                <nav class="menu">
                    <a href="#/about">about me</a>
                    <a href="mailto:${Data.details.email}" target="_blank">${Data.details.email}</a>
                </nav>
            </div>
        </header>
        <main></main>
        
        <div class="preloader">
            <div class="preloader-counter">
                0.
            </div>
        </div>
        <footer>
            <div class="container">
                <p class="copyright">${Data.details.copyright}</a>
                <nav class="menu">
                    <a href="#/full" target="_blank"></a>
                </nav>
            </div>
        </footer>
    `;

        document.body.innerHTML = markup;
    }

    addEvents() {


        document.addEventListener("touchmove", function (e) {
            e.preventDefault();
        });
    }
}

var view = new AppView();

export default view;