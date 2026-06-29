// import * as THREE from "three";
// import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
// gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// window.addEventListener("load", () => {
//   const videoHero = document.querySelector(".hero video");
//   const videoFooter = document.querySelector("footer video");

//   videoHero.src = "img/video-hero.mp4";
//   videoHero.autoplay = true;
//   videoHero.loop = true;
//   videoHero.muted = true;

//   videoFooter.src = "img/video-footer.mp4";
//   videoFooter.autoplay = true;
//   videoFooter.loop = true;
//   videoFooter.muted = true;

//   //QUANDO ROLO A PAGINA CADA RETANGULO DESCE
//   //LINHA DO TEMPO

//   const linhaDoTempo = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".transicao",
//       scrub: 2,
//       start: "0% 0%",
//       end: "+=3000",
//       pin: true,
//     },
//   });

//   linhaDoTempo.to(".retangulos div", {
//     y: 0,
//     stagger: 0.2,
//     duration: 4,
//   });

//   linhaDoTempo.to(".secao2", {
//     opacity: 1,
//     duration: 0.1,
//   });

//   const split = new SplitText(".secao2 h2", {
//     types: "chars",
//     mask: "lines",
//   });
//   linhaDoTempo.from(split.chars, {
//     y: 100,
//     stagger: 0.1,
//     duration: 1,
//   });

//   //ANIMAÇÕES TEXTOS SURGINDO

//   const linhaDoTempo2 = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".transicao2",
//       scrub: 2,
//       end: "+=3000",
//       pin: true,
//     },
//   });

//   const textosSecao4 = document.querySelectorAll(".secao4 h2");

//   textosSecao4.forEach((texto) => {
//     const split2 = new SplitText(texto, {
//       types: "chars",
//     });
//     linhaDoTempo2.from(split2.chars, {
//       opacity: 0,
//       filter: "blur(20px)",
//       stagger: {
//         each: 0.2,
//         from: "random",
//       },
//     });

//     linhaDoTempo2.to(
//       split2.chars,
//       {
//         opacity: 0,
//         stagger: {
//           each: 0.2,
//           from: "random",
//         },
//       },
//       "+=2",
//     );
//   });

//   // COMEÇANDO CODIGO THREE JS
//   // CENA
//   const cena = new THREE.Scene();

//   // CAMERA
//   const camera = new THREE.PerspectiveCamera(
//     40,
//     window.innerWidth / window.innerHeight,
//     0.1,
//     1000,
//   );
//   camera.position.z = 4;

//   // RENDERIZADOR
//   const renderizador = new THREE.WebGLRenderer({
//     alpha: true,
//     antialias: true,
//   });
//   renderizador.setSize(window.innerWidth, window.innerHeight);
//   const divDiamante = document.querySelector(".divDiamante");
//   divDiamante.appendChild(renderizador.domElement);

//   // INSERIR MODELO 3D
//   let diamante = null;
//   const gltfLoader = new GLTFLoader();
//   gltfLoader.load("img/diamond-compressed.glb", (objeto) => {
//     diamante = objeto.scene;
//     diamante.position.z = -8;
//     diamante.position.y = 2;

//     // const linhaDoTempo3 = gsap.timeline({
//     //   scrollTrigger: {
//     //     trigger: ".transicao2",
//     //     scrub: 2,
//     //     end: "+=4000",
//     //   },
//     // });

//     // linhaDoTempo3.to(diamante.position, {
//     //   y: 0,
//     //   duration: 2,
//     // });
//     // linhaDoTempo3.to(
//     //   diamante.rotation,
//     //   {
//     //     x: 4.6,
//     //     duration: 2,
//     //   },
//     //   "<",
//     // );
//     // linhaDoTempo3.to(diamante.position, {
//     //   z: 3.6,
//     //   duration: 1,
//     // });
//     // linhaDoTempo3.to(
//     //   "footer",
//     //   {
//     //     opacity: 1,
//     //     duration: 1.2,
//     //     ease: " power2.inOut",
//     //   },
//     //   "-=0.3",
//     // );
//     const linhaDoTempo3 = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".transicao2",
//         scrub: 2,
//         end: "+=5200",
//       },
//     });

//     linhaDoTempo3.to(diamante.position, {
//       y: 1.2,
//       duration: 1.8,
//       ease: "none",
//     });

//     linhaDoTempo3.to(
//       diamante.rotation,
//       {
//         x: 1.5,
//         duration: 1.8,
//         ease: "none",
//       },
//       "<",
//     );

//     linhaDoTempo3.to(diamante.position, {
//       y: 0.4,
//       z: -5.5,
//       duration: 1.8,
//       ease: "none",
//     });

//     linhaDoTempo3.to(
//       diamante.rotation,
//       {
//         x: 3.2,
//         duration: 1.8,
//         ease: "none",
//       },
//       "<",
//     );

//     linhaDoTempo3.to(diamante.position, {
//       y: 0,
//       z: -4,
//       duration: 1.8,
//       ease: "none",
//     });

//     linhaDoTempo3.to(
//       diamante.rotation,
//       {
//         x: 4.6,
//         duration: 1.8,
//         ease: "none",
//       },
//       "<",
//     );

//     linhaDoTempo3.to(diamante.position, {
//       z: 3.6,
//       duration: 1.4,
//       ease: "none",
//     });

//     linhaDoTempo3.to(
//       "footer",
//       {
//         opacity: 1,
//         duration: 1,
//         ease: "none",
//       },
//       "-=0.4",
//     );

//     cena.add(diamante);
//   });

