export { type GameOwner } from "@prisma/client"

// temp
export type Game = {
  title: string
  description: string
  slug: string
  platformSlug: string
  platformName: string
  genre: string
  rating: number
  urlOfficialSite: string
  studio: string
  distributor: string
  ratingEsbr: null | string
  urlVideo: string
  releasedOn: string
  imageCover: string
  wishes: number
  wishes30days: number
  offers: number
  offers30days: number
  urlIgn: string
  urlMetacritic: string
  urlGamespot: string
  scoreIgn: number
  scoreGamespot: number
  scoreMetacritic: number
  scoreMandaJogo: number
  isCollection: boolean
  isExchanging: boolean
  isWishlist: boolean
}
