export const getElement = (target) => {
    if (typeof target === 'function') {
        return target();
    }
    if (typeof target === 'string') {
        return document.querySelector(target);
    }
    if (target instanceof Document) {
        return target;
    }
    if (target instanceof Window) {
        return target;
    }
    if (target instanceof Element) {
        return target;
    }
    return target.current;
};
