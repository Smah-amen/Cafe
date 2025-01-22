import gsap from "gsap";

export function revealTransition() {
  return new Promise((resolve) => {
    gsap.set(".ptr-block", { scaleY: 1 });
    gsap.to(".ptr-block", {
      scaleY: 0,
      duration: 1,
      stagger: {
        each: 0.1,
        from: "start",
        grid: "auto",
        axis: "x",
      },
      ease: "power4.inOut",
      onComplete: resolve,
    });
  });
}

export function animateTransition() {
  return new Promise((resolve) => {
    gsap.set(".ptr-block", { visibility: "visible", scaleY: 0 });
    gsap.to(".ptr-block", {
      scaleY: 1,
      duration: 1,
      stagger: {
        each: 0.1,
        from: "start",
        grid: [2, 5],
        axis: "x",
      },
      ease: "power4.inOut",
      onComplete: resolve,
    });
  });
}
