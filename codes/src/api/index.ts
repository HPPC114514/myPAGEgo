import type { SiteConfig, TextContent, Links } from '../types'

const BASE_PATH = '/yours'

export async function fetchConfig(): Promise<SiteConfig> {
  try {
    const response = await fetch(`${BASE_PATH}/config.json`)
    if (!response.ok) {
      throw new Error('Failed to fetch config')
    }
    return await response.json()
  } catch (error) {
    console.warn('Failed to load config.json, using defaults:', error)
    return {}
  }
}

export async function fetchText(): Promise<TextContent> {
  try {
    const response = await fetch(`${BASE_PATH}/text.json`)
    if (!response.ok) {
      throw new Error('Failed to fetch text')
    }
    const data = await response.json()
    return typeof data === 'string' ? { content: data } : data
  } catch (error) {
    console.warn('Failed to load text.json, using defaults:', error)
    return { content: '欢迎来到我的个人空间' }
  }
}

export async function fetchLinks(): Promise<Links> {
  try {
    const response = await fetch(`${BASE_PATH}/links.json`)
    if (!response.ok) {
      throw new Error('Failed to fetch links')
    }
    return await response.json()
  } catch (error) {
    console.warn('Failed to load links.json, using defaults:', error)
    return []
  }
}

export async function fetchAllConfig() {
  const [siteConfig, textContent, links] = await Promise.all([
    fetchConfig(),
    fetchText(),
    fetchLinks()
  ])
  return {
    siteConfig,
    textContent,
    links
  }
}
