<template>
  <q-layout view="hHh lpR fFf">
    <a-header />
    <q-page-container>
      <div class="main-layout">
        <aside class="main-layout__sidebar">
          <a-sidebar />
        </aside>
        <main class="main-layout__content">
          <router-view />
        </main>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import AHeader from '../components/a-header.vue'
import ASidebar from 'components/a-sidebar.vue'
</script>

<style>
.main-layout {
  display: flex;
  min-height: 100vh;
  border-top: 1px solid var(--gray-primary);
}

.main-layout__sidebar {
  width: 330px;
  border-right: 1px solid #eee;
}

.main-layout__content {
  flex: 1;
}
</style>
