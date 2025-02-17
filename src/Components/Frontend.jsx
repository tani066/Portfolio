import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedText = () => {
//   const typedRef = useRef(null);
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Front-end Developer",
        "Open Source Contributor",
        "Front-end Developer",
      ],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={el} />;
};

export default TypedText;
