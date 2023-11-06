import { Montserrat, Magra, Signika } from "next/font/google";

export const montserrat = Montserrat({ subsets: ["latin"] });

export const signika = Signika({ subsets: ["latin"] });

export const magra = Magra({
    weight: ['400', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
  })