// app/fonts/fonts.js
import localFont from "next/font/local";

export const kaoly = localFont({
  src: [
    {
      path: "./kaoly.ttf",
      weight: "400",
      style: "normal",
    },
   
  ],
  variable: "--font-kaoly",
});

export const sorella = localFont({
  src: "./sorella.otf",
  variable: "--font-sorella",
  display: "swap",
});
