export type Platform = {
  name: string
  slug: string
  company: string
}

export type NewReleasedGame = {
  id: number
  title: string
  imageCover: string
  slug: string
  releasedOn: string
  platforms: Platform[]
  description: string
}

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

export type GameOwner = {
  id: string
  createdAt: string
  name: string
  username: string
  imageAvatar: string
  isVerified: boolean
  supplyName: null
  imageCover: null
  supplyPermalink: null
  bundlePermalink: null
  scoreGeneral: number
  exchangesCount: number
  enumLevel: number
  enumLevelDesc: null
  conditionMedia: number
  conditionMediaDesc: null
  conditionBooklet: number
  conditionBookletDesc: null
  conditionBox: number
  conditionBoxDesc: null
  enumVersion: number
  enumVersionDesc: null
  enumRegion: number
  enumRegionDesc: null
  notes: null
  city: string
  state: string
}
