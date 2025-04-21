<template>
  <q-dialog class="modal-free" :model-value="show" @update:model-value="updateModel">
    <q-card>
      <q-card-section class="modal-free__header">
        <div>Бронирование помещения</div>
        <div>"{{ room.room_number }}"</div>
        <div>(Вместимость: {{ room.place }} чел.)</div>
        <q-btn class="close" icon="close" flat round dense @click="close" />
      </q-card-section>

      <q-card-section class="modal-free__selected-date">
        <div>Выбрана дата -</div>
        <div>{{ selectedDate }}</div>
      </q-card-section>

      <q-card-section class="user-selection">
        <q-select v-model="selectedUser" :options="users" label="Пользователь" />
      </q-card-section>

      <q-card-section class="event-type-selection">
        <q-select v-model="eventType" :options="eventTypes" label="Тип мероприятия" />
      </q-card-section>

      <q-card-section class="event-name-selection">
        <q-input v-model="eventName" label="Название" />
      </q-card-section>

      <q-card-section class="resources-selection">
        <q-select
          v-model="selectedResources"
          :options="resources"
          label="Ресурсы (при необходимости)"
          multiple
          emit-value
          map-options
        />
      </q-card-section>

      <!-- Participants -->
      <q-card-section class="participants-selection">
        <div>Выбрано участников — {{ selectedParticipantsLabels.length }}</div>
        <div class="q-mb-sm">
          <q-select
            v-model="selectedParticipantsLabels"
            :options="selectedParticipantsLabels"
            label="Посмотреть участников"
          />
        </div>

        <q-btn
          flat
          icon="group_add"
          label="Добавить участников"
          @click="participantsExpanded = !participantsExpanded"
          class="q-mt-sm"
        />

        <q-slide-transition>
          <div v-show="participantsExpanded" class="participants-list q-pt-sm">
            <q-option-group
              v-model="selectedParticipants"
              :options="participants"
              type="checkbox"
              inline
            />
          </div>
        </q-slide-transition>
      </q-card-section>

      <q-card-section class="several-days-selection">
        <q-checkbox v-model="multiDay" label="Выбрать несколько дней" />
      </q-card-section>

      <q-card-section class="time-selection">
        <q-input
          v-model="startTime"
          type="time"
          :min="timeRangeParsed.start"
          :max="timeRangeParsed.end"
          label="Время начала"
        />

        <q-input
          v-model="endTime"
          type="time"
          :min="startTime"
          :max="timeRangeParsed.end"
          label="Время окончания"
        />
      </q-card-section>

      <q-card-section class="comments">
        <q-input v-model="comments" label="Комментарии" />
      </q-card-section>

      <q-card-actions>
        <q-btn class="book-btn" @click="submitBooking" label="Забронировать" flat />
        <q-btn @click="close" label="Отмена" flat />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import axios from 'axios'

const props = defineProps({
  show: Boolean,
  room: [Object, String],
  timeRange: String,
  selectedDate: String,
})

const emit = defineEmits(['update:show'])

const close = () => {
  resetForm()
  emit('update:show', false)
}
const updateModel = (val) => emit('update:show', val)

const eventTypes = ['Конференция', 'Переговоры', 'Тренинг']
const users = ['Иван Иванов', 'Мария Петрова']
const resources = ['Проектор', 'Маркерная доска', 'Флипчарт']
const participants = [
  { label: 'Алексей Смирнов', value: 'alexey' },
  { label: 'Ольга Кузнецова', value: 'olga' },
  { label: 'Светлана Орлова', value: 'svetlana' },
]

const selectedUser = ref('')
const eventType = ref('')
const eventName = ref('')
const selectedResources = ref([])
const selectedParticipants = ref([])
const startTime = ref('09:00')
const endTime = ref('18:00')
const comments = ref('')
const multiDay = ref(false)
const participantsExpanded = ref(false)

const timeRangeParsed = computed(() => {
  if (!props.timeRange) {
    return {
      start: '09:00',
      end: '18:00',
    }
  }
  const [start, end] = props.timeRange.split('-')
  return {
    start: start?.trim() || '09:00',
    end: end?.trim() || '18:00',
  }
})

// Form reset
const resetForm = () => {
  selectedUser.value = ''
  eventType.value = ''
  eventName.value = ''
  selectedResources.value = []
  selectedParticipants.value = []
  startTime.value = timeRangeParsed.value.start
  endTime.value = timeRangeParsed.value.end
  comments.value = ''
  multiDay.value = false
  participantsExpanded.value = false
}

// Default time
watch(
  () => props.show,
  (val) => {
    if (val) {
      startTime.value = timeRangeParsed.value.start
      endTime.value = timeRangeParsed.value.end
    }
  },
  { immediate: true },
)

const selectedParticipantsLabels = computed(() =>
  participants.filter((p) => selectedParticipants.value.includes(p.value)).map((p) => p.label),
)

const submitBooking = async () => {
  const bookingData = {
    user: selectedUser.value,
    room: props.room?.room_number || '',
    eventType: eventType.value,
    eventName: eventName.value,
    startTime: startTime.value,
    endTime: endTime.value,
    resources: selectedResources.value,
    participants: selectedParticipants.value,
    comments: comments.value,
    selectedDate: props.selectedDate,
    multiDay: multiDay.value,
  }

  try {
    console.log('Sending booking data:', bookingData)
    await axios.post('https://jsonplaceholder.typicode.com/posts', bookingData)
    resetForm()
    close()
  } catch (error) {
    console.error('Booking failed:', error)
  }
}
</script>

<style scoped>
.modal-free .q-card {
  min-width: 1000px;
  height: auto;
  padding: 44px 41px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: end;
}

.close {
  position: absolute;
  top: 24px;
  right: 25px;
  font-size: 16px !important;
  color: var(--gray-primary);
}

.modal-free__header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 26px;
  gap: 8px;
}

.modal-free__selected-date {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 24px;
  gap: 8px;
}

.participant-dropdown {
  max-height: 200px;
  overflow-y: auto;
}

.participants-list {
  padding-top: 10px;
}

.time-selection {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.book-btn {
  color: var(--blue-light);
}

.user-selection,
.time-selection,
.time-selection .q-field,
.modal-free__selected-date,
.modal-free__header,
.event-type-selection,
.event-name-selection,
.resources-selection,
.participants-selection,
.several-days-selection,
.comments {
  width: 100%;
}
</style>
