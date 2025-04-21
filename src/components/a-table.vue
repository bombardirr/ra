<template>
  <div class="a-table">
    <q-markup-table class="a-table__data" flat separator="cell" bordered>
      <thead>
        <tr>
          <template v-for="column in columns" :key="column.name">
            <th>
              <div class="a-table__cell">
                <div>{{ column.labelA }}</div>
                <div v-if="column.labelB">{{ column.labelB }}</div>
              </div>
            </th>
          </template>
        </tr>
      </thead>
      <tbody>
        <tr v-for="room in data" :key="room.id">
          <td class="place">
            {{ room.room_number }} /
            <div class="place__capacity">
              <div>вместимость:</div>
              {{ room.place }}
              <div>чел.</div>
            </div>
          </td>
          <td
            v-for="day in weekDays"
            :key="day"
            :style="{ backgroundColor: getDayColor(room, day), cursor: 'pointer' }"
            @click="handleDayClick(room, day)"
          />
        </tr>
      </tbody>
    </q-markup-table>
    <div class="pagination">
      <img :src="paginationImage" alt="Pagination image" />
    </div>
  </div>

  <a-modal-book
    v-model:show="showBookModal"
    :room="selectedRoom"
    :timeRange="selectedTimeRange"
    :selectedDate
  />
  <a-modal-booked
    v-model:show="showBookedModal"
    :room="selectedRoom"
    :selected-day="selectedDay"
    :is-fully-occupied="isFullyOccupiedDay"
    @open-book-modal="handleOpenBookModal"
  />
</template>

<script setup>
import { mockApi } from 'src/api/requests.js'
import { onMounted, ref } from 'vue'
import AModalBook from 'components/a-modal-book.vue'
import AModalBooked from 'components/a-modal-booked.vue'
import paginationImage from 'src/assets/images/pagination.svg'
import { useFormatDate } from 'src/composables/useFormatDate'

const { formatDate } = useFormatDate()

const data = ref(null)
const showBookModal = ref(false)
const showBookedModal = ref(false)
const selectedRoom = ref(null)
const selectedTimeRange = ref(null)
const selectedDate = ref(null)
const selectedDay = ref('')
const isFullyOccupiedDay = ref(false)

const mondayDate = ref(new Date('2025-04-07'))

const getRealDateFromWeekDay = (day) => {
  const index = weekDays.indexOf(day.toLowerCase())
  if (index === -1 || !mondayDate.value) return null

  const resultDate = new Date(mondayDate.value)
  resultDate.setDate(resultDate.getDate() + index)

  return formatDate(resultDate)
}

const handleDayClick = (room, day) => {
  selectedRoom.value = room
  selectedDay.value = day
  selectedDate.value = getRealDateFromWeekDay(day)

  if (room.bookedDays.includes(day)) {
    // Booked day (red)
    isFullyOccupiedDay.value = true
    showBookedModal.value = true
  } else if (room.partialDays.includes(day)) {
    // Partially booked day (yellow)
    isFullyOccupiedDay.value = false
    showBookedModal.value = true
  } else {
    // Free day (green)
    showBookModal.value = true
  }
}

const handleOpenBookModal = ({ room, timeRange, date }) => {
  selectedRoom.value = room
  selectedTimeRange.value = timeRange
  selectedDate.value = date
  showBookModal.value = true
}

const fetchSchedule = async () => {
  try {
    data.value = await mockApi.getSchedule()
  } catch (error) {
    console.log('Ошибка при загрузке расписания:', error)
  }
}

onMounted(() => {
  fetchSchedule()
})

const columns = [
  { labelA: 'помещение', labelB: '' },
  { labelA: 'ПН', labelB: '07' },
  { labelA: 'BT', labelB: '08' },
  { labelA: 'СР', labelB: '09' },
  { labelA: 'ЧТ', labelB: '10' },
  { labelA: 'ПТ', labelB: '11' },
  { labelA: 'СБ', labelB: '12' },
  { labelA: 'ВС', labelB: '13' },
]

const weekDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

// Cell color selection
const getDayColor = (room, day) => {
  if (room.bookedDays.includes(day)) return '#ff4a0580' // Red
  if (room.partialDays.includes(day)) return '#f0a60096' // Yellow
  return '#a5ed0061' // Green
}
</script>

<style>
.a-table {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 30px;
  width: 100%;
  min-height: 100%;
}

.a-table__data {
  width: 100%;
}

.q-table {
  border-spacing: 5px 3px;
}

.pagination img {
  width: 315px;
  height: 26px;
  cursor: pointer;
}

.place,
.place__capacity {
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 8px;
  color: var(--gray-calendar);
  font-size: 17px;
}

.place__capacity {
  font-size: 17px;
}

thead {
  tr {
    color: var(--gray-table);

    th {
      font-size: 18px !important;
    }
  }
}

.a-table__cell {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 38px;
}

tbody {
  td {
    width: 450px;
  }
}
</style>
