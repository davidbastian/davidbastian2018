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
        this.getData();
        this.counter = 0;
        this.randomPercent = getRandomInt(20, 40);

    }

    getData() {
        const self = this;
        const mediaArray = [];

        if (self.url === '/' || self.url === '/about') {

            for (let i = 0; i < Data.projects.length; i++) {
                const project = Data.projects[i];
                const mediaLink = project.img;
                mediaArray.push(mediaLink);

                if (i < 4) {
                    for (let m = 0; m < project.media.length; m++) {
                        const media = project.media[m].links[0].src;
                        mediaArray.push(media);
                    }
                }
            }

            for (let e = 0; e < mediaArray.length; e++) {
                const mediaLink = mediaArray[e];
                this.preloadMedia(mediaLink);
            }



            this.size = mediaArray.length;

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

    preload(link) {
        let xhr = new XMLHttpRequest();
        xhr.open('get', link);

        xhr.send();
    }


    preloadSingle() {
        const self = this;
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
            self.preload(mediaLink);
        }

    }

    preloadHome() {
        const self = this;

        for (let i = 0; i < Data.projects.length; i++) {
            const project = Data.projects[i];
            const mediaLink = project.img;
            self.preload(mediaLink);
        }

    }

    preloadMedia(link, type) {
        const self = this;
        let progress = {
            val: 0
        };


        let xhr = new XMLHttpRequest();
        xhr.open('get', link);


        function updateHandler() {
            document.body.querySelectorAll('.preloader-counter')[0].innerHTML = Math.round(progress.val) + '.';
        }

        xhr.onload = function () {
            self.counter = self.counter + 1;
            // console.log(link, type + ' ready', self.size, self.counter);

           // console.log(self.counter, self.size);

            progress.val = (self.counter * self.randomPercent) / self.size;
            document.body.querySelectorAll('.preloader-counter')[0].innerHTML = Math.round(progress.val) + '.';

            if (self.counter === self.size) {

                TweenMax.to(progress, 3, {
                    val: 99,
                    ease: 'Power3.easeInOut',
                    onUpdate: updateHandler,
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
        };



        xhr.send();
    }

}

export default Preloader;