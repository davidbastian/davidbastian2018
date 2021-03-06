import Data from '../../common/data/data';

import Config from '../../config';
import {
    TweenMax,
    gsap
} from 'gsap';

class AppView {
    init() {

        if (Config.checkDevice() === 'mobile') {
            let viewport = document.querySelector("meta[name=viewport]");
            viewport.setAttribute('content', 'width=device-width, initial-scale=0.9, maximum-scale=0.9, user-scalable=0');
        }


        this.addEvents();
        // console.log("AppView", Data);

        const markup = /*html*/ `
    
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
                 <span class="counter-inner">0</span><span class="counter-dot"></span>
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

        var tl = gsap.timeline({
            repeat: -1
        });

        tl.to(".counter-dot",  {
                transformOrigin: "50% 100%",
                scaleY: 0.9,
                duration:.10,
                yoyo: true,
                repeat: 1
            })
            .to(".counter-dot",  {
                y: -40,
                duration:.75,
                ease: 'circ.out',
                yoyo: true,
                repeat: 1
            });
    }

    addEvents() {

        window.addEventListener('load', function () {
            var lastTouchY = 0;
            var touchstartHandler = function (e) {
                if (e.touches.length != 1) {
                    return;
                };
                lastTouchY = e.touches[0].clientY;
            }
            var touchmoveHandler = function (e) {
                var touchY = e.touches[0].clientY;
                var touchYDelta = touchY - lastTouchY;
                lastTouchY = touchY;

                e.preventDefault();
                return;
            }

            document.addEventListener('touchstart', touchstartHandler, {
                passive: false
            });
            document.addEventListener('touchmove', touchmoveHandler, {
                passive: false
            });
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

        } else {
            wrongDevice.classList.remove('show');

        }
    }
}

var view = new AppView();

export default view;