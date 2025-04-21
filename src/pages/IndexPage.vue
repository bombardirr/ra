<template>
  <q-page class="table">
    <div class="table__container">
      <div class="table__header">
        <div class="table__header-left">
          <div class="table__header-left_icon">
            <img :src="tableHeaderIcon" alt="Table header icon" />
          </div>
          <div class="table__header-left_items">
            <template v-for="item in tableHeaderItems" :key="item.id">
              <div class="top__button">
                <img :src="item.icon" alt="Table header icon" />
                <div>{{ item.label }}</div>
              </div>
            </template>
          </div>
        </div>
        <div class="table__header-right">
          <div class="search">
            <input type="text" :placeholder="searchPlaceholder" class="search-input" />
            <q-icon :name="searchIcon" class="search-icon" />
          </div>
        </div>
      </div>
      <div class="table__body">
        <div class="table__body-top">
          <div class="table__body-top_left">
            <div class="body__top-left_icon">
              <img :src="bodyTopLeftIcon" alt="Body top left icon" />
            </div>
            <div class="body__top-left_time">
              <img :src="bodyTopLeftStart" alt="Body top left Start" />
            </div>
            <div class="body__top-left_time">
              <img :src="bodyTopLeftEnd" alt="Body top left End" />
            </div>
          </div>
          <div class="table__body-top_middle">
            <div class="body__top-middle_arrows">
              <img :src="chevronIcon" alt="Chevron left" />
              <img :src="chevronIcon" alt="Chevron right" />
            </div>
            <div class="body__top-middle_week">06-10 Апрель</div>
          </div>
          <div class="table__body-top_right">
            <template v-for="selector in tableHeaderRangeSelectionItems" :key="selector.id">
              <div class="selector">{{ selector.label }}</div>
            </template>
          </div>
        </div>
        <div class="table__body-bottom">
          <a-table />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import tableHeaderIcon from '../assets/icons/table-header-icon.svg'
import tableHeaderItemAIcon from '../assets/icons/table-header-item-a-icon.svg'
import tableHeaderItemBIcon from '../assets/icons/table-header-item-b-icon.svg'
import tableHeaderItemCIcon from '../assets/icons/table-header-item-c-icon.svg'
import bodyTopLeftIcon from '../assets/icons/body-top-left-icon.svg'
import bodyTopLeftStart from '../assets/icons/body-top-left-start.svg'
import bodyTopLeftEnd from '../assets/icons/body-top-left-end.svg'
import chevronIcon from '../assets/icons/chevron-icon.svg'
import ATable from 'components/a-table.vue'

const searchIcon = 'search'
const searchPlaceholder = 'Найти помещение'
const tableHeaderItems = [
  { id: 1, icon: tableHeaderItemAIcon, label: 'Забронировать' },
  { id: 2, icon: tableHeaderItemBIcon, label: 'Бронирования' },
  { id: 3, icon: tableHeaderItemCIcon, label: 'Справочники' },
]

const tableHeaderRangeSelectionItems = [
  { id: 1, label: 'день' },
  { id: 2, label: 'неделя' },
  { id: 3, label: 'месяц' },
]
</script>

<style>
.table {
  padding: 33px 50px;
}

.table__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 0;
}

.table__header-left {
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 75px;
}

.table__header-left_icon {
  width: 21px;
  height: 14px;
}

.table__header-left_items {
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 18px;
}

.top__button {
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 17px;
  border-radius: 25px;
  padding: 8px 13px;
  border: 1px solid var(--gray-primary);
  color: var(--gray-primary);
}

.top__button:nth-child(1) {
  border: 1px solid var(--blue-dark);
  color: var(--blue-dark);
}

.top__button img {
  width: 15px;
  height: 15px;
}

.search {
  position: relative;
  width: 550px;
}

.search-input {
  width: 100%;
  height: 30px;
  padding: 8px 30px 8px 12px;
  border: 2px solid var(--gray-primary);
  border-radius: 7px;
  font-size: 15px;
  font-style: italic;
}

.search-input::placeholder {
  color: var(--gray-primary);
}

.search-icon {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--blue-light);
  font-size: 23px;
  cursor: pointer;
}

.table__body-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--blue-lighter);
  padding: 11px 31px;
}

.table__body-top_left {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 17px;
}

.body__top-left_icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.body__top-left_time {
  background: #fff;
  border-radius: 25px;
  width: 127px;
  height: 23px;
}

.table__body-top_middle,
.body__top-middle_arrows {
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 22px;
  color: var(--blue-light);
  font-size: 17px;
}

.body__top-middle_arrows img:nth-child(1) {
  transform: rotate(180deg);
}

.body__top-middle_arrows img {
  width: 12px;
  height: 10px;
}

.table__body-top_right {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  width: 234px;
  height: 28px;
  color: var(--blue-lighter-alt-darker);
}

.selector {
  border: 1px solid var(--blue-lighter-alt-darker);
  border-radius: 25px;
  padding: 0 14px;
  font-size: 17px;
}

.selector:nth-child(2) {
  border: 1px solid var(--blue-special);
  color: var(--blue-special);
}

.table__body-bottom {
  height: auto;
}
</style>
