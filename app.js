const tl = gsap.timeline({defaults: { ease: 'power1.out' } });

tl.to('.text', {y: "0%", duration: 0.6, stagger: 0.4});
tl.to('.intro', {y: "-100%", duration: 1}, "-=0.8")
tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 1})
