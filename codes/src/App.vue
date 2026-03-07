<template>
  <div class="app" :style="backgroundStyle">
    <div class="container">
      <ProfileSection 
        v-if="configLoaded"
        :avatar-url="siteConfig.avatarUrl" 
        :text-content="textContent.content" 
      />
      <LinksSection 
        v-if="configLoaded"
        :links="links" 
      />
      <div v-else class="loading">
        <span>加载中...</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { fetchAllConfig } from './api'
import type { AllConfig } from './types'
import ProfileSection from './components/ProfileSection.vue'
import LinksSection from './components/LinksSection.vue'

const configData = ref<AllConfig | null>(null)
const configLoaded = ref(false)

const siteConfig = computed(() => configData.value?.siteConfig || {})
const textContent = computed(() => configData.value?.textContent || { content: '' })
const links = computed(() => configData.value?.links || [])

const backgroundStyle = computed(() => {
  if (siteConfig.value.backgroundUrl) {
    return {
      backgroundImage: `url(${siteConfig.value.backgroundUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }
  }
  return {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  }
})

onMounted(async () => {
  configData.value = await fetchAllConfig()
  configLoaded.value = true
  
  if (siteConfig.value.title) {
    document.title = siteConfig.value.title
  }
  
  if (siteConfig.value.description) {
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute('content', siteConfig.value.description)
    }
  }
  
  if (siteConfig.value.faviconUrl) {
    const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement
    if (favicon) {
      favicon.href = siteConfig.value.faviconUrl
    }
  }
})
</script>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
}

.container {
  width: 100%;
  max-width: 800px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
}

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  font-size: 1.2rem;
  color: #666;
}

@media (max-width: 600px) {
  .app {
    padding: 1rem 0.75rem;
  }
  
  .container {
    border-radius: 16px;
  }
}

@media (max-width: 300px) {
  .app {
    padding: 0.5rem 0.5rem;
  }
  
  .container {
    border-radius: 12px;
  }
}
</style>
