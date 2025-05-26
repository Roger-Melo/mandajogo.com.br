import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const siteName = "MandaJogo"

export const siteDescription = "Comunidade de Troca de Jogos de Videogame"
