import { useEffect, RefObject } from 'react';

const useClickOutside = <T extends HTMLElement>(
  ref: RefObject<T>,
  callback: () => void,
  ignoreRefs: RefObject<HTMLElement>[]
) => {
  const handleClickOutside = (e: MouseEvent) => {
    let clickedInsideIgnoreRef = false;

    for (const ignoreRef of ignoreRefs) {
      if (ignoreRef.current && ignoreRef.current.contains(e.target as Node)) {
        clickedInsideIgnoreRef = true;
        break;
      }
    }

    if (ref.current && !ref.current.contains(e.target as Node) && !clickedInsideIgnoreRef) {
      callback();
    }
  };

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      if (ref.current && ref.current.contains(e.target as Node)) {
        return;
      }
      handleClickOutside(e);
    };

    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [ref]);
};

export default useClickOutside;
