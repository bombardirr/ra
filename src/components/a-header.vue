<template>
  <header class="a-header">
    <!-- Logo -->
    <div class="a-header__row a-header__row--logo">
      <div class="a-header__logo">
        <img :src="logoMain" :alt="logoAlt" class="a-header__logo-image" />
      </div>
    </div>

    <!-- Sections -->
    <div class="a-header__row a-header__row--sections">
      <div class="a-header__search">
        <input type="text" :placeholder="searchPlaceholder" class="a-header__search-input" />
        <q-icon :name="searchIcon" class="a-header__search-icon" />
      </div>

      <div class="a-header__row--sections-right">
        <div class="a-header__social">
          <div class="a-header__social-together">
            <span class="a-header__social-text">{{ socialText }}</span>
            <div class="a-header__social-icons">
              <img
                v-for="icon in socialIcons"
                :key="icon.name"
                :src="icon.icon"
                alt="img"
                class="a-header__social-icon"
              />
            </div>
          </div>
          <div class="a-header__date">
            {{ currentDate }}
          </div>

          <div class="a-header__social-notify">
            <img src="../assets/icons/notify-icon.svg" alt="Notify" />
          </div>
        </div>

        <div class="a-header__actions">
          <q-btn
            v-for="action in actionIcons"
            :key="action.name"
            :round="action.round"
            flat
            class="a-header__action-icon"
          >
            <img :src="action.icon" alt="action" />
          </q-btn>
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <div class="a-header__row a-header__row--nav">
      <nav class="a-header__nav">
        <template v-for="(link, index) in navLinks" :key="link.text">
          <a :href="link.href" class="a-header__nav-link">
            {{ link.text }}
          </a>
          <div v-if="index < navLinks.length - 1" class="a-header__nav-separator">
            <div class="a-header__nav-separator-line" />
          </div>
        </template>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import logoMain from '../assets/images/logo_main.svg'
import telegramIcon from '../assets/icons/tg-icon.svg'
import actionUserIcon from '../assets/icons/action-user-icon.svg'
import actionHelpIcon from '../assets/icons/action-help-icon.svg'
import actionSettingsIcon from '../assets/icons/action-settings-icon.svg'

const logoAlt = 'Логотип'
const searchPlaceholder = 'Поиск ...'
const searchIcon = 'search'
const socialText = 'Мы в сети!'

const socialIcons = [
  { icon: telegramIcon, name: 'telegram' },
  { icon: telegramIcon, name: 'vk' },
  { icon: telegramIcon, name: 'rosatom' },
]

const actionIcons = [
  { icon: actionUserIcon, name: 'user', round: true },
  { icon: actionHelpIcon, name: 'help', round: true },
  { icon: actionSettingsIcon, name: 'settings', round: true },
]

const navLinks = [
  { text: 'НОВОСТИ', href: '#' },
  { text: 'СЕРВИСЫ', href: '#' },
  { text: 'ДЕЯТЕЛЬНОСТЬ', href: '#' },
  { text: 'КОММУНИКАЦИИ', href: '#' },
  { text: 'ПРОФСОЮЗ', href: '#' },
  { text: 'КАРТА САЙТА', href: '#' },
]

// Current date
const currentDate = ref('')

onMounted(() => {
  const date = new Date()
  const options = {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }
  currentDate.value = date.toLocaleDateString('ru-RU', options)
})
</script>

<style>
.a-header {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: #fff;
  padding: 31px 0 54px 56px;
}

.a-header__row {
  display: flex;
  align-items: center;
  width: 100%;
}

.a-header__row--logo {
  padding: 0 0 18px 0;
}

.a-header__logo {
  display: flex;
  align-items: center;
}

.a-header__logo-image {
  height: 40px;
}

.a-header__row--sections {
  justify-content: space-between;
}

.a-header__row--sections-right {
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 30px;
  width: 100%;
  font-size: 15px;
  font-style: italic;
  color: var(--gray-primary);
}

.a-header__search {
  position: relative;
  width: 100%;
}

.a-header__search-input {
  width: 100%;
  height: 30px;
  padding: 8px 30px 8px 12px;
  border: 2px solid var(--gray-primary);
  border-radius: 7px;
  font-size: 15px;
  font-style: italic;
}

.a-header__search-icon {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--blue-light);
  font-size: 23px;
  cursor: pointer;
}

.a-header__social {
  display: flex;
  align-items: center;
  gap: 6rem;
}

.a-header__social-together {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.a-header__social-text {
  font-size: 14px;
  color: var(--gray-primary);
}

.a-header__social-icons {
  display: flex;
  align-items: center;
}

.a-header__social-icon {
  width: 23px;
  height: 23px;
  margin-left: -6px;
  background-color: #fff;
  cursor: pointer;
}

.a-header__date {
  font-size: 14px;
  font-style: normal;
  color: var(--gray-primary);
}

.a-header__social-notify {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 23px;
  cursor: pointer;
  width: 23px;
  height: 23px;
}

.a-header__social-notify img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.a-header__actions {
  display: flex;
  align-items: center;
  gap: 30px;
}

.a-header__action-icon {
  width: 40px;
  height: 40px;
  min-width: 40px;
  min-height: 40px;
}

.a-header__row--nav {
  margin-top: 35px;
  /* padding: 10px 20px; */
}

.a-header__nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  width: 100%;
  font-size: 25px;
  font-weight: 400;
}

.a-header__nav-link {
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
}

.a-header__nav-separator {
  width: 4px;
  height: 100%;
}

.a-header__nav-separator-line {
  width: 4px;
  height: 25px;
  background-color: var(--blue-dark);
}
</style>
