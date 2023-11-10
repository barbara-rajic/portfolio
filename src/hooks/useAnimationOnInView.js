import { useEffect } from 'react';

const useAnimationOnInView = (ref, options = {}) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.classList.add('animate__animated', 'animate__fadeInUp');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    const current = ref.current;
    if (current) {
      current.forEach((el) => {
        if (el) observer.observe(el);
      });
    }

    // Cleanup
    return () => {
      if (current) {
        current.forEach((el) => {
          if (el) observer.unobserve(el);
        });
      }
    };
  }, [ref, options]);
};

export default useAnimationOnInView;
