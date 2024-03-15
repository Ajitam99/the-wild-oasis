import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapture = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }

      document.addEventListener("click", handleClick, listenCapture);
      /* Adding true makes it so the event is captured in the  CAPTURING and not bubbleing phase. Makes it so the modal dosnt immediately close when clicked on.*/

      return () =>
        document.removeEventListener("click", handleClick, listenCapture);
    },
    [handler, listenCapture]
  );
  return ref;
}
