import { useEffect } from "react";

let lockCount = 0;

export const useLockBodyScroll = (locked = false) => {
    useEffect(() => {
        if (!locked) return;

        lockCount++;

        const originalOverflow = document.body.style.overflow;

        document.body.style.overflow = "hidden";

        return () => {
            lockCount--;

            if (lockCount === 0) {
                document.body.style.overflow = originalOverflow || "auto";
            }
        };
    }, [locked]);
};