

import { gsap } from 'gsap';


function updateBorderRadius() {
  // Select all images with the class .phone
  const images = document.querySelectorAll('.phone');
  const images2 = document.querySelectorAll('.tablet');
  const images3 = document.querySelectorAll('.frame');
  
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

images3.forEach(image => {
  // Get the current width and height of the image
  const height = image.clientHeight;
  
  // Calculate 10% of the width and height
  const borderRadiusHeight = height * 0.06;
  
  // Set the border-radius
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
    <div id="header">
   <a href="mailto:d@davidbastian.red" target="_blank">d@davidbastian.red</a>

    <div class="nav">
    <a href="https://www.linkedin.com/in/davidbastianf/" target="_blank">Li</a>
    <a href="https://www.instagram.com/davidbastian"  target="_blank">Ins</a>
    </div>

    </div>

    <div id="media-container">
<figure data-category="interfaces">
  <video class="media video" autoplay="" muted="" loop="">
    <source src="https://assets.codepen.io/96398/p%26amp%3Bg_braun_maxbraun_timeline_desktop_v003_1.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <figcaption><b>Braun 100 years anniversary - Poster Generator</b>Design Direction, Art Direction, UI Design, Illustration, Iconography.</figcaption>
</figure>

<figure data-category="3d">
  <img loading="lazy" class="media image scale"
       src="https://assets.codepen.io/96398/p001_3.png?width=1200&format=auto"
       srcset="
       https://assets.codepen.io/96398/p001_3.png?width=480&format=auto 480w,
       https://assets.codepen.io/96398/p001_3.png?width=800&format=auto 800w,
       https://assets.codepen.io/96398/p001_3.png?width=1200&format=auto 1200w"
       sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px"
       alt="">
  <figcaption><b>Blackie © Spoon </b>Creative &amp; Art Direction, Design, 3d prototype.</figcaption>
</figure>

<figure class="poster2">
  <img loading="lazy" class="media image"
       src="https://assets.codepen.io/96398/p003_3.png?width=1200&format=auto"
       srcset="
       https://assets.codepen.io/96398/p003_3.png?width=480&format=auto 480w,
       https://assets.codepen.io/96398/p003_3.png?width=800&format=auto 800w,
       https://assets.codepen.io/96398/p003_3.png?width=1200&format=auto 1200w"
       sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px"
       alt="">
  <figcaption><b>Three Spheres, Poster Series </b>Creative &amp; Art Direction, 3d Design.</figcaption>
</figure>

<figure data-category="3d">
  <img loading="lazy" class="media image"
       src="https://assets.codepen.io/96398/p002_3.png?width=1200&format=auto"
       srcset="
       https://assets.codepen.io/96398/p002_3.png?width=480&format=auto 480w,
       https://assets.codepen.io/96398/p002_3.png?width=800&format=auto 800w,
       https://assets.codepen.io/96398/p002_3.png?width=1200&format=auto 1200w"
       sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px"
       alt="">
  <figcaption><b>Meta Chair</b>Creative &amp; Art Direction, Design, 3d prototype.</figcaption>
</figure>

<figure class="poster3">
  <img loading="lazy" class="media image"
       src="https://assets.codepen.io/96398/p005_3.png?width=1200&format=auto"
       srcset="
       https://assets.codepen.io/96398/p005_3.png?width=480&format=auto 480w,
       https://assets.codepen.io/96398/p005_3.png?width=800&format=auto 800w,
       https://assets.codepen.io/96398/p005_3.png?width=1200&format=auto 1200w"
       sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px"
       alt="">
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
  <img loading="lazy" class="media image scale" style="filter:invert(1)"
       src="https://assets.codepen.io/96398/p006_3.png?width=1200&format=auto"
       srcset="
       https://assets.codepen.io/96398/p006_3.png?width=480&format=auto 480w,
       https://assets.codepen.io/96398/p006_3.png?width=800&format=auto 800w,
       https://assets.codepen.io/96398/p006_3.png?width=1200&format=auto 1200w"
       sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px"
       alt="">
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
  <img loading="lazy" class="media poster image"
       src="https://assets.codepen.io/96398/p008_2.png?width=1200&format=auto"
       srcset="
       https://assets.codepen.io/96398/p008_2.png?width=480&format=auto 480w,
       https://assets.codepen.io/96398/p008_2.png?width=800&format=auto 800w,
       https://assets.codepen.io/96398/p008_2.png?width=1200&format=auto 1200w"
       sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px"
       alt="">
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
  <img loading="lazy" class="media image"
       src="https://assets.codepen.io/96398/p010_2.png?width=1200&format=auto"
       srcset="
       https://assets.codepen.io/96398/p010_2.png?width=480&format=auto 480w,
       https://assets.codepen.io/96398/p010_2.png?width=800&format=auto 800w,
       https://assets.codepen.io/96398/p010_2.png?width=1200&format=auto 1200w"
       sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px"
       alt="">
  <figcaption><b>Looper O+ © </b>Creative &amp; Art Direction, Design, 3d prototype.</figcaption>
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
  <img loading="lazy" class="media image"
       src="https://assets.codepen.io/96398/p014_2.png?width=1200&format=auto"
       srcset="
       https://assets.codepen.io/96398/p014_2.png?width=480&format=auto 480w,
       https://assets.codepen.io/96398/p014_2.png?width=800&format=auto 800w,
       https://assets.codepen.io/96398/p014_2.png?width=1200&format=auto 1200w"
       sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px"
       alt="">
  <figcaption><b>Braun 100 years anniversary - Poster Selected</b>Design Direction, Art Direction, Illustration.</figcaption>
</figure>

<figure class="poster">
  <img loading="lazy" class="media poster image"
       src="https://assets.codepen.io/96398/p016_5.png?width=1200&format=auto"
       srcset="
       https://assets.codepen.io/96398/p016_5.png?width=480&format=auto 480w,
       https://assets.codepen.io/96398/p016_5.png?width=800&format=auto 800w,
       https://assets.codepen.io/96398/p016_5.png?width=1200&format=auto 1200w"
       sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px"
       alt="">
  <figcaption><b>Hand at the Moon Poster</b>Art &amp; Creative Direction.</figcaption>
</figure>

<figure data-category="branding">
  <img loading="lazy" class="media image"
       src="https://assets.codepen.io/96398/p016_4.png?width=1200&format=auto"
       srcset="
       https://assets.codepen.io/96398/p016_4.png?width=480&format=auto 480w,
       https://assets.codepen.io/96398/p016_4.png?width=800&format=auto 800w,
       https://assets.codepen.io/96398/p016_4.png?width=1200&format=auto 1200w"
       sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px"
       alt="">
  <figcaption><b>Eurovision2020 - Rotterdam, Pitch </b>Brand Exploration, Design &amp; Creative Direction.</figcaption>
</figure>

<figure data-category="3d">
  <img loading="lazy" class="media image"
       src="https://assets.codepen.io/96398/p018_2.png?width=1200&format=auto"
       srcset="
       https://assets.codepen.io/96398/p018_2.png?width=480&format=auto 480w,
       https://assets.codepen.io/96398/p018_2.png?width=800&format=auto 800w,
       https://assets.codepen.io/96398/p018_2.png?width=1200&format=auto 1200w"
       sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px"
       alt="">
  <figcaption><b>Blazst Electric Bike © </b>Creative &amp; Art Direction, Design, 3d prototype.</figcaption>
</figure>

<figure class="poster4">
  <img loading="lazy" class="media image"
       src="https://assets.codepen.io/96398/p017_2.png?width=1200&format=auto"
       srcset="
       https://assets.codepen.io/96398/p017_2.png?width=480&format=auto 480w,
       https://assets.codepen.io/96398/p017_2.png?width=800&format=auto 800w,
       https://assets.codepen.io/96398/p017_2.png?width=1200&format=auto 1200w"
       sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px"
       alt="">
  <figcaption><b>Braun 100 years anniversary - Poster Selected</b>Design Direction, Art Direction, Illustration.</figcaption>
</figure>

<figure>
  <img loading="lazy" class="media image"
       src="https://assets.codepen.io/96398/p019_2.png?width=1200&format=auto"
       srcset="
       https://assets.codepen.io/96398/p019_2.png?width=480&format=auto 480w,
       https://assets.codepen.io/96398/p019_2.png?width=800&format=auto 800w,
       https://assets.codepen.io/96398/p019_2.png?width=1200&format=auto 1200w"
       sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px"
       alt="">
  <figcaption><b>FWA Certificates Redesign</b>Creative &amp; Art Direction, Design.</figcaption>
</figure>

<figure>
  <img loading="lazy" class="media image"
       src="https://assets.codepen.io/96398/p020_1.png?width=1200&format=auto"
       srcset="
       https://assets.codepen.io/96398/p020_1.png?width=480&format=auto 480w,
       https://assets.codepen.io/96398/p020_1.png?width=800&format=auto 800w,
       https://assets.codepen.io/96398/p020_1.png?width=1200&format=auto 1200w"
       sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px"
       alt="">
  <figcaption><b>The Monks Explorations 01</b>Animation, Design, 3d Concept.</figcaption>
</figure>

<figure data-category="branding">
  <img loading="lazy" class="media image"
       src="https://assets.codepen.io/96398/p021_1.png?width=1200&format=auto"
       srcset="
       https://assets.codepen.io/96398/p021_1.png?width=480&format=auto 480w,
       https://assets.codepen.io/96398/p021_1.png?width=800&format=auto 800w,
       https://assets.codepen.io/96398/p021_1.png?width=1200&format=auto 1200w"
       sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px"
       alt="">
  <figcaption><b>The Ellinikon Experience Center</b>Design Direction, Iconography Direction, Branding, Art Direction.</figcaption>
</figure>

<figure class="poster4">
  <img loading="lazy" class="media image"
       src="https://assets.codepen.io/96398/p022_1.png?width=1200&format=auto"
       srcset="
       https://assets.codepen.io/96398/p022_1.png?width=480&format=auto 480w,
       https://assets.codepen.io/96398/p022_1.png?width=800&format=auto 800w,
       https://assets.codepen.io/96398/p022_1.png?width=1200&format=auto 1200w"
       sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px"
       alt="">
  <figcaption><b>Braun 100 years anniversary - Poster Selected</b>Design Direction, Art Direction, Illustration.</figcaption>
</figure>

<figure data-category="interfaces">
  <video class="media video frame" autoplay="" muted="" loop="" playsinline="">
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
  <img loading="lazy" class="media image"
       src="https://assets.codepen.io/96398/p025_1.png?width=1200&format=auto"
       srcset="
       https://assets.codepen.io/96398/p025_1.png?width=480&format=auto 480w,
       https://assets.codepen.io/96398/p025_1.png?width=800&format=auto 800w,
       https://assets.codepen.io/96398/p025_1.png?width=1200&format=auto 1200w"
       sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px"
       alt="">
  <figcaption><b>The Monks Explorations 01</b>Animation, Design, 3d Concept.</figcaption>
</figure>

<figure data-category="branding">
  <img loading="lazy" class="media image"
       src="https://assets.codepen.io/96398/eli_4.png?width=1200&format=auto"
       srcset="
       https://assets.codepen.io/96398/eli_4.png?width=480&format=auto 480w,
       https://assets.codepen.io/96398/eli_4.png?width=800&format=auto 800w,
       https://assets.codepen.io/96398/eli_4.png?width=1200&format=auto 1200w"
       sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px"
       alt="">
  <figcaption><b>The Ellinikon Experience Center</b>Design Direction, Iconography Direction, Branding, Art Direction.</figcaption>
</figure>

<figure class="land2">
  <img loading="lazy" class="media image"
       src="https://assets.codepen.io/96398/p027_1.png?width=1200&format=auto"
       srcset="
       https://assets.codepen.io/96398/p027_1.png?width=480&format=auto 480w,
       https://assets.codepen.io/96398/p027_1.png?width=800&format=auto 800w,
       https://assets.codepen.io/96398/p027_1.png?width=1200&format=auto 1200w"
       sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px"
       alt="">
  <figcaption><b>Core Monks Expression</b>Branding, Design, Concept.</figcaption>
</figure>

<figure class="poster4">
  <img loading="lazy" class="media image"
       src="https://assets.codepen.io/96398/p029_1.png?width=1200&format=auto"
       srcset="
       https://assets.codepen.io/96398/p029_1.png?width=480&format=auto 480w,
       https://assets.codepen.io/96398/p029_1.png?width=800&format=auto 800w,
       https://assets.codepen.io/96398/p029_1.png?width=1200&format=auto 1200w"
       sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px"
       alt="">
  <figcaption><b>Braun 100 years anniversary - Poster Selected</b>Design Direction, Art Direction, Illustration.</figcaption>
</figure>

<figure class="land2">
  <img loading="lazy" class="media image"
       src="https://assets.codepen.io/96398/p028_1.png?width=1200&format=auto"
       srcset="
       https://assets.codepen.io/96398/p028_1.png?width=480&format=auto 480w,
       https://assets.codepen.io/96398/p028_1.png?width=800&format=auto 800w,
       https://assets.codepen.io/96398/p028_1.png?width=1200&format=auto 1200w"
       sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px"
       alt="">
  <figcaption><b>Rotato © Watch concept</b>Design &amp; Creative Direction, 3D Concept.</figcaption>
</figure>




<figure data-category="3d">
  <video class="media video" autoplay="" muted="" loop="" playsinline="">
    <source src="https://assets.codepen.io/96398/p030_1.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <figcaption><b>Sony Bravia XR</b>3D Concept, Key Visual, Animation.</figcaption>
</figure>

<figure data-category="interfaces">
  <img loading="lazy" class="media image"
       src="https://assets.codepen.io/96398/p031_1.png?width=1200&format=auto"
       srcset="
       https://assets.codepen.io/96398/p031_1.png?width=480&format=auto 480w,
       https://assets.codepen.io/96398/p031_1.png?width=800&format=auto 800w,
       https://assets.codepen.io/96398/p031_1.png?width=1200&format=auto 1200w"
       sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px"
       alt="">
  <figcaption><b>Diego Stevens</b>Creative &amp; Art Direction, Design, 3d &amp; Develop.</figcaption>
</figure>

<figure class="branding">
  <img loading="lazy" class="media image"
       src="https://assets.codepen.io/96398/p032_2.png?width=1200&format=auto"
       srcset="
       https://assets.codepen.io/96398/p032_2.png?width=480&format=auto 480w,
       https://assets.codepen.io/96398/p032_2.png?width=800&format=auto 800w,
       https://assets.codepen.io/96398/p032_2.png?width=1200&format=auto 1200w"
       sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px"
       alt="">
  <figcaption><b>Triangles, Squares &amp; Circles</b>Typography Exploration.</figcaption>
</figure>

<figure class="poster6">
  <img loading="lazy" class="media image"
       src="https://assets.codepen.io/96398/p034.png?width=1200&format=auto"
       srcset="
       https://assets.codepen.io/96398/p034.png?width=480&format=auto 480w,
       https://assets.codepen.io/96398/p034.png?width=800&format=auto 800w,
       https://assets.codepen.io/96398/p034.png?width=1200&format=auto 1200w"
       sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px"
       alt="">
  <figcaption><b>Core Monks Expression</b>Branding, Design, Concept.</figcaption>
</figure>

<figure>
  <img loading="lazy" class="media image"
       src="https://assets.codepen.io/96398/p033_2.png?width=1200&format=auto"
       srcset="
       https://assets.codepen.io/96398/p033_2.png?width=480&format=auto 480w,
       https://assets.codepen.io/96398/p033_2.png?width=800&format=auto 800w,
       https://assets.codepen.io/96398/p033_2.png?width=1200&format=auto 1200w"
       sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px"
       alt="">
  <figcaption><b>Think with Google 2019 </b>Art Direction, Brand Identity &amp; Design.</figcaption>
</figure>

<figure data-category="interfaces">
  <img loading="lazy" class="media image"
       src="https://assets.codepen.io/96398/Figma_Tn2L6evjo7.png?width=1200&format=auto"
       srcset="
       https://assets.codepen.io/96398/Figma_Tn2L6evjo7.png?width=480&format=auto 480w,
       https://assets.codepen.io/96398/Figma_Tn2L6evjo7.png?width=800&format=auto 800w,
       https://assets.codepen.io/96398/Figma_Tn2L6evjo7.png?width=1200&format=auto 1200w"
       sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px"
       alt="">
  <figcaption><b>Google Lens - Lakers App </b>Art Direction, Interfaces Design.</figcaption>
</figure>

<figure data-category="3d">
  <video class="media video" autoplay="" muted="" loop="" playsinline="">
    <source src="https://assets.codepen.io/96398/p035.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <figcaption><b>Sony Bravia XR</b>3D Concept, Key Visual, Animation.</figcaption>
</figure>


<figure data-category="3d">
  <img loading="lazy" class="media image"
       src="https://assets.codepen.io/96398/rumba_1.png?width=1200&format=auto"
       srcset="
       https://assets.codepen.io/96398/rumba_1.png?width=480&format=auto 480w,
       https://assets.codepen.io/96398/rumba_1.png?width=800&format=auto 800w,
       https://assets.codepen.io/96398/rumba_1.png?width=1200&format=auto 1200w"
       sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px"
       alt="">
  <figcaption><b>Plant-Pot &amp; Robot vacuum Cleaner</b>Design &amp; Creative Direction, 3D Concept.</figcaption>
</figure>

<figure data-category="branding">
  <img loading="lazy" class="media image"
       src="https://assets.codepen.io/96398/p036_1.png?width=1200&format=auto"
       srcset="
       https://assets.codepen.io/96398/p036_1.png?width=480&format=auto 480w,
       https://assets.codepen.io/96398/p036_1.png?width=800&format=auto 800w,
       https://assets.codepen.io/96398/p036_1.png?width=1200&format=auto 1200w"
       sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px"
       alt="">
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
  <figcaption><b>Samsung Dreamground</b>Art Direction, AR, Motion Tracking, UI.</figcaption>
</figure>

<figure data-category="3d">
  <video class="media video" autoplay="" muted="" loop="" playsinline="">
    <source src="https://assets.codepen.io/96398/zolviz-greg-livingroom-day-night-timelapse-v1.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <figcaption><b>zolviz</b>Founder, Art Direction, Design, 3D, Branding.</figcaption>
</figure>

<figure>
  <video class="media video" autoplay="" muted="" loop="">
    <source src="https://assets.codepen.io/96398/0001-0289_1.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <figcaption><b>Puma Basketball Experimental Shop</b>Art Direction, Animation Direction, UI Design, 3D.</figcaption>
</figure>

<figure data-category="branding">
  <img loading="lazy" class="media image"
       src="https://assets.codepen.io/96398/nikon_3.png?width=1200&format=auto"
       srcset="
       https://assets.codepen.io/96398/nikon_3.png?width=480&format=auto 480w,
       https://assets.codepen.io/96398/nikon_3.png?width=800&format=auto 800w,
       https://assets.codepen.io/96398/nikon_3.png?width=1200&format=auto 1200w"
       sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px"
       alt="">
  <figcaption><b>Nikon Catalogue Template</b>Design System, Branding, Layout Design.</figcaption>
</figure>

<figure data-category="interfaces">
  <img loading="lazy" class="media image"
       src="https://assets.codepen.io/96398/p005_5.png?width=1200&format=auto"
       srcset="
       https://assets.codepen.io/96398/p005_5.png?width=480&format=auto 480w,
       https://assets.codepen.io/96398/p005_5.png?width=800&format=auto 800w,
       https://assets.codepen.io/96398/p005_5.png?width=1200&format=auto 1200w"
       sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px"
       alt="">
  <figcaption><b>Braun One Stroke</b>Design System, CTA's Design.</figcaption>
</figure>



<figure data-category="branding">
  <img loading="lazy" class="media image special"
       src="https://assets.codepen.io/96398/Group3196_2.png?width=1200&format=auto"
       srcset="
       https://assets.codepen.io/96398/Group3196_2.png?width=480&format=auto 480w,
       https://assets.codepen.io/96398/Group3196_2.png?width=800&format=auto 800w,
       https://assets.codepen.io/96398/Group3196_2.png?width=1200&format=auto 1200w"
       sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px"
       alt="">
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
  <img loading="lazy" class="media image"
       src="https://assets.codepen.io/96398/sphere3-gradient22_1.png?width=1200&format=auto"
       srcset="
       https://assets.codepen.io/96398/sphere3-gradient22_1.png?width=480&format=auto 480w,
       https://assets.codepen.io/96398/sphere3-gradient22_1.png?width=800&format=auto 800w,
       https://assets.codepen.io/96398/sphere3-gradient22_1.png?width=1200&format=auto 1200w"
       sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px"
       alt="">
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
  <img loading="lazy" class="media image"
       src="https://assets.codepen.io/96398/CORE3_3.png?width=1200&format=auto"
       srcset="
       https://assets.codepen.io/96398/CORE3_3.png?width=480&format=auto 480w,
       https://assets.codepen.io/96398/CORE3_3.png?width=800&format=auto 800w,
       https://assets.codepen.io/96398/CORE3_3.png?width=1200&format=auto 1200w"
       sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px"
       alt="">
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

<figure data-category="3d">
  <video class="media video" autoplay="" muted="" loop="" playsinline="">
    <source src="https://assets.codepen.io/96398/cc0000001-0100.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <figcaption><b>Coca-cola, Beverage Lab</b>3d Comp, Procedual materials, Animation.</figcaption>
</figure>

<figure data-category="interfaces">
  <video class="media video" autoplay="" muted="" loop="">
    <source src="https://assets.codepen.io/96398/0001-0074ui4.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <figcaption><b>Microsoft Ignite 2020 - Virtual Event</b>Art Direction, Animation, Look &amp; Feel, 3D Particles.</figcaption>
</figure>

<figure data-category="interfaces">
  <img loading="lazy" class="media video tablet"
       src="https://assets.codepen.io/96398/sdfaz_1.png?width=1200&format=auto"
       srcset="
       https://assets.codepen.io/96398/sdfaz_1.png?width=480&format=auto 480w,
       https://assets.codepen.io/96398/sdfaz_1.png?width=800&format=auto 800w,
       https://assets.codepen.io/96398/sdfaz_1.png?width=1200&format=auto 1200w"
       sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px"
       alt="">
  <figcaption><b>Davies Landscape Architects, Phase 01 </b>Art Direction, Interactive Design, UI Design.</figcaption>
</figure>

<figure data-category="branding">
  <video class="media video" autoplay="" muted="" loop="">
    <source src="https://assets.codepen.io/96398/think4.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <figcaption><b>Think with Google 2019 </b>Art Direction, Brand Identity, Grid System Design.</figcaption>
</figure>

<figure>
  <video class="media video frame" autoplay="" muted="" loop="">
    <source src="https://assets.codepen.io/96398/blur-f.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <figcaption><b>Typography Blur effects Exploration </b>Art Direction, Animation, Creative.</figcaption>
</figure>

<figure>
  <img loading="lazy" class="media image"
       src="https://assets.codepen.io/96398/car-s.png?width=1200&format=auto"
       srcset="
       https://assets.codepen.io/96398/car-s.png?width=480&format=auto 480w,
       https://assets.codepen.io/96398/car-s.png?width=800&format=auto 800w,
       https://assets.codepen.io/96398/car-s.png?width=1200&format=auto 1200w"
       sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px"
       alt="">
  <figcaption><b>Desert Bartone Concept Car Remix</b>AI, Midjourney, prompts.</figcaption>
</figure>


<figure data-category="3d">
  <img loading="lazy" class="media image"
       src="https://assets.codepen.io/96398/arc_3.png?width=1200&format=auto"
       srcset="
       https://assets.codepen.io/96398/arc_3.png?width=480&format=auto 480w,
       https://assets.codepen.io/96398/arc_3.png?width=800&format=auto 800w,
       https://assets.codepen.io/96398/arc_3.png?width=1200&format=auto 1200w"
       sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px"
       alt="">
  <figcaption><b>The Ellinikon Experience Center</b>Design Direction, Iconography Direction, Branding, Light Direction.</figcaption>
</figure>

<figure data-category="interfaces">
  <video class="media video phone" autoplay="" muted="" loop="" playsinline="">
    <source src="https://assets.codepen.io/96398/kusari-mobile23+%281%29.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <figcaption><b>Yohji Yamamoto Kusari II Adidas Landing Page</b>Design Direction &amp; Animation.</figcaption>
</figure>

<figure data-category="branding">
  <img loading="lazy" class="media image"
       src="https://assets.codepen.io/96398/a06760be-6eab-4916-9b15-77a6d0be6499.png?width=1200&format=auto"
       srcset="
       https://assets.codepen.io/96398/a06760be-6eab-4916-9b15-77a6d0be6499.png?width=480&format=auto 480w,
       https://assets.codepen.io/96398/a06760be-6eab-4916-9b15-77a6d0be6499.png?width=800&format=auto 800w,
       https://assets.codepen.io/96398/a06760be-6eab-4916-9b15-77a6d0be6499.png?width=1200&format=auto 1200w"
       sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px"
       alt="">
  <figcaption><b>EUROVISION 2020, Proposal</b>Art Direction, Illustration, Branding</figcaption>
</figure>

<figure data-category="interfaces">
  <video class="media video" autoplay="" muted="" loop="" playsinline="">
    <source src="https://assets.codepen.io/96398/01-+Select+2ND+Flavorss_1.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <figcaption><b>Coca-cola, Beverage Lab</b>UI, Iconography, Spatial Design.</figcaption>
</figure>

<figure>
  <video class="media video" autoplay="" muted="" loop="">
    <source src="https://assets.codepen.io/96398/Figma_iQikNvvtS1.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <figcaption><b>Common Ground</b>Art Direction, Key Visual, Animation.</figcaption>
</figure>

<figure>
  <img loading="lazy" class="media image"
       src="https://assets.codepen.io/96398/Frame+9.png?width=1200&format=auto"
       srcset="
       https://assets.codepen.io/96398/Frame+9.png?width=480&format=auto 480w,
       https://assets.codepen.io/96398/Frame+9.png?width=800&format=auto 800w,
       https://assets.codepen.io/96398/Frame+9.png?width=1200&format=auto 1200w"
       sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px"
       alt="">
  <figcaption><b>Core Monks Expression</b>Branding, Design, Concept.</figcaption>
</figure>

<figure data-category="3d">
  <img loading="lazy" class="media image"
       src="https://assets.codepen.io/96398/bmw-cannes20B3.png?width=1200&format=auto"
       srcset="
       https://assets.codepen.io/96398/bmw-cannes20B3.png?width=480&format=auto 480w,
       https://assets.codepen.io/96398/bmw-cannes20B3.png?width=800&format=auto 800w,
       https://assets.codepen.io/96398/bmw-cannes20B3.png?width=1200&format=auto 1200w"
       sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px"
       alt="">
  <figcaption><b>BMW + Cannes</b>Key Visual, 3D, Light Treatment.</figcaption>
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
  width: 1.4VW;
  height: 1.4VW;
  background-color: red;
  border-radius: 100%;
  position: absolute;
  z-index: 10;
  cursor: pointer;
}

body.mobile #control-dot {
  width: 50px;
  height: 50px;

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

body.mobile #header a {
margin-left:20px;
}


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
  pointer-events:none;
  height: auto;
  object-fit: contain;
  transform:scale(.7);
  user-select:none;    -webkit-user-drag: none;
}
  .phone,.tablet {
box-sizing: border-box;
  }

  .scale {transform:scale(1)!important}

  #media-container {
    pointer-events:none;
  user-select:none;
    -webkit-user-drag: none;
  }




    `;
    document.head.appendChild(style);
}
// Function to detect mobile or iPad devices
function isMobileDevice() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  return /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
}

// Function to preload images and videos
function preloadMedia(mediaElements, callback) {
  let loadedCount = 0;
  const total = mediaElements.length;
  const loadingContainer = document.getElementById('loading-container');
  const isMobile = isMobileDevice();

  if (total === 0) {
      callback();
      return;
  }

  mediaElements.forEach(element => {
      if (element.tagName === 'IMG') {
          element.onload = mediaLoaded;
          element.onerror = mediaLoaded;
          element.src = element.src; // Trigger load
      } else if (element.tagName === 'VIDEO') {
          element.onloadeddata = mediaLoaded;
          element.onerror = mediaLoaded;
          
          if (isMobile) {
              element.pause(); // Pause the video if on mobile
          } else {
              element.load(); // Trigger loading
          }
      }
  });

  function mediaLoaded() {
      loadedCount++;
      const percent = Math.round((loadedCount / total) * 100);
      loadingContainer.innerText = `Loading... ${percent}%`;
      if (loadedCount === total) {
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
      this.pausePending = false;
      this.currentZIndex = 1;
  }

  createTimeline() {
      this.timeline.to(this.container, {
          scale: 1,
          opacity: 1,
          duration: 0.3,
          ease: 'power2.out',
          onStart: () => {
              this.container.innerText = "Hello! I'm David,";
          }
      })
      .to(this.container, {
          opacity: 0,
          duration: 0.5,
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

      const categories = ["interfaces", "branding", "3d"];
      categories.forEach((category) => {
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

              const isMobile = isMobileDevice();

              const figures = this.mediaContainer.querySelectorAll(`figure[data-category="${category}"]`);
              figures.forEach((figure) => {
                  const video = figure.querySelector('video');
                  if (video && isMobile) {
                    video.pause();
                }
                  
                  // Play video when figure becomes visible
                  this.timeline.fromTo(figure, {
                          scale: 1,
                          opacity: 0,
                          zIndex: this.currentZIndex++
                      }, {
                          scale: 1,
                          opacity: 1,
                          duration: 0.05,
                          ease: 'power2.out',
                          onStart: () => {
                              /*if (video) {
                                  video.play();
                              }*/
                          },
                          onComplete: () => {
                              if (this.pausePending) {
                                  this.timeline.pause();
                                  this.pausePending = false;
                              }
                          }
                      })
                      // Pause video when figure fades out
                      .to(figure, {
                          opacity: 0,
                          duration: 0.2,
                          ease: 'power2.in',
                          onStart: () => {
                              /*if (video) {
                                  video.pause();
                              }*/
                          }
                      });
              });
          });
  
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
              const video = figure.querySelector('video');
              if (video && isMobile) {
                video.pause();
            }
              
              this.timeline.fromTo(figure, {
                      scale: 1,
                      opacity: 0,
                      zIndex: this.currentZIndex++
                  }, {
                      scale: 1,
                      opacity: 1,
                      duration: 0.05,
                      ease: 'power2.out',
                      onStart: () => {
                         /* if (video) {
                              video.play();
                          }*/
                      },
                      onComplete: () => {
                          if (this.pausePending) {
                              this.timeline.pause();
                              this.pausePending = false;
                          }
                      }
                  })
                  .to(figure, {
                      opacity: 0,
                      duration: 0.2,
                      ease: 'power2.in',
                      onStart: () => {
                         /* if (video && isMobile) {
                              video.pause();
                          }*/
                      }
                  });
          });
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

document.addEventListener('DOMContentLoaded', () => {
  injectHTMLandCSS();
  const text = "Originally from Chile, I am a Designer and Developer currently based in The Netherlands. I love to concept and design minimal and creative products, working in multiple disciplines including branding, interactive design, illustration, 3D, animation, AR/VR, development, iconography, photography, typography, art and creative direction.";
  const container = document.getElementById('text-container');
  const mediaContainer = document.getElementById('media-container');
  const controlDot = document.getElementById('control-dot');
  const loadingContainer = document.getElementById('loading-container');
  const instruction = document.getElementById('instruction');
  const header = document.getElementById('header');
  const animator = new WordAnimator(text, container, mediaContainer);
  const mediaElements = mediaContainer.querySelectorAll('img, video');

  preloadMedia(mediaElements, () => {
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