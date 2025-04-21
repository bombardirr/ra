import { ref } from 'vue'
import { mockApi } from 'src/api/requests.js'

export function useRoomData() {
  const selects = ref([
    {
      model: ref('Вместимость _______'),
      options: [
        'Вместимость 5 чел.',
        'Вместимость 10 чел.',
        'Вместимость 15 чел.',
        'Вместимость 20 чел.',
      ],
      resetValue: 'Вместимость _______',
    },
    {
      model: ref('Тип мероприятия'),
      options: ['Мероприятие 1', 'Мероприятие 2', 'Мероприятие 3', 'Мероприятие 4'],
      resetValue: 'Тип мероприятия',
    },
    {
      model: ref('Тип помещения'),
      options: [],
      resetValue: 'Тип помещения',
    },
    {
      model: ref('Ресурсы'),
      options: [],
      resetValue: 'Ресурсы',
    },
  ])

  const fetchResources = async () => {
    try {
      const response = await mockApi.getResources()
      const data = response.map((item) => item.name)

      const resourcesSelect = selects.value.find((select) => select.resetValue === 'Ресурсы')
      if (resourcesSelect) {
        resourcesSelect.options = data
      }
    } catch (error) {
      console.log('Ошибка при загрузке ресурсов:', error)
      const resourcesSelect = selects.value.find((select) => select.resetValue === 'Ресурсы')
      if (resourcesSelect) {
        resourcesSelect.options = ['Проектор', 'Флип-чарт', 'ВКС Терминал']
      }
    }
  }

  const fetchRoomTypes = async () => {
    try {
      const response = await mockApi.getRoomTypes()
      const data = response.map((item) => item.name)

      const roomTypeSelect = selects.value.find((select) => select.resetValue === 'Тип помещения')
      if (roomTypeSelect) {
        roomTypeSelect.options = data
      }
    } catch (error) {
      console.log('Ошибка при загрузке ресурсов:', error)

      const roomTypeSelect = selects.value.find((select) => select.resetValue === 'Тип помещения')
      if (roomTypeSelect) {
        roomTypeSelect.options = ['ВКС/АКС', 'Переговоры', 'Конференция']
      }
    }
  }

  const loadInitialData = async () => {
    try {
      await Promise.all([fetchResources(), fetchRoomTypes()])
      console.log('Все данные успешно загружены')
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error)
    }
  }

  const handleResetAll = () => {
    selects.value.forEach((select) => {
      select.model = select.resetValue
    })
  }

  return {
    selects,
    loadInitialData,
    handleResetAll,
  }
}
