<template>
  <q-dialog class="modal-occupied" :model-value="show" @update:model-value="updateModel">
    <q-card>
      <q-card-section class="modal-occupied__header">
        <div>
          <img :src="modalRoomIcon" alt="Room icon" />
        </div>
        <div>Аудитория {{ room.room_number }}</div>
        <div>
          <span>вместимость:</span> <span>{{ room.place }}</span> <span>чел.</span>
        </div>
        <q-btn class="close" icon="close" flat round dense @click="close" />
      </q-card-section>

      <q-card-section>
        <!-- Timeline -->
        <div class="time-slots-container">
          <div class="time-slots">
            <div
              v-for="(slot, index) in timeSlots"
              :key="index"
              class="time-slot"
              :class="{
                occupied: slot.status === 'occupied',
                free: slot.status === 'free',
              }"
              :style="{ width: slot.width + '%' }"
              @mouseover="hoveredSlot = slot"
              @mouseleave="hoveredSlot = null"
              @click="slot.status === 'free' ? bookModalOpen(slot) : null"
            >
              <q-tooltip v-if="hoveredSlot === slot">
                {{ slot.tooltip }}
              </q-tooltip>
            </div>
          </div>
        </div>

        <!-- Table of bookings -->
        <q-markup-table flat separator="cell" class="bookings-table">
          <thead>
            <tr class="bookings-table__header">
              <th v-for="heading in bookingTableHeaderItems" :key="heading.label" class="text-left">
                {{ heading.label }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="booking in dayBookings" :key="booking.id">
              <td>{{ formatBookingTime(booking.start, booking.end) }}</td>
              <td>{{ booking.eventType }}</td>
              <td>{{ booking.title }}</td>
              <td>
                <div class="user-info">
                  {{ booking.user.fullname }}
                </div>
              </td>
              <td>
                <q-badge :color="booking.requestStatus === 'Принято' ? 'positive' : 'warning'">
                  {{ booking.requestStatus }}
                </q-badge>
              </td>
            </tr>
          </tbody>
        </q-markup-table>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import modalRoomIcon from 'src/assets/icons/modal-room-icon.svg'
import { useFormatDate } from 'src/composables/useFormatDate'

const { formatDate } = useFormatDate()

const props = defineProps({
  show: Boolean,
  room: [Object, String],
  selectedDay: String,
  isFullyOccupied: Boolean,
})

const selectedDate = ref('')

const emit = defineEmits(['update:show', 'openBookModal'])

const bookModalOpen = (slot) => {
  emit('update:show', false)

  emit('openBookModal', {
    room: props.room,
    timeRange: slot.tooltip.match(/\d{2}:\d{2}-\d{2}:\d{2}/)[0],
    date: selectedDate.value,
  })
}

const hoveredSlot = ref(null)

const close = () => {
  emit('update:show', false)
}

const updateModel = (val) => {
  emit('update:show', val)
}

const selectedDayLabel = computed(() => {
  const daysMap = {
    monday: 'Понедельник',
    tuesday: 'Вторник',
    wednesday: 'Среда',
    thursday: 'Четверг',
    friday: 'Пятница',
    saturday: 'Суббота',
    sunday: 'Воскресенье',
  }
  return daysMap[props.selectedDay] || props.selectedDay
})

// Selected day bookings
const dayBookings = computed(() => {
  return props.room.booked
    .filter((booking) => {
      const bookingDate = new Date(booking.start)

      const bookingDay = [
        'sunday',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
      ][bookingDate.getDay()]
      return bookingDay === props.selectedDay
    })
    .sort((a, b) => new Date(a.start) - new Date(b.start))
})

const timeSlots = computed(() => {
  if (props.isFullyOccupied) {
    return [
      {
        status: 'occupied',
        width: 100,
        tooltip: `День полностью занят (${selectedDayLabel.value}, 07:00-00:00)`,
      },
    ]
  }

  const slots = []
  const startHour = 7
  const endHour = 24
  const totalHours = endHour - startHour

  let lastEndTime = startHour

  dayBookings.value.forEach((booking) => {
    const bookingStart = new Date(booking.start)
    const bookingEnd = new Date(booking.end)

    const startTime = bookingStart.getHours() + bookingStart.getMinutes() / 60
    const endTime = bookingEnd.getHours() + bookingEnd.getMinutes() / 60

    if (startTime > lastEndTime) {
      const freeWidth = ((startTime - lastEndTime) / totalHours) * 100
      slots.push({
        status: 'free',
        width: freeWidth,
        tooltip: `Свободно (${selectedDayLabel.value}, ${formatTime(lastEndTime)}-${formatTime(startTime)})`,
      })
    }

    const occupiedWidth = ((endTime - startTime) / totalHours) * 100
    slots.push({
      status: 'occupied',
      width: occupiedWidth,
      tooltip: `${booking.title || 'Занято'} (${selectedDayLabel.value}, ${formatTime(startTime)}-${formatTime(endTime)})`,
    })

    lastEndTime = endTime
  })

  watch(
    dayBookings,
    (newBookings) => {
      if (newBookings.length > 0) {
        selectedDate.value = formatDate(newBookings[0].start)
      } else {
        selectedDate.value = ''
      }
    },
    { immediate: true },
  )

  if (lastEndTime < endHour) {
    const freeWidth = ((endHour - lastEndTime) / totalHours) * 100
    slots.push({
      status: 'free',
      width: freeWidth,
      tooltip: `Свободно (${selectedDayLabel.value}, ${formatTime(lastEndTime)}-00:00)`,
    })
  }

  return slots
})

const formatTime = (decimalHours) => {
  const hours = Math.floor(decimalHours)
  const minutes = Math.round((decimalHours - hours) * 60)
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
}

const bookingTableHeaderItems = [
  { label: 'время' },
  { label: 'тип' },
  { label: 'мероприятие' },
  { label: 'заявитель' },
  { label: 'статус' },
]

const formatBookingTime = (start, end) => {
  const startTime = new Date(start)
  const endTime = new Date(end)

  const format = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  return `${format(startTime)} - ${format(endTime)}`
}
</script>

<style>
.modal-occupied .q-card {
  min-width: 1000px;
  height: 584px;
  padding: 44px 41px;
  border-radius: 8px;
}

.modal-occupied__header {
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 20px;
}

.close {
  position: absolute;
  top: 24px;
  right: 25px;
  font-size: 16px !important;
  color: var(--gray-primary);
}

.time-slots-container {
  margin: 20px 0;
}

.time-slots {
  display: flex;
  height: 40px;
  background: #f5f5f5;
  border-radius: 25px;
  overflow: hidden;
  margin-bottom: 8px;
}

.time-slot {
  height: 100%;
  transition: all 0.2s ease;
  position: relative;
}

.time-slot:hover {
  opacity: 0.8;
  transform: scaleY(1.1);
  z-index: 1;
}

.free {
  background-color: var(--green);
  cursor: pointer;
}

.occupied {
  background-color: var(--red);
}

.bookings-table {
  margin-top: 30px;
  width: 100%;
}

.bookings-table th {
  font-weight: 500;
  font-size: 16px;
  color: #333;
}

.bookings-table td {
  padding: 12px 16px;
  vertical-align: middle;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.user-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
}

.bookings-table__header {
  background: var(--blue-lighter);
  height: 26px !important;
}

.text-left {
  text-align: center;
  font-size: 13px !important;
  color: var(--gray-primary) !important;
}
</style>
