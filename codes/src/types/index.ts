export interface SiteConfig {
  title?: string
  description?: string
  avatarUrl?: string
  backgroundUrl?: string
  faviconUrl?: string
}

export interface TextContent {
  content: string
}

export interface LinkItem {
  title: string
  url: string
  icon?: string
  target?: '_blank' | '_self'
}

export type Links = LinkItem[]

export interface AllConfig {
  siteConfig: SiteConfig
  textContent: TextContent
  links: Links
}
