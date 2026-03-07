<template>
  <div class="links-section">
    <div class="links-container">
      <a
        v-for="(link, index) in links"
        :key="index"
        :href="link.url"
        :target="link.target || '_blank'"
        rel="noopener noreferrer"
        class="link-item"
      >
        <div class="link-icon">
          <img 
            v-if="link.icon && isValidUrl(link.icon)" 
            :src="link.icon" 
            :alt="link.title"
            loading="lazy"
          />
          <span v-else-if="link.icon">{{ link.icon }}</span>
          <span v-else>🔗</span>
        </div>
        <span class="link-title">{{ link.title }}</span>
        <span class="link-arrow">→</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { LinkItem } from '../types'

interface Props {
  links: LinkItem[]
}

defineProps<Props>()

const isValidUrl = (str: string) => {
  try {
    new URL(str)
    return true
  } catch {
    return false
  }
}
</script>

<style scoped>
.links-section {
  padding: 2rem 1rem 4rem;
}

.links-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto;
}

.link-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: white;
  border-radius: 12px;
  text-decoration: none;
  color: #333;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.link-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  background: #f8f9fa;
}

.link-icon {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
}

.link-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.link-title {
  flex: 1;
  font-weight: 500;
  font-size: 1rem;
}

.link-arrow {
  color: #999;
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.link-item:hover .link-arrow {
  transform: translateX(4px);
  color: #667eea;
}

@media (max-width: 600px) {
  .link-item {
    padding: 0.875rem 1.25rem;
  }
  
  .link-icon {
    width: 28px;
    height: 28px;
    font-size: 1.25rem;
  }
  
  .link-title {
    font-size: 0.95rem;
  }
}

@media (max-width: 300px) {
  .link-item {
    padding: 0.75rem 1rem;
  }
  
  .link-icon {
    width: 24px;
    height: 24px;
    font-size: 1rem;
  }
  
  .link-title {
    font-size: 0.875rem;
  }
}
</style>
