export const themeSelector = () => {
  if (typeof window !== "undefined") {
    const useDark = window.matchMedia("(prefers-color-scheme: dark)");
    if (useDark.media === "(prefers-color-scheme: dark)") {
      return "dark";
    } else {
      return "light";
    }
  } else {
    return "light";
  }
};
