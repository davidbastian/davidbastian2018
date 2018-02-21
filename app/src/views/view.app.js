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

        <div id="wrong-device">
            <div class= "dot">
                <div class="dot-inner"></div>
            </div>  
            <h3></h3>
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

        if (Config.checkDevice() === 'desktop') {
            window.addEventListener('resize', this.onResize.bind(this));
            window.addEventListener('load', this.onResize.bind(this));
            window.addEventListener('ready', this.onResize.bind(this));
        }
    }

    onResize(e) {
        const w = e.currentTarget.innerWidth;
        const wrongDevice = document.getElementById('wrong-device');
        const title = wrongDevice.getElementsByTagName('h3')[0];

        if ((w <= 1024) && (w > 767)) {
            wrongDevice.classList.add('show');
            title.innerHTML = 'Please resize your window or buy a Tablet';
        } else if ((w <= 767) && (w > 430)) {
            wrongDevice.classList.add('show');
            title.innerHTML = 'Please resize your window or buy a <span>Phone</span>';

        } else if ((w <= 430) && (w > 330)) {
            wrongDevice.classList.add('show');
            title.innerHTML = 'Please resize your window or buy a <span>little Phone</span>';

        } else if ((w <= 330)) {
            wrongDevice.classList.add('show');
            title.innerHTML = 'Please resize your window or buy a <span>Tamagoshi</span>';

        } 
        else {
            wrongDevice.classList.remove('show');

        }
    }
}

var view = new AppView();

export default view;