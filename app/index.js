import { gsap } from 'gsap';
const figuresData = [
  {
    "category": "interfaces",
    "type": "video",
    "class": "media video",
    "src": "https://assets.codepen.io/96398/p%26amp%3Bg_braun_maxbraun_timeline_desktop_v003_1.mp4",
    "caption": "Braun 100 years anniversary - Poster Generator",
    "description": "Design Direction, Art Direction, UI Design, Illustration, Iconography."
  },
  {
    "category": "3d",
    "type": "image",
    "class": "media image scale",
    "src": "https://assets.codepen.io/96398/p001_3.png",
    "caption": "Blackie © Spoon",
    "description": "Creative & Art Direction, Design, 3d prototype."
  },
  {
    "category": "poster2",
    "type": "image",
    "class": "media image",
    "src": "https://assets.codepen.io/96398/p003_3.png",
    "caption": "Three Spheres, Poster Series",
    "description": "Creative & Art Direction, 3d Design."
  },
  {
    "category": "3d",
    "type": "image",
    "class": "media image",
    "src": "https://assets.codepen.io/96398/p002_3.png",
    "caption": "Meta Chair",
    "description": "Creative & Art Direction, Design, 3d prototype."
  },
  {
    "category": "poster3",
    "type": "image",
    "class": "media image",
    "src": "https://assets.codepen.io/96398/p005_3.png",
    "caption": "One Sphere, Poster Series",
    "description": "Creative & Art Direction, 3d Design."
  },
  {
    "category": "interfaces",
    "type": "video",
    "class": "media video tablet",
    "src": "https://assets.codepen.io/96398/Untitled-4br_1.mp4",
    "caption": "The One Stroke Shave Vision",
    "description": "Art Direction, UI Design."
  },
  {
    "category": "branding",
    "type": "video",
    "class": "media video",
    "src": "https://assets.codepen.io/96398/p007.mp4",
    "caption": "The Monks Explorations 02",
    "description": "Animation, Design, 3d Concept."
  },
  {
    "category": "branding",
    "type": "image",
    "class": "media image scale",
    "style": "filter:invert(1)",
    "src": "https://assets.codepen.io/96398/p006_3.png",
    "caption": "People Expressions Icons set",
    "description": "Design Iconography, Design Direction."
  },
  {
    "category": "3d",
    "type": "video",
    "class": "media video special2",
    "src": "https://assets.codepen.io/96398/ssB-1.mov",
    "altSrc": "https://assets.codepen.io/96398/p009.webm",
    "caption": "Covid-19 Raincoat ©",
    "description": "Creative & Art Direction, 3d prototype."
  },
  {
    "category": "poster",
    "type": "image",
    "class": "media poster image",
    "src": "https://assets.codepen.io/96398/p008_2.png",
    "caption": "Blue Sky Photographs",
    "description": "Creative & Art Direction."
  },
  {
    "category": "3d",
    "type": "video",
    "class": "media video phone",
    "src": "https://assets.codepen.io/96398/ajxxxv9.mp4",
    "caption": "Air Jordan XXXV Unveil",
    "description": "Interfaces, AR Design, Key Visual, Motion Tracking."
  },
  {
    "category": "3d",
    "type": "image",
    "class": "media image",
    "src": "https://assets.codepen.io/96398/p010_2.png",
    "caption": "Looper O+ ©",
    "description": "Creative & Art Direction, Design, 3d prototype."
  },
  {
    "category": "poster2",
    "type": "video",
    "class": "media video",
    "src": "https://assets.codepen.io/96398/0001-0150_1+%281%29.mp4",
    "caption": "Copper Guys, Poster Series",
    "description": "Creative & Art Direction, 3d Design."
  },
  {
    "category": "land1",
    "type": "video",
    "class": "media video",
    "src": "https://assets.codepen.io/96398/p015b0001-0099_1.mp4",
    "caption": "The Monks Explorations 02",
    "description": "Animation, Design, 3d Concept."
  },
  {
    "category": "posters",
    "type": "image",
    "class": "media image",
    "src": "https://assets.codepen.io/96398/p014_2.png",
    "caption": "Braun 100 years anniversary - Poster Selected",
    "description": "Design Direction, Art Direction, Illustration."
  },
  {
    "category": "poster",
    "type": "image",
    "class": "media poster image",
    "src": "https://assets.codepen.io/96398/p016_5.png",
    "caption": "Hand at the Moon Poster",
    "description": "Art & Creative Direction."
  },
  {
    "category": "branding",
    "type": "image",
    "class": "media image",
    "src": "https://assets.codepen.io/96398/p016_4.png",
    "caption": "Eurovision2020 - Rotterdam, Pitch",
    "description": "Brand Exploration, Design & Creative Direction."
  },
  {
    "category": "3d",
    "type": "image",
    "class": "media image",
    "src": "https://assets.codepen.io/96398/p018_2.png",
    "caption": "Blazst Electric Bike ©",
    "description": "Creative & Art Direction, Design, 3d prototype."
  },
  {
    "category": "poster4",
    "type": "image",
    "class": "media image",
    "src": "https://assets.codepen.io/96398/p017_2.png",
    "caption": "Braun 100 years anniversary - Poster Selected",
    "description": "Design Direction, Art Direction, Illustration."
  },
  {
    "category": "none",
    "type": "image",
    "class": "media image",
    "src": "https://assets.codepen.io/96398/p019_2.png",
    "caption": "FWA Certificates Redesign",
    "description": "Creative & Art Direction, Design."
  },
  {
    "category": "none",
    "type": "image",
    "class": "media image",
    "src": "https://assets.codepen.io/96398/p020_1.png",
    "caption": "The Monks Explorations 01",
    "description": "Animation, Design, 3d Concept."
  },
  {
    "category": "branding",
    "type": "image",
    "class": "media image",
    "src": "https://assets.codepen.io/96398/p021_1.png",
    "caption": "The Ellinikon Experience Center",
    "description": "Design Direction, Iconography Direction, Branding, Art Direction."
  },
  {
    "category": "poster4",
    "type": "image",
    "class": "media image",
    "src": "https://assets.codepen.io/96398/p022_1.png",
    "caption": "Braun 100 years anniversary - Poster Selected",
    "description": "Design Direction, Art Direction, Illustration."
  },
  {
    "category": "interfaces",
    "type": "video",
    "class": "media video frame",
    "src": "https://assets.codepen.io/96398/garage_final_c0001-0610_1.mp4",
    "caption": "Estee lauder, Global R&D Center",
    "description": "Design, Animation & Art Direction, UI."
  },
  {
    "category": "interfaces",
    "type": "video",
    "class": "media video",
    "src": "https://assets.codepen.io/96398/p024_1.mp4",
    "caption": "BMW Connected Drive Suite Artwork Branding",
    "description": "3D Concept, Art Direction, Animation."
  },
  {
    "category": "branding",
    "type": "image",
    "class": "media image",
    "src": "https://assets.codepen.io/96398/p025_1.png",
    "caption": "The Monks Explorations 01",
    "description": "Animation, Design, 3d Concept."
  },
  {
    "category": "branding",
    "type": "image",
    "class": "media image",
    "src": "https://assets.codepen.io/96398/eli_4.png",
    "caption": "The Ellinikon Experience Center",
    "description": "Design Direction, Iconography Direction, Branding, Art Direction."
  },
  {
    "category": "land2",
    "type": "image",
    "class": "media image",
    "src": "https://assets.codepen.io/96398/p027_1.png",
    "caption": "Core Monks Expression",
    "description": "Branding, Design, Concept."
  },
  {
    "category": "poster4",
    "type": "image",
    "class": "media image",
    "src": "https://assets.codepen.io/96398/p029_1.png",
    "caption": "Braun 100 years anniversary - Poster Selected",
    "description": "Design Direction, Art Direction, Illustration."
  },
  {
    "category": "land2",
    "type": "image",
    "class": "media image",
    "src": "https://assets.codepen.io/96398/p028_1.png",
    "caption": "Rotato © Watch concept",
    "description": "Design & Creative Direction, 3D Concept."
  },
  {
    "category": "3d",
    "type": "video",
    "class": "media video",
    "src": "https://assets.codepen.io/96398/p030_1.mp4",
    "caption": "Sony Bravia XR",
    "description": "3D Concept, Key Visual, Animation."
  },
  {
    "category": "interfaces",
    "type": "image",
    "class": "media image",
    "src": "https://assets.codepen.io/96398/p031_1.png",
    "caption": "Diego Stevens",
    "description": "Creative & Art Direction, Design, 3d & Develop."
  },
  {
    "category": "branding",
    "type": "image",
    "class": "media image",
    "src": "https://assets.codepen.io/96398/p032_2.png",
    "caption": "Triangles, Squares & Circles",
    "description": "Typography Exploration."
  },
  {
    "category": "poster6",
    "type": "image",
    "class": "media image",
    "src": "https://assets.codepen.io/96398/p034.png",
    "caption": "Core Monks Expression",
    "description": "Branding, Design, Concept."
  },
  {
    "category": "none",
    "type": "image",
    "class": "media image",
    "src": "https://assets.codepen.io/96398/p033_2.png",
    "caption": "Think with Google 2019",
    "description": "Art Direction, Brand Identity & Design."
  },
  {
    "category": "interfaces",
    "type": "image",
    "class": "media image",
    "src": "https://assets.codepen.io/96398/Figma_Tn2L6evjo7.png",
    "caption": "Google Lens - Lakers App",
    "description": "Art Direction, Interfaces Design."
  },
  {
    "category": "3d",
    "type": "video",
    "class": "media video",
    "src": "https://assets.codepen.io/96398/p035.mp4",
    "caption": "Sony Bravia XR",
    "description": "3D Concept, Key Visual, Animation."
  },
  {
    "category": "3d",
    "type": "image",
    "class": "media image",
    "src": "https://assets.codepen.io/96398/rumba_1.png",
    "caption": "Plant-Pot & Robot vaccum Cleaner",
    "description": "Design & Creative Direction, 3D Concept."
  },
  {
    "category": "branding",
    "type": "image",
    "class": "media image",
    "src": "https://assets.codepen.io/96398/p036_1.png",
    "caption": "Think with Google 2019",
    "description": "Art Direction, Brand Identity & Design."
  },
  {
    "category": "branding",
    "type": "video",
    "class": "media video",
    "src": "https://assets.codepen.io/96398/20001-0120.mp4",
    "caption": "The Monks Explorations 03",
    "description": "Animation Concept, Design."
  },
  {
    "category": "none",
    "type": "video",
    "class": "media video",
    "src": "https://assets.codepen.io/96398/p038.mp4",
    "caption": "Braun 100 years anniversary - Grid System",
    "description": "Design Direction, Art Direction, System."
  },
  {
    "category": "none",
    "type": "video",
    "class": "media video",
    "src": "https://assets.codepen.io/96398/p041.mp4",
    "caption": "Yohji Yamamoto Kusari II Adidas Landing Page",
    "description": "Design Direction & Animation."
  },
  {
    "category": "3d",
    "type": "video",
    "class": "media video phone",
    "src": "https://assets.codepen.io/96398/002.mp4",
    "caption": "Samsung Dreamground",
    "description": "Art Direction, AR, Motion Tracking, UI."
  },
  {
    "category": "3d",
    "type": "video",
    "class": "media video",
    "src": "https://assets.codepen.io/96398/zolviz-greg-livingroom-day-night-timelapse-v1.mp4",
    "caption": "zolviz",
    "description": "Founder, Art Direction, Design, 3D, Branding."
  },
  {
    "category": "none",
    "type": "video",
    "class": "media video",
    "src": "https://assets.codepen.io/96398/0001-0289_1.mp4",
    "caption": "Puma Basketball Experimental Shop",
    "description": "Art Direction, Animation Direction, UI Design, 3D."
  },
  {
    "category": "branding",
    "type": "image",
    "class": "media image",
    "src": "https://assets.codepen.io/96398/nikon_3.png",
    "caption": "Nikon Catalogue Template",
    "description": "Design System, Branding, Layout Design."
  },
  {
    "category": "interfaces",
    "type": "image",
    "class": "media image",
    "src": "https://assets.codepen.io/96398/p005_5.png",
    "caption": "Braun One Stroke",
    "description": "Design System, CTA's Design."
  },
  {
    "category": "branding",
    "type": "image",
    "class": "media image special",
    "src": "https://assets.codepen.io/96398/Group3196_2.png",
    "caption": "Core Monks Expression",
    "description": "Branding, Design, Concept."
  },
  {
    "category": "none",
    "type": "video",
    "class": "media video",
    "src": "https://assets.codepen.io/96398/m0001-0100_1b.mp4",
    "caption": "The Ellinikon Experience Center Maquette",
    "description": "Design Direction, UV Projection, Animation, Art Direction."
  },
  {
    "category": "none",
    "type": "image",
    "class": "media image",
    "src": "https://assets.codepen.io/96398/sphere3-gradient22_1.png",
    "caption": "Three Spheres, Poster Series",
    "description": "Creative & Art Direction, 3d Design."
  },
  {
    "category": "interfaces",
    "type": "video",
    "class": "media video",
    "src": "https://assets.codepen.io/96398/0001-0285_1.mp4",
    "caption": "Redbull, Tokyo 2020 Olympics Blackout Data",
    "description": "Interfaces Design, 3D Renders & Animation."
  },
  {
    "category": "none",
    "type": "image",
    "class": "media image",
    "src": "https://assets.codepen.io/96398/CORE3_3.png",
    "caption": "Core Monks Expression",
    "description": "Branding, Design, Concept."
  },
  {
    "category": "3d",
    "type": "video",
    "class": "media video",
    "src": "https://assets.codepen.io/96398/pp50001-0250.mp4",
    "caption": "Estee lauder, Global R&D Center",
    "description": "Animation, 3d Particles, Art Direction."
  },
  {
    "category": "interfaces",
    "type": "video",
    "class": "media video phone",
    "src": "https://assets.codepen.io/96398/001_1.mp4",
    "caption": "Google Zoo, Tales by AI",
    "description": "Interfaces Design, Logotype Illustration, Animation."
  },
  {
    "category": "3d",
    "type": "video",
    "class": "media video",
    "src": "https://assets.codepen.io/96398/cc0000001-0100.mp4",
    "caption": "Coca-cola, Beverage Lab",
    "description": "3d Comp, Procedual materials, Animation."
  },
  {
    "category": "interfaces",
    "type": "video",
    "class": "media video",
    "src": "https://assets.codepen.io/96398/0001-0074ui4.mp4",
    "caption": "Microsoft Ignite 2020 - Virtual Event",
    "description": "Art Direction, Animation, Look & Feel, 3D Particles."
  },
  {
    "category": "interfaces",
    "type": "image",
    "class": "media video tablet",
    "src": "https://assets.codepen.io/96398/sdfaz_1.png",
    "caption": "Davies Landscape Architects, Phase 01",
    "description": "Art Direction, Interactive Design, UI Design."
  },
  {
    "category": "branding",
    "type": "video",
    "class": "media video",
    "src": "https://assets.codepen.io/96398/think4.mp4",
    "caption": "Think with Google 2019",
    "description": "Art Direction, Brand Identity, Grid System Design."
  },
  {
    "category": "none",
    "type": "video",
    "class": "media video frame",
    "src": "https://assets.codepen.io/96398/blur-f.mp4",
    "caption": "Typography Blur effects Exploration",
    "description": "Art Direction, Animation, Creative."
  },
  {
    "category": "none",
    "type": "image",
    "class": "media image",
    "src": "https://assets.codepen.io/96398/car-s.png",
    "caption": "Desert Bartone Concept Car Remix",
    "description": "AI, Midjourney, prompts."
  },
  {
    "category": "3d",
    "type": "image",
    "class": "media image",
    "src": "https://assets.codepen.io/96398/arc_3.png",
    "caption": "The Ellinikon Experience Center",
    "description": "Design Direction, Iconography Direction, Branding, Light Direction."
  },
  {
    "category": "interfaces",
    "type": "video",
    "class": "media video phone",
    "src": "https://assets.codepen.io/96398/kusari-mobile23+%281%29.mp4",
    "caption": "Yohji Yamamoto Kusari II Adidas Landing Page",
    "description": "Design Direction & Animation."
  },
  {
    "category": "interfaces",
    "type": "image",
    "class": "media image",
    "src": "https://assets.codepen.io/96398/a06760be-6eab-4916-9b15-77a6d0be6499.png",
    "caption": "EUROVISION 2020, Proposal",
    "description": "Art Direction, Illustration, Branding"
  },
  {
    "category": "interfaces",
    "type": "video",
    "class": "media video",
    "src": "https://assets.codepen.io/96398/01-+Select+2ND+Flavorss_1.mp4",
    "caption": "Coca-cola, Beverage Lab",
    "description": "UI, Iconography, Spatial Design."
  },
  {
    "category": "none",
    "type": "video",
    "class": "media video",
    "src": "https://assets.codepen.io/96398/Figma_iQikNvvtS1.mp4",
    "caption": "Common Ground",
    "description": "Art Direction, Key Visual, Animation."
  },
  {
    "category": "none",
    "type": "image",
    "class": "media image",
    "src": "https://assets.codepen.io/96398/Frame+9.png",
    "caption": "Core Monks Expression",
    "description": "Branding, Design, Concept."
  },
  {
    "category": "3d",
    "type": "image",
    "class": "media image",
    "src": "https://assets.codepen.io/96398/bmw-cannes20B3.png",
    "caption": "BMW + Cannes",
    "description": "Key Visual, 3D, Light Treatment."
  },
  {
    "category": "none",
    "type": "image",
    "class": "media image",
    "src": "https://assets.codepen.io/96398/bmw-cannes_1.png",
    "caption": "BMW + Cannes",
    "description": "Key Visual, 3D, Procedual Materials, Light Treatment."
  }
];

