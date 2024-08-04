import { gsap } from 'gsap';

// Function to detect mobile or iPad devices
function isMobileDevice() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    return /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
}

function updateBorderRadius() {
  // Select all images with the class .phone
  const images = document.querySelectorAll('.phone');

  const images2 = document.querySelectorAll('.tablet');
  
  images.forEach(image => {
      // Get the current width and height of the image
      const height = image.clientHeight;
      
      // Calculate 10% of the width and height
      const borderRadiusHeight = height * 0.081;
      
      // Set the border-radius
      image.style.borderRadius = `${borderRadiusHeight}px`;
      image.style.border = `${borderRadiusHeight*0.2644}px solid black`;
      image.style.outline = `${borderRadiusHeight*0.0460}px solid lightgrey`;
      image.style.outlineOffset = `0px`;
      image.style.boxShadow = `0 0 ${borderRadiusHeight*0.6996}px rgba(0, 0, 0, 0.68)`;
  });


  images2.forEach(image => {
    // Get the current width and height of the image
    const height = image.clientHeight;
    
    // Calculate 10% of the width and height
    const borderRadiusHeight = height * 0.06;
    
    // Set the border-radius
    image.style.borderRadius = `${borderRadiusHeight}px`;
    image.style.border = `${borderRadiusHeight*0.5044}px solid black`;
    image.style.outline = `${borderRadiusHeight*0.0460}px solid lightgrey`;
    image.style.outlineOffset = `0px`;
    image.style.boxShadow = `0 0 ${borderRadiusHeight*0.6996}px rgba(0, 0, 0, 0.68)`;
});


}

// Update border-radius on page load
window.addEventListener('load', updateBorderRadius);

// Update border-radius on window resize
window.addEventListener('resize', updateBorderRadius);

