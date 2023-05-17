import React, { ReactElement, useRef, useLayoutEffect } from "react";
import gsap from "gsap";

const Headline = (): ReactElement => {
  const rootAnimationRef = useRef<HTMLHeadingElement>(null);
  const animationRef1 = useRef<HTMLDivElement>(null);
  const animationRef2 = useRef<HTMLDivElement>(null);
  const animationRef3 = useRef<HTMLDivElement>(null);
  const animationRef4 = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(animationRef1.current, { x: -100, opacity: 0 });
      tl.from(animationRef2.current, { x: -100, opacity: 0 });
      tl.from(animationRef3.current, { x: -100, opacity: 0 });
      // Arrow animation loop
      const arrowTimelineLoop = gsap.timeline({ repeat: -1 });
      arrowTimelineLoop.to(animationRef4.current, { scaleY: 1.5, duration: 1 });
      arrowTimelineLoop.to(animationRef4.current, { scaleY: 1, duration: 1 });
      arrowTimelineLoop.pause();

      // Arrow revela animation
      const arrowTimeline = gsap.timeline();
      arrowTimeline.from(animationRef4.current, {
        scaleX: 3,
        duration: 1,
        opacity: 0,
      });
      arrowTimeline.to(animationRef4.current, { scaleY: 1.5, duration: 1 });
      arrowTimeline.to(animationRef4.current, { scaleY: 1, duration: 1 });
      arrowTimeline.eventCallback("onComplete", () => {
        arrowTimelineLoop.play();
      });
    }, rootAnimationRef); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <div className="headline-wrapper">
      <h1 ref={rootAnimationRef} className="headline-special">
        <div ref={animationRef1}>Etsitkö</div>
        <div ref={animationRef2}>
          <u>seuraavaa</u>
        </div>
        <div className="special-color-header" ref={animationRef3}>
          ohjelmisto
          <br />
          kehittäjääsi?
        </div>
        <div ref={animationRef4}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            fill="currentColor"
            className="bi bi-caret-down"
            viewBox="0 0 16 16"
          >
            <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
          </svg>
        </div>
      </h1>
    </div>
  );
};

export default Headline;
