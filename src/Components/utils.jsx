
import { useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";

export const useInViewTrigger = (options = {}) => {
    const ref = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0.2, ...options }
        );

        const el = ref.current;
        if (el) observer.observe(el);

        return () => {
            if (el) observer.unobserve(el);
        };
    }, [options]);

    return [ref, isInView];
};

export const useCountUp = (end, start = 0, duration = 1) => {
    const [value, setValue] = useState(start);

    useEffect(() => {
        const controls = animate(start, end, {
            duration,
            onUpdate(val) {
                setValue(Math.floor(val));
            },
        });

        return () => controls.stop();
    }, [end, start, duration]);

    return value;
};