// Function to dynamically inject HTML and CSS
function injectHTMLandCSS() {
    // Add .mobile class to body if it's a mobile device
    if (isMobileDevice()) {
        document.body.classList.add('mobile');
    }
    // Inject HTML
    document.body.innerHTML = `
    <div class="noise"></div>
    <div id="loading-container">Loading... 0%</div>
    <div id="text-container"></div>
            <div id="control-dot"></div>
    <div id="instruction">Tap and hold the red dot to start</div>
    <div id="media-container">
            <figure data-category="interfaces">
      <video class="media video" autoplay="" muted="" loop="">
        <source src="https://assets.codepen.io/96398/p%26amp%3Bg_braun_maxbraun_timeline_desktop_v003_1.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <figcaption><b>Braun 100 years anniversary - Poster Generator</b>Design Direction, Art Direction, UI Design, Illustration, Iconography.</figcaption>
    </figure>

   <figure data-category="3d">
      <img class="media image" src="https://assets.codepen.io/96398/p001_3.png" alt="">
      <figcaption><b>Blackie © Spoon </b>Creative &amp; Art Direction, Design, 3d prototype.</figcaption>
    </figure>

    <figure class="poster2">
      <img class="media image" src="https://assets.codepen.io/96398/p003_3.png" alt="">
      <figcaption><b>Three Spheres, Poster Series </b>Creative &amp; Art Direction, 3d Design.</figcaption>
    </figure>

     <figure data-category="3d">
      <img class="media image" src="https://assets.codepen.io/96398/p002_3.png" alt="">
      <figcaption><b>Meta Chair</b>Creative &amp; Art Direction, Design, 3d prototype.</figcaption>
    </figure>

    <figure class="poster3">
      <img class="media image" src="https://assets.codepen.io/96398/p005_3.png" alt="">
      <figcaption><b>One Sphere, Poster Series </b>Creative &amp; Art Direction, 3d Design.</figcaption>
    </figure>

     <figure data-category="interfaces">

        <video class="media video tablet" autoplay="" muted="" loop="">
          <source src="https://assets.codepen.io/96398/Untitled-4br_1.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>

      <figcaption><b>The One Stroke Shave Vision </b>Art Direction, UI Design.</figcaption>
    </figure>

    <figure data-category="branding">
      <video class="media video" autoplay="" muted="" loop="">
        <source src="https://assets.codepen.io/96398/p007.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <figcaption><b>The Monks Explorations 02</b>Animation, Design, 3d Concept.</figcaption>
    </figure>

    <figure data-category="branding">
      <img class="media image" src="https://assets.codepen.io/96398/p006_3.png" alt="">
      <figcaption><b>People Expressions Icons set</b>Design Iconography, Design Direction.</figcaption>
    </figure>

      <figure data-category="3d">
      <video class="media video special2" autoplay="" muted="" loop="" playsinline="">
        <source src="https://assets.codepen.io/96398/ssB-1.mov" type="video/mp4; codecs=&quot;hvc1&quot;">
        <source src="https://assets.codepen.io/96398/p009.webm" type="video/webm">
        Your browser does not support the video tag.
      </video>
      <figcaption><b>Covid-19 Raincoat © </b>Creative &amp; Art Direction, 3d prototype.</figcaption>
    </figure>

    <figure>
      <img class="media poster image" src="https://assets.codepen.io/96398/p008_2.png" alt="">
      <figcaption><b>Blue Sky Photographs</b>Creative &amp; Art Direction.</figcaption>
    </figure>

    <figure data-category="3d">

        <video class="media video phone" autoplay="" muted="" loop="" playsinline="">
          <source src="https://assets.codepen.io/96398/ajxxxv9.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
     
     
      <figcaption><b>Air Jordan XXXV Unveil </b>Interfaces, AR Design, Key Visual, Motion Tracking.</figcaption>
    </figure>

      
    <figure data-category="3d">
      <img class="media image" src="https://assets.codepen.io/96398/p010_2.png" alt="">
      <figcaption><b>Looper O+ © </b>Creative &amp; Art Direction, Design, 3d prototype.</figcaption>
    </figure>

    <figure data-category="branding">
      <img class="media special image" src="https://assets.codepen.io/96398/p013_2.png" alt="">
      <figcaption><b>Fox Live Streaming Platform</b>Design, Logo Development.</figcaption>
    </figure>

    <figure class="poster2">
      <video class="media video" autoplay="" muted="" loop="" playsinline="">
        <source src="https://assets.codepen.io/96398/0001-0150_1+%281%29.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <figcaption><b>Copper Guys, Poster Series </b>Creative &amp; Art Direction, 3d Design.</figcaption>
    </figure>

    <figure class="land1">
      <video class="media video" autoplay="" muted="" loop="" playsinline="">
        <source src="https://assets.codepen.io/96398/p015b0001-0099_1.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <figcaption><b>The Monks Explorations 02</b>Animation, Design, 3d Concept.</figcaption>
    </figure>

    <figure data-category="posters">
      <img class="media image" src="https://assets.codepen.io/96398/p014_2.png" alt="">
      <figcaption><b>Braun 100 years anniversary - Poster Selected</b>Design Direction, Art Direction, Illustration.</figcaption>
    </figure>

    <figure class="poster">
      <img class="media poster image" src="https://assets.codepen.io/96398/p016_5.png" alt="">
      <figcaption><b>Hand at the Moon Poster</b>Art &amp; Creative Direction.</figcaption>
    </figure>

        <figure data-category="branding">
      <img class="media image" src="https://assets.codepen.io/96398/p016_4.png" alt="">
      <figcaption><b>Eurovision2020 - Rotterdam, Pitch </b>Brand Exploration, Design &amp; Creative Direction.</figcaption>
    </figure>

    <figure data-category="3d">
      <img class="media image" src="https://assets.codepen.io/96398/p018_2.png" alt="">
      <figcaption><b>Blazst Electric Bike © </b>Creative &amp; Art Direction, Design, 3d prototype.</figcaption>
    </figure>
    
    
    <figure class="poster4">
  <img class="media image" src="https://assets.codepen.io/96398/p017_2.png" alt="">
  <figcaption><b>Braun 100 years anniversary - Poster Selected</b>Design Direction, Art Direction, Illustration.</figcaption>
</figure>

<figure>
  <img class="media image" src="https://assets.codepen.io/96398/p019_2.png" alt="">
  <figcaption><b>FWA Certificates Redesign</b>Creative &amp; Art Direction, Design.</figcaption>
</figure>

<figure>
  <img class="media image" src="https://assets.codepen.io/96398/p020_1.png" alt="">
  <figcaption><b>The Monks Explorations 01</b>Animation, Design, 3d Concept.</figcaption>
</figure>

 <figure data-category="branding">
  <img class="media image" src="https://assets.codepen.io/96398/p021_1.png" alt="">
  <figcaption><b>The Ellinikon Experience Center</b>Design Direction, Iconography Direction, Branding, Art Direction.</figcaption>
</figure>

 <figure class="poster4">
  <img class="media image" src="https://assets.codepen.io/96398/p022_1.png" alt="">
  <figcaption><b>Braun 100 years anniversary - Poster Selected</b>Design Direction, Art Direction, Illustration.</figcaption>
</figure>

<figure data-category="spacial design">
  <video class="media video" autoplay="" muted="" loop="" playsinline="">
    <source src="https://assets.codepen.io/96398/garage_final_c0001-0610_1.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <figcaption><b>Estee lauder, Global R&amp;D Center</b>Design, Animation &amp; Art Direction, UI.</figcaption>
</figure>

<figure data-category="interfaces">
  <video class="media video" autoplay="" muted="" loop="" playsinline="">
    <source src="https://assets.codepen.io/96398/p024_1.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <figcaption><b>BMW Connected Drive Suite Artwork Branding</b>3D Concept, Art Direction, Animation.</figcaption>
</figure>

    <figure data-category="branding">
  <img class="media image" src="https://assets.codepen.io/96398/p025_1.png" alt="">
  <figcaption><b>The Monks Explorations 01</b>Animation, Design, 3d Concept.</figcaption>
</figure>
    
    
    
 <figure data-category="branding">
  <img class="media image" src="https://assets.codepen.io/96398/eli_4.png" alt="">
  <figcaption><b>The Ellinikon Experience Center</b>Design Direction, Iconography Direction, Branding, Art Direction.</figcaption>
</figure>

   <figure class="land2">
  <img class="media image" src="https://assets.codepen.io/96398/p027_1.png" alt="">
  <figcaption><b>Core Monks Expression</b>Branding, Design, Concept.</figcaption>
</figure>

   <figure class="poster4">
  <img class="media image" src="https://assets.codepen.io/96398/p029_1.png" alt="">
  <figcaption><b>Braun 100 years anniversary - Poster Selected</b>Design Direction, Art Direction, Illustration.</figcaption>
</figure>

   <figure class="land2">
  <img class="media image" src="https://assets.codepen.io/96398/p028_1.png" alt="">
  <figcaption><b>Rotato © Watch concept</b>Design &amp; Creative Direction, 3D Concept.</figcaption>
</figure>

      <figure data-category="3d">
  <video class="media video" autoplay="" muted="" loop="" playsinline="">
    <source src="https://assets.codepen.io/96398/p030_1.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <figcaption><b>Sony Bravia XR</b>3D Concept, Key Visual, Animation.</figcaption>
</figure>

   <figure class="interfaces">
  <img class="media image" src="https://assets.codepen.io/96398/p031_1.png" alt="">
  <figcaption><b>Diego Stevens</b>Creative &amp; Art Direction, Design, 3d &amp; Develop.</figcaption>
</figure>

   <figure class="branding">
  <img class="media image" src="https://assets.codepen.io/96398/p032_2.png" alt="">
  <figcaption><b>Triangles, Squares &amp; Circles</b>Typography Exploration.</figcaption>
</figure>

   <figure class="poster6">
  <img class="media image" src="https://assets.codepen.io/96398/p034.png" alt="">
  <figcaption><b>Core Monks Expression</b>Branding, Design, Concept.</figcaption>
</figure>

      <figure>
  <img class="media image" src="https://assets.codepen.io/96398/p033_2.png" alt="">
  <figcaption><b>Think with Google 2019 </b>Art Direction, Brand Identity &amp; Design.</figcaption>
</figure>

      <figure data-category="3d">
  <video class="media video" autoplay="" muted="" loop="" playsinline="">
    <source src="https://assets.codepen.io/96398/p035.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <figcaption><b>Sony Bravia XR</b>3D Concept, Key Visual, Animation.</figcaption>
</figure>


    <figure data-category="3d">
  <img class="media image" src="https://assets.codepen.io/96398/rumba_1.png" alt="">
  <figcaption><b>Plant-Pot &amp; Robot vaccum Cleaner</b>Design &amp; Creative Direction, 3D Concept.</figcaption>
</figure>

   <figure data-category="branding">
  <img class="media image" src="https://assets.codepen.io/96398/p036_1.png" alt="">
  <figcaption><b>Think with Google 2019 </b>Art Direction, Brand Identity &amp; Design.</figcaption>
</figure>
    
    
    
 <figure data-category="branding">
  <video class="media video" autoplay="" muted="" loop="" playsinline="">
    <source src="https://assets.codepen.io/96398/20001-0120.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <figcaption><b>The Monks Explorations 03</b>Animation Concept, Design.</figcaption>
</figure>

<figure>
  <video class="media video" autoplay="" muted="" loop="" playsinline="">
    <source src="https://assets.codepen.io/96398/p038.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <figcaption><b>Braun 100 years anniversary - Grid System</b>Design Direction, Art Direction, System.</figcaption>
</figure>

<figure>
  <video class="media video" autoplay="" muted="" loop="">
    <source src="https://assets.codepen.io/96398/p041.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <figcaption><b>Yohji Yamamoto Kusari II Adidas Landing Page</b>Design Direction &amp; Animation.</figcaption>
</figure>

    <figure data-category="3d">
 
    <video class="media video phone" autoplay="" muted="" loop="" playsinline="">
      <source src="https://assets.codepen.io/96398/002.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>


  <figcaption><b> Samsung Dreamground</b>Art Direction, AR, Motion Tracking, UI.</figcaption>
</figure>

<figure>
  <video class="media video" autoplay="" muted="" loop="">
    <source src="https://assets.codepen.io/96398/0001-0289_1.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <figcaption><b>Puma Basketball Experimental Shop</b>Art Direction, Animation Direction, UI Design, 3D.</figcaption>
</figure>

   <figure data-category="branding">
  <img class="media image" src="https://assets.codepen.io/96398/nikon_3.png" alt="">
  <figcaption><b>Nikon Catalogue Template</b>Design System, Branding, Layout Design.</figcaption>
</figure>

   <figure data-category="branding">
  <img class="media image special" src="https://assets.codepen.io/96398/Group3196_2.png" alt="">
  <figcaption><b>Core Monks Expression</b>Branding, Design, Concept.</figcaption>
</figure>

<figure>
  <video class="media video" autoplay="" muted="" loop="">
    <source src="https://assets.codepen.io/96398/m0001-0100_1b.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <figcaption><b>The Ellinikon Experience Center Maquette</b>Design Direction, UV Projection, Animation, Art Direction.</figcaption>
</figure>

<figure>
  <img class="media image" src="https://assets.codepen.io/96398/sphere3-gradient22_1.png" alt="">
  <figcaption><b>Three Spheres, Poster Series </b>Creative &amp; Art Direction, 3d Design.</figcaption>
</figure>

<figure data-category="interfaces">
  <video class="media video" autoplay="" muted="" loop="">
    <source src="https://assets.codepen.io/96398/0001-0285_1.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <figcaption><b>Redbull, Tokyo 2020 Olympics Blackout Data </b>Interfaces Design, 3D Renders &amp; Animation.</figcaption>
</figure>

   <figure>
  <img class="media image" src="https://assets.codepen.io/96398/CORE3_3.png" alt="">
  <figcaption><b>Core Monks Expression</b>Branding, Design, Concept.</figcaption>
</figure>

<figure data-category="3d">
  <video class="media video" autoplay="" muted="" loop="">
    <source src="https://assets.codepen.io/96398/pp50001-0250.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <figcaption><b>Estee lauder, Global R&amp;D Center</b>Animation, 3d Particles, Art Direction.</figcaption>
</figure>

<figure data-category="interfaces">

    
 
    <video class="media video phone" autoplay="" muted="" loop="" playsinline="">
      <source src="https://assets.codepen.io/96398/001_1.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>


  <figcaption><b> Google Zoo, Tales by AI </b>Interfaces Design, Logotype Illustration, Animation.</figcaption>
</figure>

<figure data-category="interfaces">
  <video class="media video" autoplay="" muted="" loop="">
    <source src="https://assets.codepen.io/96398/0001-0074ui4.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <figcaption><b>Microsoft Ignite 2020 - Virtual Event</b>Art Direction, Animation, Look &amp; Feel, 3D Particles.</figcaption>
</figure>

  <figure data-category="interfaces">
    <img class="media video tablet" src="https://assets.codepen.io/96398/sdfaz_1.png" alt="">
 

  <figcaption><b>Davies Landscape Architects, Phase 01 </b>Art Direction, Interactive Design, UI Design.</figcaption>
</figure>

<figure>
  <video class="media video" autoplay="" muted="" loop="">
    <source src="https://assets.codepen.io/96398/think4.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <figcaption><b>Think with Google 2019 </b>Art Direction, Brand Identity, Grid System Design.</figcaption>
</figure>

<figure>
  <video class="media video" autoplay="" muted="" loop="">
    <source src="https://assets.codepen.io/96398/blur-f.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <figcaption><b>Typography Blur effects Exploration </b>Art Direction, Animation, Creative.</figcaption>
</figure>

<figure>
  <img class="media image" src="https://assets.codepen.io/96398/car-s.png" alt="">
  <figcaption><b>Desert Bartone Concept Car Remix</b>AI, Midjourney, prompts.</figcaption>
</figure>

   <figure data-category="3d">
  <img class="media image" src="https://assets.codepen.io/96398/arc_3.png" alt="">
  <figcaption><b>The Ellinikon Experience Center</b>Design Direction, Iconography Direction, Branding, Light Direction.</figcaption>
</figure>

<figure data-category="interfaces">

    <video class="media video phone" autoplay="" muted="" loop="" playsinline="">
      <source src="https://assets.codepen.io/96398/kusari-mobile23+%281%29.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
 
  <figcaption><b>Yohji Yamamoto Kusari II Adidas Landing Page</b>Design Direction &amp; Animation.</figcaption>
</figure>

<figure>
  <video class="media video" autoplay="" muted="" loop="">
    <source src="https://assets.codepen.io/96398/Figma_iQikNvvtS1.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <figcaption><b>Common Ground</b>Art Direction, Key Visual, Animation.</figcaption>
</figure>

<figure>
  <img class="media image" src="https://assets.codepen.io/96398/Frame+9.png" alt="">
  <figcaption><b>Core Monks Expression</b>Branding, Design, Concept.</figcaption>
</figure>

<figure data-category="3d">
  <img class="media image" src="https://assets.codepen.io/96398/bmw-cannes20B3.png" alt="">
  <figcaption><b>BMW + Cannes</b>Key Visual, 3D, Light Treatment.</figcaption>
</figure>

<figure>
  <img class="media image" src="https://assets.codepen.io/96398/bmw-cannes_1.png" alt="">
  <figcaption><b>BMW + Cannes</b>Key Visual, 3D, Procedual Materials, Light Treatment.</figcaption>
</figure>
    </div>

    `;

    // Inject CSS
    const style = document.createElement('style');
    style.innerHTML = `
body, html {
  margin: 0;
  padding: 0;
  height: 100SVH;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
background-color: #aaa;
color: white;
  overflow: hidden;
  text-align: center;
  user-select: none;
  user-drag: none;
}
.noise {
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-image: url(common/media/FSqYDfsdaiG9W.webp);
  mix-blend-mode: darken;
  opacity: 0.02;
  pointer-events: none;
}
img, video {
  -webkit-touch-callout: none !important;
  -webkit-user-select: none !important;
  -webkit-user-drag: none !important;
  -khtml-user-select: none !important;
  -moz-user-select: none !important;
  -ms-user-select: none !important;
  user-select: none !important;
}
#loading-container {
  font-size: 18px;
  text-align: center;
  display: flex;
  position: fixed;
  height: 100vh;
  align-content: center;
  justify-content: center;
  transform-origin: center center;
  flex-wrap: wrap;
}
#text-container, #media-container, #control-dot {
  opacity: 0;
  display: none;
}
#text-container {
  font-size: 24px;
  padding-top: 80px;
  text-align: center;
  display: flex;
  position: fixed;
  height: 100svh;
  align-content: center;
  justify-content: center;
  transform-origin: center center;
  left:0;
  width:100vw;
}

body.mobile  #text-container{
top: -145px;
left:0;
}
#media-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
#control-dot {
  width: 50px;
  height: 50px;
  background-color: red;
  border-radius: 50%;
  position: absolute;
  z-index: 10;
  cursor: pointer;
}
#instruction {
  animation: pulse .5s infinite alternate;
  position: fixed;
  bottom: 18px;
  width: 100%;
  text-align: center;
  font-size: 18px;

  display:none;

  opacity: 1;
  transition: opacity 0.3s;
}
@keyframes pulse {
  0% { opacity: .3; }
  100% { opacity:.8; }
}
figure {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: fixed;
}
figure figcaption {
  position:absolute;
  top:20px;
  text-align:center;
  font-size: 12px;
}
figure figcaption b {
  display:block;
  font-weight: normal;
}
figure img, figure video {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  transform:scale(.8)
}
  .phone,.tablet {
box-sizing: border-box;
  }




    `;
    document.head.appendChild(style);
}


    // Preload images and videos
    function preloadMedia(mediaElements, callback) {
        let loadedCount = 0;
        const total = mediaElements.length;
        const loadingContainer = document.getElementById('loading-container');
        if (total === 0) {
            // If no media, directly call callback
            callback();
            return;
        }
        mediaElements.forEach(element => {
            console.log(`Loading element: ${element.tagName}`);
            if (element.tagName === 'IMG') {
                element.onload = mediaLoaded;
                element.onerror = mediaLoaded;
                element.src = element.src; // Trigger load
            } else if (element.tagName === 'VIDEO') {
                element.onloadeddata = mediaLoaded;
                element.onerror = mediaLoaded;
                element.load(); // Trigger loading
            }
        });

        function mediaLoaded() {
            loadedCount++;
            console.log(`Media loaded: ${loadedCount} of ${total}`);
            const percent = Math.round((loadedCount / total) * 100);
            loadingContainer.innerText = `Loading... ${percent}%`;
            if (loadedCount === total) {
                console.log('All media loaded');
                callback();
            }
        }
    }

    class WordAnimator {
        constructor(text, container, mediaContainer) {
            this.text = text;
            this.container = container;
            this.mediaContainer = mediaContainer;
            this.words = text.split(' ');
            this.timeline = gsap.timeline({
                paused: true,
                repeat: -1
            });
            this.createTimeline();
            this.pausePending = false; // Track if a pause is pending
            this.currentZIndex = 1; // Track the current z-index
        }
        createTimeline() {
            // Add text words to the timeline
            // Add the "Thank you!" message at the end
            this.timeline.to(this.container, {
                scale: 1,
                opacity: 1,
                duration: .3, // Display "Thank you!" for a moment
                ease: 'power2.out',
                onStart: () => {
                    this.container.innerText = "Hello! I'm David,";
                }
            })
           
            .to(this.container, {
                opacity: 0,
                duration: .5, // Fade out "Thank you!"
                ease: 'power2.in'
            });

            this.words.forEach((word) => {
                this.timeline.to(this.container, {
                        scale: 1,
                        opacity: 1,
                        duration: 0.08, // Faster animation duration
                        ease: 'power2.out',
                        onStart: () => {
                            this.container.innerText = word;
                        }
                    })
                    .to(this.container, {
                        opacity: 0,
                        duration: 0.08, // Faster animation duration
                        ease: 'power2.in',
                        onComplete: () => {
                            if (this.pausePending) {
                                this.timeline.pause();
                                this.pausePending = false; // Reset pause pending flag
                            }
                        }
                    });
            });
            // Add the "and now let's see my work" message
            this.timeline.to(this.container, {
                    scale: 1,
                    opacity: 1,
                    duration: 1, // Faster animation duration
                    ease: 'power2.out',
                    onStart: () => {
                        this.container.innerText = "and now let's see my work";
                    }
                })
                .to(this.container, {
                    opacity: 0,
                    duration: 1, // Faster animation duration
                    ease: 'power2.in'
                });
            // Define categories and their display order
            const categories = ["interfaces","branding","3d"];

            categories.forEach((category, index) => {
                this.timeline.to(this.container, {
                        scale: 1,
                        opacity: 1,
                        duration: 0.5,
                        ease: 'power2.out',
                        onStart: () => {
                            this.container.innerText = category;
                        }
                    })
                    .to(this.container, {
                        opacity: 0,
                        duration: 0.5,
                        ease: 'power2.in'
                    });

                const figures = this.mediaContainer.querySelectorAll(`figure[data-category="${category}"]`);
                figures.forEach((figure) => {
                    this.timeline.fromTo(figure, {
                            scale: 0.2,
                            opacity: 0,
                            zIndex: this.currentZIndex++
                        }, {
                            scale: 1,
                            opacity: 1,
                            duration: 0.05, // Faster animation duration
                            ease: 'power2.out',
                            onComplete: () => {
                                if (this.pausePending) {
                                    this.timeline.pause();
                                    this.pausePending = false; // Reset pause pending flag
                                }
                            }
                        })
                        .to(figure, {
                            opacity: 0,
                            duration: 0.2, // Slightly longer fade out to create overlap
                            ease: 'power2.in'
                        }); // Overlap the animations slightly
                });
            });

            // Display all remaining figures under "more"
            this.timeline.to(this.container, {
                    scale: 1,
                    opacity: 1,
                    duration: 0.5,
                    ease: 'power2.out',
                    onStart: () => {
                        this.container.innerText = "and more...";
                    }
                })
                .to(this.container, {
                    opacity: 0,
                    duration: 0.5,
                    ease: 'power2.in'
                });

            const moreFigures = this.mediaContainer.querySelectorAll('figure:not([data-category="branding"]):not([data-category="3d"]):not([data-category="ar/vr"]):not([data-category="interfaces"])');
            moreFigures.forEach((figure) => {
                this.timeline.fromTo(figure, {
                        scale: 0.2,
                        opacity: 0,
                        zIndex: this.currentZIndex++
                    }, {
                        scale: 1,
                        opacity: 1,
                        duration: 0.05, // Faster animation duration
                        ease: 'power2.out',
                        onComplete: () => {
                            if (this.pausePending) {
                                this.timeline.pause();
                                this.pausePending = false; // Reset pause pending flag
                            }
                        }
                    })
                    .to(figure, {
                        opacity: 0,
                        duration: 0.2, // Slightly longer fade out to create overlap
                        ease: 'power2.in'
                    }); // Overlap the animations slightly
            });

              // Add the "Thank you!" message at the end
                this.timeline.to(this.container, {
                    scale: 1,
                    opacity: 1,
                    duration: 1, // Display "Thank you!" for a moment
                    ease: 'power2.out',
                    onStart: () => {
                        this.container.innerText = "That's all for now, Thank you!";
                    }
                })
                .to(this.container, {
                    opacity: 0,
                    duration: 1, // Fade out "Thank you!"
                    ease: 'power2.in'
                });
        }
        startAnimation() {
            this.timeline.play();
        }
        pauseAnimation() {
            // Set flag to pause the animation at the next appropriate time
            this.pausePending = true;
        }
        setSpeed(scale) {
            this.timeline.timeScale(scale);
        }
    }
    document.addEventListener('DOMContentLoaded', () => {
        injectHTMLandCSS();
        const text = "Originally from Chile, I am a Designer and Developer currently based in The Netherlands. I love to concept and design minimal and creative products, working in multiple disciplines including branding, interactive design, illustration, 3D, animation, AR/VR, development, iconography, photography, typography, art and creative direction.";
        const container = document.getElementById('text-container');
        const mediaContainer = document.getElementById('media-container');
        const controlDot = document.getElementById('control-dot');
        const loadingContainer = document.getElementById('loading-container');
        const instruction = document.getElementById('instruction');
        const animator = new WordAnimator(text, container, mediaContainer);
        const mediaElements = mediaContainer.querySelectorAll('img, video');

        preloadMedia(mediaElements, () => {
            // Hide loading and show content
            gsap.to(loadingContainer, {
                opacity: 0,
                duration: 0.5,
                onComplete: () => {
                loadingContainer.style.display = 'none';
                instruction.style.display = 'block'}
            });
            gsap.to([container, mediaContainer, controlDot], {
                opacity: 1,
                duration: 0.5,
                display: 'block'
            });

            let isHolding = false;

            // Handle mouse down / touch start
            const startHandler = () => {
                isHolding = true;
                gsap.to(controlDot, {
                    scale: 0.3,
                    duration: 0.3
                });
                animator.startAnimation();
                instruction.innerText = 'Drag left or right to control the speed';
            };

            // Handle mouse move / touch move
            const moveHandler = (x, y) => {
                if (isHolding) {
                    gsap.to(controlDot, {
                        x: x - window.innerWidth / 2,
                        y: y - window.innerHeight / 2,
                        duration: 0.1
                    });

                    // Adjust the timeline speed based on the horizontal position
                    const windowWidth = window.innerWidth;
                    const centerX = windowWidth / 2;
                    const distanceFromCenter = x - centerX;

                    // Adjust the speed scaling factor
                    let speedScale = 1 + (distanceFromCenter / centerX) * 1.5;

                    // Clamp the speedScale to a minimum value to prevent issues
                    speedScale = Math.max(0.1, speedScale); // Minimum speed scale of 0.1

                    animator.setSpeed(speedScale);
                }
            };

            // Handle mouse up / touch end / mouse leave
            const endHandler = () => {
                if (isHolding) {
                    isHolding = false;
                    gsap.to(controlDot, {
                        scale: 1,
                        x: 0,
                        y: 0,
                        duration: 0.3
                    });
                    animator.pauseAnimation();
                    instruction.innerText = 'Tap and hold the red dot to start';
                }
            };

            controlDot.addEventListener('mousedown', startHandler);
            controlDot.addEventListener('touchstart', (e) => {
                e.preventDefault(); // Prevent default touch behavior
                startHandler();
            });

            window.addEventListener('mousemove', (e) => moveHandler(e.clientX, e.clientY));
            window.addEventListener('touchmove', (e) => {
                e.preventDefault(); // Prevent default touch behavior
                moveHandler(e.touches[0].clientX, e.touches[0].clientY);
            });

            window.addEventListener('mouseup', endHandler);
            window.addEventListener('touchend', endHandler);
            window.addEventListener('mouseleave', endHandler);
        });
    });

// You can export this setup if needed for further integration.
var view = new AppView();
export default view;