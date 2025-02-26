import { useRef, useState, useEffect } from "react";

const useButtonScroll = () => {
    const containerRef = useRef(null);
    const [currentScroll, setCurrentScroll] = useState(0);

    const scrollLeft = () => {
        if (containerRef.current) {
            const container = containerRef.current;
            const scrollAmount = container.clientWidth;
            container.scrollLeft -= scrollAmount;
        }
    };

    const scrollRight = () => {
        if (containerRef.current) {
            const container = containerRef.current;
            const scrollAmount = container.clientWidth;
            container.scrollLeft += scrollAmount;
        }
    };

    useEffect(() => {
        if (containerRef.current) {
            const container = containerRef.current;

            const updateScroll = () => {
                setCurrentScroll(container.scrollLeft);
            };

            container.addEventListener("scroll", updateScroll);

            return () => {
                container.removeEventListener("scroll", updateScroll);
            };
        }
    }, []);

    return {
        containerRef,
        scrollLeft,
        scrollRight,
        currentScroll
    };
}

export default useButtonScroll;