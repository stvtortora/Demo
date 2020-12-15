import { useEffect } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
export const useOutsideAlerter = (ref, handler, getParentRef) => {

    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        const handleClickOutside = (event) => {
            event.preventDefault();
            if (ref.current && !ref.current.contains(event.target)) {
                if (getParentRef) {
                    let elem = getParentRef();
                    if (!elem.current.contains(event.target)) {
                        handler();
                    }
                } else {
                    handler();
                }
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}