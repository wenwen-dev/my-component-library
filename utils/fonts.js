import { Roboto, Inter, Roboto_Mono } from "next/font/google";

export const roboto = Roboto({
  weight: ['500'],
  style: ['normal'],
  subsets: ['latin'],
  display: "swap",
});

export const inter = Inter({
  subsets: ['latin'],
  display: "swap",
});

export const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: "swap",
});