// utils/animationCreate.ts
export const animationCreate = async () => {
  if (typeof window !== "undefined") {
    const WOW = (await import("wowjs")).default; // Fix is here
    new WOW({ live: false }).init();
  }
};
