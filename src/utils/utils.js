"use client";

export const animationCreate = () => {
  if (typeof window !== "undefined") {
    const WOW = require("wowjs").WOW;
    new WOW({ live: true }).init();
  }
};