// Function to detect mobile or iPad devices
function isMobileDevice() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  return /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
}


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
    <div id="header">
   <a href="mailto:d@davidbastian.red" target="_blank">d@davidbastian.red</a>

    <div class="nav">
    <a href="https://www.linkedin.com/in/davidbastianf/" target="_blank">Li</a>
    <a href="https://www.instagram.com/davidbastian"  target="_blank">Ins</a>
    </div>

    </div>

   <div id="media-container">
    <figure class="image-placeholder">
        <img class="media image" src="" alt="">
        <figcaption><b></b></figcaption>
    </figure>

    <figure class="video-placeholder" data-category="">
        <video class="" autoplay="" muted="" loop="">
            <source src="" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <figcaption><b></b></figcaption>
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
background-color: white;
color: black;
  overflow: hidden;
  text-align: center;
  user-select: none;
  user-drag: none;
   font-family: "Ubuntu Mono", monospace;
  font-weight: 400;
  font-style: normal;
  letter-spacing:-0.5px;
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
  font-size: 24px;
  text-align: center;
  display: flex;
  position: fixed;
  height: 100vh;
  align-content: center;
  justify-content: center;
  transform-origin: center center;
  flex-wrap: wrap;
   font-size: 14px;
  text-transform:uppercase;
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
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: 450;
  font-style: normal;
    letter-spacing:0px;
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
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: 450;
  font-style: normal;
    letter-spacing:0px;
}


