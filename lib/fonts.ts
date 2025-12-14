import { Inter } from "next/font/google"
import localFont from "next/font/local"

export const inter = Inter({ subsets: ["latin"] })

export const dxGotha = localFont({
  src: "../public/dx-gotha-personal.otf",
  variable: "--font-dx-gotha",
  display: "swap",
})
