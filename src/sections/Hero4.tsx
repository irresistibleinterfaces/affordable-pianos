import { useEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { CustomEase } from "gsap/all";
import "./Hero.css";
import Hero5 from '@/sections/Hero5';

gsap.registerPlugin(CustomEase, SplitText);

export default function Hero() {
  useEffect(() => {
    CustomEase.create("hop", "0.8, 0, 0.2, 1");
    CustomEase.create("hop2", "0.9, 0, 0.1, 1");

    const ctx = gsap.context(() => {
 const splitText = (
  selector: string,
  type: "chars" | "words" | "lines",
  className: string,
  mask = true
) => {
  return SplitText.create(selector, {
    type,
    [`${type}Class`]: className,
    ...(mask && { mask: type }),
  });
};

      splitText(".preloader-header h1", "chars", "char");
      splitText(".header h1", "chars", "char", false);

      const rotations = [7.5, -2.5, -10, 12.5, -5, 5];

      gsap.set(".preloader-img", {
        rotate: (i) => rotations[i],
      });

      const tl = gsap.timeline({
        delay: 0.5,
      });

      tl.to(".preloader-img", {
        scale: 1,
        clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
        duration: 1,
        ease: "hop",
        stagger: 0.2,
      });

      tl.to(
        ".preloader-header h1 .char",
        {
          y: "0%",
          duration: 1,
          ease: "hop2",
          stagger: {
            each: 0.125,
            from: "random",
          },
        },
        "0.35"
      );

      tl.to(
        ".preloader-counter p",
        {
          y: "0%",
          duration: 1,
          ease: "hop2",
          onStart: () => {
            const counterEl = document.querySelector(
              ".preloader-counter p"
            ) as HTMLElement;

            const counter = { value: 0 };

            gsap.to(counter, {
              value: 100,
              duration: 2,
              delay: 0.5,
              ease: "power2.inOut",
              onUpdate: () => {
                if (counterEl) {
                  counterEl.textContent = String(
                    Math.round(counter.value)
                  ).padStart(3, "0");
                }
              },
            });
          },
        },
        "<"
      );

      tl.to(
        ".preloader-counter p",
        {
          y: "-100%",
          duration: 0.75,
          ease: "hop2",
        },
        3.25
      );

      tl.to(
        ".preloader-header h1 .char",
        {
          y: "-100%",
          duration: 0.75,
          ease: "hop2",
          stagger: {
            each: 0.125,
            from: "random",
          },
        },
        3.25
      );

      tl.to(
        ".preloader-images .preloader-img",
        {
          scale: 0,
          clipPath: "polygon(20% 20%,80% 20%,80% 80%,20% 80%)",
          duration: 1,
          ease: "hop2",
          stagger: -0.075,
        },
        3.5
      );

      tl.to(
        ".preloader",
        {
          clipPath: "polygon(0% 0%,100% 0%,100% 0%,0% 0%)",
          duration: 1,
          ease: "hop2",
        },
        4.35
      );

      tl.to(
        ".header h1 .char",
        {
          y: "0%",
          duration: 1,
          ease: "hop",
          stagger: {
            each: 0.075,
            from: "random",
          },
        },
        4.65
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="preloader">
        <div className="preloader-images">
          <div className="preloader-img">
            <img src="/images/luxury-grand-piano-showroom-sydney.webp" alt="" />
          </div>

          <div className="preloader-img">
            <img src="/images/premium-black-grand-piano-showroom-sydney.webp" alt="" />
          </div>

          <div className="preloader-img">
            <img src="/images/premium-black-grand-piano-showroom-sydney.webp" alt="" />
          </div>

          <div className="preloader-img">
            <img src="/images/luxury-white-grand-piano-showroom-sydney.webp" alt="" />
          </div>

          <div className="preloader-img">
            <img src="/images/grand-vs-upright-piano-buying-guide.webp" alt="" />
          </div>

          <div className="preloader-img">
            <img src="/images/premium-black-grand-piano-showroom-sydney.webp" alt="" />
          </div>
        </div>

        <div className="preloader-header">
          <h1>Affordable Pianos</h1>

          <div className="preloader-counter">
            <p>000</p>
          </div>
        </div>
      </div>

      <section className="hero">
      <div className="header">

        <Hero5 />
      </div>

      </section>


    </>
  );
}