body.mobile  #text-container{
top: -145px;
left:0;
}

body.mobile  #text-container, body.mobile  #loading-container{

  font-weight: 300;
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
  animation: pulse 1s infinite alternate;
  position: fixed;
  bottom: 20px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  text-transform:uppercase;

  display:none;

  opacity: 1;
  transition: opacity 0.3s;
  
}

#header{
top:0;
  position: fixed;
 padding:10px;
 box-sizing:border-box;
 display:flex;
 left:0;
  width: 100%;
  text-transform:uppercase;
  text-align: center;
  font-size: 14px;
  justify-content:space-between;
z-index:999;
  opacity: 1;
}

#header span {
opacity:0;}
#header a {
margin-left:5px;
text-decoration:none;
color:black}

@keyframes pulse {
  0% { opacity: .3; }
  100% { opacity:1; }
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
  font-size: 14px;
}
figure figcaption b {
  display:block;
  margin-bottom:3px;
  text-transform:uppercase;
}

body.mobile figure figcaption {
  position:absolute;
  top:50px;
  text-align:center;
  font-size: 11px;
}
body.mobile figure figcaption b {
    font-size: 14px;
}

figure img, figure video {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  transform:scale(.7)
}
  .phone,.tablet {
box-sizing: border-box;
  }

  .scale {transform:scale(1)!important}




    `;
  document.head.appendChild(style);
}


// Categorize figures data
function categorizeFiguresData(figuresData) {
  const categorizedData = {
      branding: [],
      '3d': [],
      interfaces: [],
      more: []
  };

  figuresData.forEach(figure => {
      if (figure.category === 'branding') {
          categorizedData.branding.push(figure);
      } else if (figure.category === '3d') {
          categorizedData['3d'].push(figure);
      } else if (figure.category === 'interfaces') {
          categorizedData.interfaces.push(figure);
      } else {
          categorizedData.more.push(figure);
      }
  });

  return categorizedData;
}



class WordAnimator {
  constructor(text, container, mediaContainer, categorizedData) {
      this.text = text;
      this.container = container;
      this.mediaContainer = mediaContainer;
      this.words = text.split(' ');
      this.timeline = gsap.timeline({ paused: true, repeat: -1 });
      this.pausePending = false;
      this.currentZIndex = 1;
      this.currentElement = null;  // Track the currently active element
      this.categorizedData = categorizedData;
      console.log(this.categorizedData.interfaces)
      this.createTimeline();
      this.setupResizeHandler();
 
   
  }

  createTimeline() {
      this.timeline.to(this.container, {
          scale: 1,
          opacity: 1,
          duration: .3,
          ease: 'power2.out',
          onStart: () => {
              this.container.innerText = "Hello! I'm David,";
          }
      })
      .to(this.container, {
          opacity: 0,
          duration: .5,
          ease: 'power2.in'
      });

      this.words.forEach((word) => {
          this.timeline.to(this.container, {
              scale: 1,
              opacity: 1,
              duration: 0.08,
              ease: 'power2.out',
              onStart: () => {
                  this.container.innerText = word;
              }
          })
          .to(this.container, {
              opacity: 0,
              duration: 0.08,
              ease: 'power2.in',
              onComplete: () => {
                  if (this.pausePending) {
                      this.timeline.pause();
                      this.pausePending = false;
                  }
              }
          });
      });

      this.timeline.to(this.container, {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          onStart: () => {
              this.container.innerText = "and now let's see my work";
          }
      })
      .to(this.container, {
          opacity: 0,
          duration: 1,
          ease: 'power2.in'
      });

  // Create animations for categorized data
  this.createCategoryAnimation('interfaces', this.categorizedData.interfaces);
  this.createCategoryAnimation('branding', this.categorizedData.branding);

      this.timeline.to(this.container, {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          onStart: () => {
              this.container.innerText = "That's all for now, Thank you!";
          }
      })
      .to(this.container, {
          opacity: 0,
          duration: 1,
          ease: 'power2.in'
      });
  }

  createCategoryAnimation(categoryName, categoryData) {
    this.timeline.to(this.container, {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out',
        onStart: () => {
            this.container.innerText = categoryName;
        }
    })
    .to(this.container, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in'
    });

    categoryData.forEach((figure) => {
        const targetSelector = figure.type === 'image' ? '.image-placeholder' : '.video-placeholder';

        // Reset the placeholders before showing the next figure
        this.timeline.add(() => {
            this.resetPlaceholderStyles();
        });

        this.timeline.fromTo(targetSelector, {
            scale: 1,
            opacity: 0,
            zIndex: this.currentZIndex++
        }, {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out',
            onStart: () => {
                if (figure.type === 'image') {
                    this.setupImage(figure);
                } else if (figure.type === 'video') {
                    this.setupVideo(figure);
                }
            },
            onComplete: () => {
                if (this.pausePending) {
                    this.timeline.pause();
                    this.pausePending = false;
                }
            }
        })
        .to(targetSelector, {
            opacity: 0,
            duration: 0.2,
            ease: 'power2.in'
        });
    });
}

  resetPlaceholderStyles() {
      const imgPlaceholder = document.querySelector('.image-placeholder img');
      const videoPlaceholder = document.querySelector('.video-placeholder video');

      if (imgPlaceholder) {
          imgPlaceholder.className = 'media image';
          imgPlaceholder.src = '';
          imgPlaceholder.style = '';  // Reset any inline styles
      }

      if (videoPlaceholder) {
          videoPlaceholder.className = '';
          videoPlaceholder.querySelector('source').src = '';
          videoPlaceholder.style = '';  // Reset any inline styles
          videoPlaceholder.load();  // Reset the video element
      }
  }
  setupImage(figure) {
    const imgElement = document.querySelector('.image-placeholder img');
    const captionElement = document.querySelector('.image-placeholder figcaption b');

    imgElement.src = figure.src;
    imgElement.className = `media image ${figure.class || ''}`;
    captionElement.textContent = figure.caption;

    this.currentElement = imgElement;

    imgElement.onload = () => {
        updateBorderRadius(imgElement);
    };
}

setupVideo(figure) {
    const videoElement = document.querySelector('.video-placeholder video');
    const videoSource = document.querySelector('.video-placeholder video source');
    const captionElement = document.querySelector('.video-placeholder figcaption b');

    videoSource.src = figure.src;
    videoElement.className = figure.class || '';
    captionElement.textContent = figure.caption;

    this.currentElement = videoElement;

    videoElement.onloadedmetadata = () => {
        updateBorderRadius(videoElement);
    };

    videoElement.load();
}

resetPlaceholderStyles() {
    const imgPlaceholder = document.querySelector('.image-placeholder img');
    const videoPlaceholder = document.querySelector('.video-placeholder video');

    if (imgPlaceholder) {
        imgPlaceholder.className = 'media image';
        imgPlaceholder.src = '';
        imgPlaceholder.style = '';
    }

    if (videoPlaceholder) {
        videoPlaceholder.className = '';
        videoPlaceholder.querySelector('source').src = '';
        videoPlaceholder.style = '';
        videoPlaceholder.load();
    }
}



  setupResizeHandler() {
      window.addEventListener('resize', () => {
          if (this.currentElement) {
              updateBorderRadius(this.currentElement);
          }
      });
  }

  startAnimation() {
      this.timeline.play();
  }

  pauseAnimation() {
      this.pausePending = true;
  }

  setSpeed(scale) {
      this.timeline.timeScale(scale);
  }
}

// Function to update border radius based on the class
function updateBorderRadius(element) {
  if (element.classList.contains('phone')) {
      applyBorderRadius(element, 0.081, 0.2644, 0.0460, 0.6996);
  } else if (element.classList.contains('tablet')) {
      applyBorderRadius(element, 0.06, 0.5044, 0.0460, 0.6996);
  } else if (element.classList.contains('frame')) {
      applyShadowOnly(element, 0.06, 0.6996);
  }
}

// Helper functions to apply border radius and shadow
function applyBorderRadius(element, borderRadiusFactor, borderFactor, outlineFactor, shadowFactor) {
  const height = element.clientHeight;
  const borderRadiusHeight = height * borderRadiusFactor;

  element.style.borderRadius = `${borderRadiusHeight}px`;
  element.style.border = `${borderRadiusHeight * borderFactor}px solid black`;
  element.style.outline = `${borderRadiusHeight * outlineFactor}px solid lightgrey`;
  element.style.outlineOffset = `0px`;
  element.style.boxShadow = `0 0 ${borderRadiusHeight * shadowFactor}px rgba(0, 0, 0, 0.68)`;
}

function applyShadowOnly(element, borderRadiusFactor, shadowFactor) {
  const height = element.clientHeight;
  const borderRadiusHeight = height * borderRadiusFactor;

  element.style.boxShadow = `0 0 ${borderRadiusHeight * shadowFactor}px rgba(0, 0, 0, 0.68)`;
}

// Initialize and run everything when DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
  injectHTMLandCSS();
  const text = "Originally from Chile, I am a Designer and Developer currently based in The Netherlands. I love to concept and design minimal and creative products, working in multiple disciplines including branding, interactive design, illustration, 3D, animation, AR/VR, development, iconography, photography, typography, art and creative direction.";
  const container = document.getElementById('text-container');
  const mediaContainer = document.getElementById('media-container');
  const controlDot = document.getElementById('control-dot');
  const loadingContainer = document.getElementById('loading-container');
  const instruction = document.getElementById('instruction');
  const header = document.getElementById('header');

  const categorizedData = categorizeFiguresData(figuresData); // Categorize the data
  const animator = new WordAnimator(text, container, mediaContainer, categorizedData);


  preloadAssets(figuresData, () => {
      gsap.to(loadingContainer, {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
              loadingContainer.style.display = 'none';
              instruction.style.display = 'block';
          }
      });
      gsap.to([container, mediaContainer, controlDot], {
          opacity: 1,
          duration: 0.5,
          display: 'block'
      });

      let isHolding = false;

      const startHandler = () => {
          isHolding = true;
          gsap.to(controlDot, {
              scale: 0.3,
              duration: 0.3
          });
          animator.startAnimation();
          instruction.innerText = 'Drag left or right to control the speed';
      };

      const moveHandler = (x, y) => {
          if (isHolding) {
              gsap.to(controlDot, {
                  x: x - window.innerWidth / 2,
                  y: y - window.innerHeight / 2,
                  duration: 0.1
              });

              const windowWidth = window.innerWidth;
              const centerX = windowWidth / 2;
              const distanceFromCenter = x - centerX;

              let speedScale = 1 + (distanceFromCenter / centerX) * 1.5;
              speedScale = Math.max(0.1, speedScale);

              animator.setSpeed(speedScale);
          }
      };

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
              animator.setSpeed(1);
              instruction.innerText = 'Tap and hold the red dot to start';
              header.style.display = 'flex';
          }
      };

      controlDot.addEventListener('mousedown', startHandler);
      controlDot.addEventListener('touchstart', (e) => {
          e.preventDefault();
          startHandler();
      });

      window.addEventListener('mousemove', (e) => moveHandler(e.clientX, e.clientY));
      window.addEventListener('touchmove', (e) => {
          e.preventDefault();
          moveHandler(e.touches[0].clientX, e.touches[0].clientY);
      });

      window.addEventListener('mouseup', endHandler);
      window.addEventListener('touchend', endHandler);
      window.addEventListener('mouseleave', endHandler);
  });
});

function preloadAssets(assets, callback) {
  let loadedAssets = 0;
  const totalAssets = assets.length;
  const loadingText = document.getElementById('loading-container');

  assets.forEach(asset => {
      let media;

      if (asset.type === 'image') {
          media = new Image();
          media.src = asset.src;
      } else if (asset.type === 'video') {
          media = document.createElement('video');
          media.src = asset.src;
      }

      const onLoadHandler = () => {
          loadedAssets++;
          const percentage = Math.floor((loadedAssets / totalAssets) * 100);
          if (loadingText) {
              loadingText.innerText = `${percentage}%`;
          }

          if (loadedAssets === totalAssets) {
              callback();
          }
      };

      media.onload = onLoadHandler;
      media.oncanplaythrough = onLoadHandler;
      media.onerror = onLoadHandler;
  });
}
