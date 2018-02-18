import App from '../../index';
import Data from '../../common/data/data';
import {
    TweenMax
} from 'gsap';

class Preloader {

    constructor(opt) {
        this.startCounting();
        this.getData();
        this.counter = 0;
        this.countingDOM = 0;
        this.stopCounting = false;
        this.countingNumberDOM = 0;
    }

    startCounting() {
        const self = this;
        requestAnimationFrame(self.startCounting.bind(this));

        if (!self.stopCounting) {
            this.countingDOM = this.countingDOM + 0.03;
            this.countingRound = Math.round(this.countingDOM);
            this.countingNumberDOM = {
                val: this.countingRound
            };

            document.body.querySelectorAll('.preloader-counter')[0].innerHTML = this.countingNumberDOM.val;
        }
    }

    getData() {
        const mediaArray = [];
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

    preloadMedia(link, type) {
        const self = this;
        let xhr = new XMLHttpRequest();
        xhr.open('get', link);

        function updateHandler() {
            document.body.querySelectorAll('.preloader-counter')[0].innerHTML = Math.round(self.countingNumberDOM.val);
        }

        xhr.onload = function () {
            self.counter = self.counter + 1;
            // console.log(link, type + ' ready', self.size, self.counter);
            if (self.counter === self.size) {
                // console.log('all done');
                self.stopCounting = true;
                TweenMax.to(self.countingNumberDOM, 3, {
                    val: 99,
                    ease: 'Expo.easeInOut',
                    onUpdate: updateHandler,
                    onComplete: function () {
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
                });



            }
        };
        xhr.send();
    }

}

export default Preloader;