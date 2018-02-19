import App from '../../index';
import Data from '../../common/data/data';
import {
    TweenMax
} from 'gsap';

class Preloader {
    constructor(url) {

        this.url = url;

        this.startCounting();
        this.getData();
        this.counter = 0;
        this.countingDOM = 0;
        this.stopCounting = false;
        this.countingNumberDOM = {
            val: 0
        };
        this.countingRound = 0;


    }

    startCounting() {
        const self = this;
        requestAnimationFrame(self.startCounting.bind(this));

        if (!self.stopCounting) {
            this.countingDOM = this.countingDOM + 0.2;
            this.countingRound = Math.round(this.countingDOM);
            this.countingNumberDOM = {
                val: 0 + this.countingRound
            };

            document.body.querySelectorAll('.preloader-counter')[0].innerHTML = this.countingNumberDOM.val + '.';

            if (this.countingRound === 99) {
                self.stopCounting = true;
                App.router.addEvents();
                App.router.updateUrl();

                TweenMax.to(document.body.querySelectorAll('.preloader'), 1, {
                    y: -100,
                    opacity: 0,
                    ease: 'Expo.easeInOut',
                    onComplete: function () {
                        document.body.querySelectorAll('.preloader')[0].outerHTML = "";
                    }
                });

            }
        }

    }

    getData() {
        const mediaArray = [];


        console.log(this.url);

        if (this.url === '/') {

            for (let i = 0; i < Data.projects.length; i++) {
                const project = Data.projects[i];
                const mediaLink = project.img;
                this.preloadMedia(mediaLink);
            }

            this.size = Data.projects.length;

        } else {
            for (let i = 0; i < Data.projects.length; i++) {
                const project = Data.projects[i];
                for (let m = 0; m < project.media.length; m++) {
                    const media = project.media[m];
                    mediaArray.push(media);
                }
            }

            for (let e = 0; e < mediaArray.length; e++) {
                const mediaLink = mediaArray[e].links[0].src;
                const mediaType = mediaArray[e].type;
                this.preloadMedia(mediaLink, mediaType);
            }

            this.size = mediaArray.length;

        }


    }

    preloadMedia(link, type) {
        const self = this;
        let xhr = new XMLHttpRequest();
        xhr.open('get', link);

        function updateHandler() {
            document.body.querySelectorAll('.preloader-counter')[0].innerHTML = Math.round(self.countingNumberDOM.val) + '.';
        }

        xhr.onload = function () {
            self.counter = self.counter + 1;
            // console.log(link, type + ' ready', self.size, self.counter);
            if (self.counter === self.size) {
                // console.log('all done');
                self.stopCounting = true;
                TweenMax.to(self.countingNumberDOM, 3, {
                    val: 99,
                    ease: 'Power3.easeInOut',
                    onUpdate: updateHandler,
                    onComplete: function () {

                        App.router.addEvents();
                        App.router.updateUrl();

                        TweenMax.to(document.body.querySelectorAll('.preloader'), 1, {
                            y: -100,
                            opacity: 0,
                            ease: 'Power3.easeInOut',
                            onComplete: function () {
                                document.body.querySelectorAll('.preloader')[0].outerHTML = "";
                            }
                        });
                    }
                });
            }
        };
        xhr.send();
    }

}

export default Preloader;