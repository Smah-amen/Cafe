// import { gsap } from "gsap";
import "./TransitionStyle.css";
export default function Transition() {
  return (
    <div className="fixed top-0 left-0 w-[100vw] h-[100vh] flex flex-col z-50 pointer-events-none">
      {[
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5],
      ].map((item, index) => (
        <div key={index} className={"flex flex-1 pt-row-" + index}>
          {item.map((item, index) => (
            <div
              key={index}
              className="ptr-block flex-1 bg-[#a37745] scale-y-[1] will-change-transform"
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
}
