// temp
export type GameOwner = {
  name: string
  username: string
  imageAvatar: string
  isVerified: boolean
  supplyName: string | null
  imageCover: string | null
  supplyPermalink: string | null
  bundlePermalink: string | null
  scoreGeneral: number
  exchangesCount: number
  enumLevel: number
  enumLevelDesc: string | null
  conditionMedia: number
  conditionMediaDesc: string | null
  conditionBooklet: number
  conditionBookletDesc: string | null
  conditionBox: number
  conditionBoxDesc: string | null
  enumVersion: number
  enumVersionDesc: string | null
  enumRegion: number
  enumRegionDesc: string | null
  notes: string | null
  city: string
  state: string
}

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
