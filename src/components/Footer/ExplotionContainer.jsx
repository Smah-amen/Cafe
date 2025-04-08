import { useEffect, useRef, useState } from "react";
import "./Explotion.css";
export default function ExplotionContainer() {
  const containerRef = useRef(null);
  const footerRef = useRef(null);
  const [triggered, setTriggered] = useState(false);
  const particlesRef = useRef(null);

  const config = {
    gravity: 0.25,
    friction: 0.99,
    imageSize: 150,
    horizontalForce: 20,
    verticalForce: 17,
    rotationSpeed: 10,
    resetDelay: 500,
  };
  const imgParticlesCount = 20;
  const imgPaths = Array.from(
    { length: imgParticlesCount },
    (_, i) => `/footer/footer${i}.png`
  );

  class Particle {
    constructor(element) {
      this.element = element;
      this.x = 0;
      this.y = 0;
      this.vx = (Math.random() - 0.5) * config.horizontalForce;
      this.vy = -config.verticalForce - Math.random() * 10;
      this.rotation = 0;
      this.rotationSpeed = (Math.random() - 0.5) * config.rotationSpeed;
    }
    update() {
      this.vy += config.gravity;
      this.vx *= config.friction;
      this.vy *= config.friction;
      this.rotation *= config.friction;
      this.x += this.vx;
      this.y += this.vy;
      this.rotation += this.rotationSpeed;
      if (this.element) {
        this.element.style.transform = `translate(${this.x}px, ${this.y}px) rotate(${this.rotation}deg)`;
      }
    }
  }

  const createParticles = () => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = "";
    particlesRef.current = [];
    imgPaths.forEach((path) => {
      const particle = document.createElement("img");
      particle.src = path;
      particle.classList.add("explotion-particle");
      particle.style.width = `${config.imageSize}px`;
      containerRef.current.appendChild(particle);
    });
    const particlesElements = containerRef.current.querySelectorAll(
      ".explotion-particle"
    );

    particlesRef.current = Array.from(particlesElements).map(
      (element) => new Particle(element)
    );
  };

  const explode = () => {
    if (triggered) return;
    setTriggered(true);
    createParticles();
    let animationId;
    let finished = false;

    const animate = () => {
      if (finished) return;

      particlesRef.current.forEach((particle) => particle.update());
      if (
        containerRef.current &&
        particlesRef.current.every(
          (particle) => particle.y > containerRef.current.offsetHeight / 2
        )
      ) {
        cancelAnimationFrame(animationId);
        finished = true;
        setTimeout(() => {
          setTriggered(false);
        }, config.resetDelay);
        return;
      }
      animationId = requestAnimationFrame(animate);
    };
    animate();
  };

  const checkFooterPostion = () => {
    if (!footerRef.current) {
      return;
    }
    const footerRect = footerRef.current.getBoundingClientRect();
    const viewPortHeight = window.innerHeight;
    if (
      !triggered &&
      (viewPortHeight == Math.floor(footerRect.bottom) ||
        viewPortHeight == Math.round(footerRect.bottom))
    ) {
      // footerRect.top < viewPortHeight - footerRect.height * 0.5
      console.log("Fire");
      explode();
    }
  };

  useEffect(() => {
    imgPaths.forEach((path) => {
      const img = new Image();
      img.src = path;
    });
    footerRef.current = document.querySelector("footer");
    createParticles();
    let checkTimeout;
    const handleScroll = () => {
      clearTimeout(checkTimeout);
      checkTimeout = setTimeout(checkFooterPostion, 10);
    };
    window.addEventListener("scroll", handleScroll);
    setTimeout(checkFooterPostion, 500);
    const handleRsize = () => {
      setTriggered(false);
    };
    window.addEventListener("resize", handleRsize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleRsize);
      clearTimeout(checkTimeout);
    };
  }, []);

  return (
    <div
      className="absolute top-0 left-0 w-[100%] h-[200%] pointer-events-none"
      ref={containerRef}
    ></div>
  );
}
