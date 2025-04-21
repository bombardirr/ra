<template>
  <div class="a-sidebar">
    <!-- City selection -->
    <div class="a-sidebar__section a-sidebar__cities">
      <div class="a-sidebar__header">
        <span class="a-sidebar__title">Площадка</span>
        <span @click="handleResetLocations" class="a-sidebar__reset">сбросить</span>
      </div>
      <q-select
        class="a-sidebar__select"
        v-model="selectedLocation"
        :options="locations"
        :dropdown-icon="dropdownIcon"
      />
    </div>

    <!-- Calendar -->
    <div class="a-sidebar__section a-sidebar__calendar">
      <div class="a-sidebar__header">
        <span class="a-sidebar__title">Дата</span>
        <span class="a-sidebar__reset">сбросить</span>
      </div>
      <q-date v-model="selectedDate" flat square minimal />
    </div>

    <!-- Parameters -->
    <div class="a-sidebar__section a-sidebar__parameters">
      <div class="a-sidebar__header">
        <span class="a-sidebar__title">Помещения</span>
        <span class="a-sidebar__reset" @click="handleResetAll">сбросить всё</span>
      </div>

      <template v-for="(select, index) in selects" :key="index">
        <div class="a-sidebar__select-wrapper">
          <div class="a-sidebar__select-reset">
            <img :src="closeMiniIcon" alt="close icon" />
          </div>
          <q-select
            class="a-sidebar__select"
            v-model="select.model"
            :options="select.options"
            :dropdown-icon="dropdownIcon"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import chevronIcon from '../assets/icons/chevron-icon.svg'
import closeMiniIcon from '../assets/icons/close-mini-icon.svg'
import { date } from 'quasar'
import { useRoomData } from 'src/composables/useRoomData'

// Data for filters
const { selects, loadInitialData, handleResetAll } = useRoomData()

onMounted(() => {
  loadInitialData()
})

const { formatDate } = date

const dropdownIcon = computed(() => `img:${chevronIcon}`)

// Location
const selectedLocation = ref('Обнинск')
const locations = ['Обнинск', 'Москва', 'С.-Петербург', 'Нововоронеж']
const handleResetLocations = () => {
  selectedLocation.value = 'Обнинск'
}

// Calendar
const currentDate = new Date()
const selectedDate = ref(formatDate(currentDate, 'YYYY/MM/DD'))
</script>

<style>
.a-sidebar {
  background: var(--blue-lighter);
  height: 100%;
}

.a-sidebar__section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 33px 23px;
}

.a-sidebar__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: var(--gray-primary);
}

.a-sidebar__title {
  font-size: 15px;
}

.a-sidebar__reset {
  font-size: 13px;
  cursor: pointer;
}

.a-sidebar__select {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border-radius: 20px;
  height: 35px;
  width: 100%;
}

.q-menu {
  left: 290px !important;
  min-width: 200px;
}

.a-sidebar__select .q-field__control:before {
  border-bottom: none;
}

.a-sidebar__select .q-field__control {
  padding: 0 12px 0 34px;
  height: 35px;
  color: transparent;
}

.a-sidebar__select .q-field__control,
.q-field--auto-height .q-field__native {
  min-height: 35px;
}

.a-sidebar__select .q-field__append {
  height: 35px;
}

.a-sidebar__select img {
  width: 10px;
  height: 8px;
}

.a-sidebar__select .q-field--focused .q-field__append img {
  transform: rotate(180deg);
}

.a-sidebar__calendar {
  border-top: 1px solid var(--blue-lighter-alt-dark);
  border-bottom: 1px solid var(--blue-lighter-alt-dark);
  padding-top: 22px;
  padding-bottom: 17px;
}

.q-date__calendar-days {
  background: #fff;
}

.q-date__calendar-days .q-date__calendar-item {
  border: 1px dotted var(--gray-outline);
  width: 43px !important;
  height: 40px !important;
}

.q-date__calendar-weekdays {
  height: 19px;
  background-color: var(--blue-lighter-alt-light);
}

.q-date__view {
  background-color: var(--blue-lighter);
}

.q-date__navigation,
.q-date__calendar-days-container {
  color: var(--gray-calendar);
}

.q-date__navigation > div:nth-child(2) button .block,
.q-date__navigation > div:nth-child(5) button .block {
  font-size: 17px;
}

.bg-primary {
  background-color: var(--purple-light) !important;
}

.q-date__today {
  color: black !important;
}

.a-sidebar__parameters {
  position: relative;
  padding-top: 22px;
}

.a-sidebar__select-wrapper {
  position: relative;
  width: 100%;
}

.a-sidebar__select-reset {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 16px;
  cursor: pointer;
  pointer-events: none;
}
</style>
