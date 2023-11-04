import { useCallback, useEffect, useRef } from 'react';

const useAnimationFrame = (callback, delay = 0) => {
  const requestRef = useRef();
  const previousTimeRef = useRef();
  const startTimeRef = useRef();

  const animate = useCallback(
    (time) => {
      if (!startTimeRef.current) {
        startTimeRef.current = time;
      }
      const elapsed = time - startTimeRef.current;

      if (elapsed > delay) {
        if (previousTimeRef.current) {
          const deltaTime = time - previousTimeRef.current;
          callback(deltaTime);
        }
        previousTimeRef.current = time;
      }

      requestRef.current = requestAnimationFrame(animate);
    },
    [callback, delay]
  );

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [animate]);
};

export default useAnimationFrame;
