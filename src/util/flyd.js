export const ap = (f, s) => () => s(f(s()))
