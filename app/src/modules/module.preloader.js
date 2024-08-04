import App from '../../index';
import Data from '../../common/data/data';
import {
    TweenMax
} from 'gsap';

import {
    getRandomInt
} from '../../common/utils/utils';

class Preloader {
    constructor(url) {
        this.url = url;
        this.counter = 0;
        this.randomPercent = getRandomInt(20, 40);
        this.size = 0;
        this.firstPreload = false;
        this.getData();
    }

    getData() {
        const mediaArray = [];

        if (this.url === '/' || this.url === '/about') {
            for (let i = 0; i < Data.projects.length; i++) {
                const project = Data.projects[i];
                const mediaLink = project.img;
                mediaArray.push(mediaLink);
            }
        } else {
            for (let i = 0; i < Data.projects.length; i++) {
                const project = Data.projects[i];
                if (project.media) {
                    for (let m = 0; m < project.media.length; m++) {
                        const media = project.media[m];
                        mediaArray.push(media);
                    }
                }
            }
        }

        this.size = mediaArray.length;
        mediaArray.forEach(mediaLink => this.preloadMedia(mediaLink));
    }

    preloadMedia(link) {
        const self = this;
        let progress = { val: 0 };

        fetch(link).then(() => {
            self.counter += 1;
            progress.val = (self.counter * self.randomPercent) / self.size;
            document.body.querySelectorAll('.counter-inner')[0].innerHTML = Math.round(progress.val);

            if (self.counter === self.size) {
                TweenMax.to(progress, 3, {
                    val: 99,
                    ease: 'Power3.easeInOut',
                    onUpdate: function () {
                        document.body.querySelectorAll('.counter-inner')[0].innerHTML = Math.round(progress.val);
                    },
                    onComplete: function () {
                        if (!self.firstPreload) {
                            App.router.addEvents();
                            App.router.updateUrl();
                            self.firstPreload = true;

                            TweenMax.to(document.body.querySelectorAll('.preloader'), 1, {
                                y: -50,
                                opacity: 0,
                                ease: 'Power3.easeInOut',
                                onComplete: function () {
                                    document.body.querySelectorAll('.preloader')[0].outerHTML = "";
                                }
                            });
                        }
                    }
                });
            }
        }).catch(error => {
            console.error('Error preloading media:', error);
        });
    }
}

export default Preloader;
