import { useRef, useState, useCallback } from "react";

const useGrabScroll = () => {
    const itemsRef = useRef(null);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const [isDragging, setIsDragging] = useState(false);

    const handleMouseDown = useCallback((e) => {
        if (!itemsRef.current) return;

        // Mencegah default behavior
        e.preventDefault();
        e.stopPropagation();

        setIsDragging(false);

        setIsMouseDown(true);
        setStartX(e.pageX - itemsRef.current.offsetLeft);
        setScrollLeft(itemsRef.current.scrollLeft);
    }, []);
    const handleMouseLeave = (e) => {
        // Tambahkan pencegahan
        e.preventDefault();
        e.stopPropagation();
        setIsMouseDown(false);
    }
    const handleMouseUp = (e) => {
        // Tambahkan pencegahan
        e.preventDefault();
        e.stopPropagation();
        setIsMouseDown(false);
    }

    const handleClick = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        
        if (isDragging) {
            e.stopImmediatePropagation();
            return;
        }
    }, [isDragging]);

    const handleMouseMove = useCallback((e) => {
        if (!isMouseDown || !itemsRef.current) return;

        e.preventDefault();
        e.stopPropagation();

        const x = e.pageX - itemsRef.current.offsetLeft;
        const walk = (x - startX) * 2;

        if (Math.abs(walk) > 5) {
            setIsDragging(true);
        }

        itemsRef.current.scrollLeft = scrollLeft - walk;
    }, [isMouseDown, startX, scrollLeft]);

    return {
        itemsRef,
        handleMouseDown,
        handleClick,
        handleMouseLeave,
        handleMouseUp,
        handleMouseMove
    };
};

export default useGrabScroll;