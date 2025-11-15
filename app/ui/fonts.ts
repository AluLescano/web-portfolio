import { Outfit, Fira_Code, Comic_Neue } from "next/font/google"

export const outfit = Outfit({
  subsets: ["latin"],
})

export const fira = Fira_Code({
  subsets: ["latin"],
})

export const comicNeue = Comic_Neue({
  weight: "300",
  style: "italic",
})
