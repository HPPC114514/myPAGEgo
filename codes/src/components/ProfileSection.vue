<template>
  <div class="profile-section">
    <div class="avatar-container">
      <img 
        v-if="avatarUrl" 
        :src="avatarUrl" 
        alt="Avatar" 
        class="avatar"
        loading="lazy"
      />
      <div v-else class="avatar avatar-placeholder">
        <span>👤</span>
      </div>
    </div>
    <div class="text-content" v-if="textContent">
      <p v-html="formattedText"></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  avatarUrl?: string
  textContent?: string
}

const props = defineProps<Props>()

const formattedText = computed(() => {
  if (!props.textContent) return ''
  return props.textContent.replace(/\n/g, '<br>')
})
</script>

<style scoped>
.profile-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  gap: 1.5rem;
}

.avatar-container {
  width: 120px;
  height: 120px;
}

.avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.avatar-placeholder {
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: white;
}

.text-content {
  text-align: center;
  max-width: 600px;
  color: #333;
  line-height: 1.6;
}

.text-content p {
  margin: 0;
  white-space: pre-wrap;
}

@media (max-width: 600px) {
  .avatar-container {
    width: 80px;
    height: 80px;
  }
  
  .avatar-placeholder {
    font-size: 2rem;
  }
  
  .text-content {
    font-size: 0.9rem;
  }
}

@media (max-width: 300px) {
  .avatar-container {
    width: 60px;
    height: 60px;
  }
  
  .text-content {
    font-size: 0.8rem;
  }
}
</style>
