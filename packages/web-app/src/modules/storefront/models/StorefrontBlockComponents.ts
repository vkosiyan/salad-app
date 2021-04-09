import { StorefrontHeroItemProps, StorefrontImageProps, StorefrontRewardItemProps } from './index'

export interface StrapiBlock {
  __component: string
  id: number
  title: string
}

export interface StorefrontHeroBlockProps extends StrapiBlock {
  items: StorefrontHeroItemProps[]
}

export interface StorefrontRewardBlockProps extends StrapiBlock {
  buttons: { id: number; label: string; link: string }[]
  rewards: StorefrontRewardItemProps[]
}

export interface StorefrontContentBlockProps extends StrapiBlock {
  body: string
  color: 'red' | 'purple' | 'green' | 'cyan'
  image?: {
    id: number
    position?: 'left' | 'right' | 'top' | 'bottom'
    image: StorefrontImageProps
  }
}

export interface StorefrontBannerBlockProps extends StrapiBlock {
  body: string
  // color: 'orange' | 'purple' | 'yellow' | 'magenta' | 'cyan'
  color: 'red' | 'purple' | 'green' | 'cyan'
  button?: {
    id: number
    position?: 'left' | 'right' | 'top' | 'bottom'
  }
}

export enum StorefrontBlockComponent {
  // Banner = 'storefront.'
  Content = 'storefront.content-block',
  Hero = 'storefront.carousel-block',
  Reward = 'storefront.reward-list-block',
}