//   // INSERIR TEXTURA
//   const txtLoader = new THREE.TextureLoader();
//   txtLoader.load("img/ferndale_studio_12.webp", (texturaCarregada) => {
//     texturaCarregada.mapping = THREE.EquirectangularReflectionMapping;
//     const pmrem = new THREE.PMREMGenerator(renderizador);
//     const ambiente = pmrem.fromEquirectangular(texturaCarregada).texture;
//     cena.environment = ambiente;
//   });

//   function animar() {
//     if (diamante !== null) {
//       diamante.rotation.y = diamante.rotation.y + 0.01;
//     }

//     renderizador.render(cena, camera);
//     requestAnimationFrame(animar);
//   }

//   animar();
// });
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

window.addEventListener("load", () => {
  const videoHero = document.querySelector(".hero video");
  const videoFooter = document.querySelector("footer video");

  videoHero.src = "img/video-hero.mp4";
  videoHero.autoplay = true;
  videoHero.loop = true;
  videoHero.muted = true;

  videoFooter.src = "img/video-footer.mp4";
  videoFooter.autoplay = true;
  videoFooter.loop = true;
  videoFooter.muted = true;

  //QUANDO ROLO A PAGINA CADA RETANGULO DESCE
  //LINHA DO TEMPO

  const linhaDoTempo = gsap.timeline({
    scrollTrigger: {
      trigger: ".transicao",
      scrub: 2,
      start: "0% 0%",
      end: "+=3000",
      pin: true,
    },
  });

  linhaDoTempo.to(".retangulos div", {
    y: 0,
    stagger: 0.2,
    duration: 4,
  });

  linhaDoTempo.to(".secao2", {
    opacity: 1,
    duration: 0.1,
  });

  const split = new SplitText(".secao2 h2", {
    types: "chars",
    mask: "lines",
  });
  linhaDoTempo.from(split.chars, {
    y: 100,
    stagger: 0.1,
    duration: 1,
  });

  //ANIMAÇÕES TEXTOS SURGINDO

  const linhaDoTempo2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".transicao2",
      scrub: 2,
      end: "+=3000",
      pin: true,
    },
  });

  const textosSecao4 = document.querySelectorAll(".secao4 h2");

  textosSecao4.forEach((texto) => {
    const split2 = new SplitText(texto, {
      types: "chars",
    });
    linhaDoTempo2.from(split2.chars, {
      opacity: 0,
      filter: "blur(20px)",
      stagger: {
        each: 0.2,
        from: "random",
      },
    });

    linhaDoTempo2.to(
      split2.chars,
      {
        opacity: 0,
        stagger: {
          each: 0.2,
          from: "random",
        },
      },
      "+=2",
    );
  });

  // ========== ANIMAÇÃO DO FOOTER - CORRIGIDA ==========
  // Creamos una timeline independiente que NO depende del modelo 3D
  const footerTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".transicao2",
      scrub: 2,
      start: "top top",
      end: "+=4000", // Aumentado para dar más tiempo
      invalidateOnRefresh: true,
    },
  });

  // Animación del footer - se ejecutará durante el scroll
  footerTimeline.to(
    "footer",
    {
      opacity: 1,
      duration: 1.5,
      ease: "power2.inOut",
    },
    "+=1",
  ); // Pequeño delay para que no sea inmediato

  // COMEÇANDO CODIGO THREE JS
  // CENA
  const cena = new THREE.Scene();

  // CAMERA
  const camera = new THREE.PerspectiveCamera(
    40,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );
  camera.position.z = 4;

  // RENDERIZADOR
  const renderizador = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
  });
  renderizador.setSize(window.innerWidth, window.innerHeight);
  const divDiamante = document.querySelector(".divDiamante");
  divDiamante.appendChild(renderizador.domElement);

  // INSERIR MODELO 3D
  let diamante = null;
  const gltfLoader = new GLTFLoader();
  gltfLoader.load("img/diamond-compressed.glb", (objeto) => {
    diamante = objeto.scene;
    diamante.position.z = -8;
    diamante.position.y = 2;

    const linhaDoTempo3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".transicao2",
        scrub: 2,
        end: "+=5200",
      },
    });

    linhaDoTempo3.to(diamante.position, {
      y: 1.2,
      duration: 1.8,
      ease: "none",
    });

    linhaDoTempo3.to(
      diamante.rotation,
      {
        x: 1.5,
        duration: 1.8,
        ease: "none",
      },
      "<",
    );

    linhaDoTempo3.to(diamante.position, {
      y: 0.4,
      z: -5.5,
      duration: 1.8,
      ease: "none",
    });

    linhaDoTempo3.to(
      diamante.rotation,
      {
        x: 3.2,
        duration: 1.8,
        ease: "none",
      },
      "<",
    );

    linhaDoTempo3.to(diamante.position, {
      y: 0,
      z: -4,
      duration: 1.8,
      ease: "none",
    });

    linhaDoTempo3.to(
      diamante.rotation,
      {
        x: 4.6,
        duration: 1.8,
        ease: "none",
      },
      "<",
    );

    linhaDoTempo3.to(diamante.position, {
      z: 3.6,
      duration: 1.4,
      ease: "none",
    });

    cena.add(diamante);
  });

  // INSERIR TEXTURA
  const txtLoader = new THREE.TextureLoader();
  txtLoader.load("img/ferndale_studio_12.webp", (texturaCarregada) => {
    texturaCarregada.mapping = THREE.EquirectangularReflectionMapping;
    const pmrem = new THREE.PMREMGenerator(renderizador);
    const ambiente = pmrem.fromEquirectangular(texturaCarregada).texture;
    cena.environment = ambiente;
  });

  function animar() {
    if (diamante !== null) {
      diamante.rotation.y = diamante.rotation.y + 0.01;
    }

    renderizador.render(cena, camera);
    requestAnimationFrame(animar);
  }

  animar();
});
