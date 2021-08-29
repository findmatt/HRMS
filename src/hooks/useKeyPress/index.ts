import { useEffect } from 'react';
/**
 * useKeyPress
 * @param {string} key - the name of the key to respond to, compared against event.key
 * @param {function} action - the action to perform on key press
 */
const useKeypress = (key: string, action: (evt: KeyboardEvent) => void): void => {
    useEffect(() => {
        function onKeyup(e: KeyboardEvent) {
            if (e.key === key) action(e);
        }
        window.addEventListener('keyup', onKeyup);
        return () => window.removeEventListener('keyup', onKeyup);
    }, [key, action]);
};
export default useKeypress;
