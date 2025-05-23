export const mockSchedule = [
  {
    id: 'room1',
    room_number: 'А102',
    place: 30,
    bookedDays: ['monday', 'wednesday'],
    partialDays: ['tuesday'],
    booked: [
      {
        id: '1a2b3c4d-0001-0001-0001-000000000001',
        userId: 'admin-001',
        roomId: 'room1',
        eventType: 'Технические работы',
        start: '2025-04-07T08:00:00.000Z',
        end: '2025-04-07T23:59:59.000Z',
        requestStatus: 'Принято',
        createdDate: '2025-04-05',
        comment: 'Плановое техническое обслуживание',
        title: 'Обслуживание оборудования',
        person: {
          id: 'tech-001',
          fullname: 'Сергеев Алексей Викторович',
          img: '/static/users/tech-001.jpg',
        },
        user: {
          id: 'admin-001',
          fullname: 'Иванова Мария Петровна',
          img: '/static/users/admin-001.jpg',
        },
      },
      {
        id: '1a2b3c4d-0001-0001-0001-000000000002',
        userId: 'teacher-001',
        roomId: 'room1',
        eventType: 'Лекция',
        start: '2025-04-09T08:00:00.000Z',
        end: '2025-04-09T23:59:59.000Z',
        requestStatus: 'Принято',
        createdDate: '2025-04-05',
        comment: 'Подготовка к экзаменационной сессии',
        title: 'Математический анализ',
        person: {
          id: 'teacher-001',
          fullname: 'Петров Иван Сергеевич',
          img: '/static/users/teacher-001.jpg',
        },
        user: {
          id: 'secretary-001',
          fullname: 'Смирнова Ольга Дмитриевна',
          img: '/static/users/secretary-001.jpg',
        },
      },
      {
        id: '1a2b3c4d-0001-0001-0001-000000000003',
        userId: 'student-001',
        roomId: 'room1',
        eventType: 'Консультация',
        start: '2025-04-08T10:00:00.000Z',
        end: '2025-04-08T12:00:00.000Z',
        requestStatus: 'Принято',
        createdDate: '2025-04-06',
        comment: 'Консультация по курсовой работе',
        title: 'Разработка на Python',
        person: {
          id: 'teacher-002',
          fullname: 'Кузнецова Анна Михайловна',
          img: '/static/users/teacher-002.jpg',
        },
        user: {
          id: 'student-001',
          fullname: 'Васильев Дмитрий Олегович',
          img: '/static/users/student-001.jpg',
        },
      },
      {
        id: '1a2b3c4d-0001-0001-0001-000000000004',
        userId: 'teacher-009',
        roomId: 'room1',
        eventType: 'Практическое занятие',
        start: '2025-04-08T10:00:00.000Z',
        end: '2025-04-08T12:00:00.000Z',
        requestStatus: 'Принято',
        createdDate: '2025-04-07',
        comment: 'Практические задания по физике',
        title: 'Физика: практика',
        person: {
          id: 'teacher-009',
          fullname: 'Морозов Игорь Васильевич',
          img: '/static/users/teacher-009.jpg',
        },
        user: {
          id: 'teacher-009',
          fullname: 'Морозов Игорь Васильевич',
          img: '/static/users/teacher-009.jpg',
        },
      },
      {
        id: '1a2b3c4d-0001-0001-0001-000000000005',
        userId: 'teacher-010',
        roomId: 'room1',
        eventType: 'Семинар',
        start: '2025-04-08T12:30:00.000Z',
        end: '2025-04-08T14:00:00.000Z',
        requestStatus: 'Принято',
        createdDate: '2025-04-07',
        comment: 'Обсуждение научных статей',
        title: 'Научный семинар',
        person: {
          id: 'teacher-010',
          fullname: 'Зайцева Елена Петровна',
          img: '/static/users/teacher-010.jpg',
        },
        user: {
          id: 'teacher-010',
          fullname: 'Зайцева Елена Петровна',
          img: '/static/users/teacher-010.jpg',
        },
      },
    ],
  },
  {
    id: 'room2',
    room_number: 'B205',
    place: 20,
    bookedDays: ['thursday'],
    partialDays: ['wednesday'],
    booked: [
      {
        id: '1a2b3c4d-0002-0002-0002-000000000001',
        userId: 'admin-002',
        roomId: 'room2',
        eventType: 'Конференция',
        start: '2025-04-10T00:00:00.000Z',
        end: '2025-04-10T23:59:59.000Z',
        requestStatus: 'Принято',
        createdDate: '2025-04-05',
        comment: 'Годовая научная конференция',
        title: 'Научные исследования 2025',
        person: {
          id: 'prof-001',
          fullname: 'Николаев Андрей Викторович',
          img: '/static/users/prof-001.jpg',
        },
        user: {
          id: 'admin-002',
          fullname: 'Петрова Елена Ивановна',
          img: '/static/users/admin-002.jpg',
        },
      },
      {
        id: '1a2b3c4d-0002-0002-0002-000000000002',
        userId: 'teacher-003',
        roomId: 'room2',
        eventType: 'Совещание',
        start: '2025-04-09T13:00:00.000Z',
        end: '2025-04-09T15:30:00.000Z',
        requestStatus: 'Принято',
        createdDate: '2025-04-07',
        comment: 'Обсуждение учебного плана',
        title: 'Заседание кафедры',
        person: {
          id: 'teacher-003',
          fullname: 'Сидорова Мария Ивановна',
          img: '/static/users/teacher-003.jpg',
        },
        user: {
          id: 'teacher-003',
          fullname: 'Сидорова Мария Ивановна',
          img: '/static/users/teacher-003.jpg',
        },
      },
      {
        id: '1a2b3c4d-0002-0002-0002-000000000003',
        userId: 'teacher-011',
        roomId: 'room2',
        eventType: 'Лекция',
        start: '2025-04-09T10:00:00.000Z',
        end: '2025-04-09T12:00:00.000Z',
        requestStatus: 'Принято',
        createdDate: '2025-04-07',
        comment: 'Лекция по высшей математике',
        title: 'Математика для программистов',
        person: {
          id: 'teacher-011',
          fullname: 'Гусев Андрей Николаевич',
          img: '/static/users/teacher-011.jpg',
        },
        user: {
          id: 'teacher-011',
          fullname: 'Гусев Андрей Николаевич',
          img: '/static/users/teacher-011.jpg',
        },
      },
      {
        id: '1a2b3c4d-0002-0002-0002-000000000004',
        userId: 'teacher-012',
        roomId: 'room2',
        eventType: 'Лабораторная работа',
        start: '2025-04-09T12:30:00.000Z',
        end: '2025-04-09T14:00:00.000Z',
        requestStatus: 'Принято',
        createdDate: '2025-04-07',
        comment: 'Работа с электронными схемами',
        title: 'Электротехника: лабораторная',
        person: {
          id: 'teacher-012',
          fullname: 'Тихонов Сергей Иванович',
          img: '/static/users/teacher-012.jpg',
        },
        user: {
          id: 'teacher-012',
          fullname: 'Тихонов Сергей Иванович',
          img: '/static/users/teacher-012.jpg',
        },
      },
    ],
  },
  {
    id: 'room3',
    room_number: 'C301',
    place: 25,
    bookedDays: ['friday'],
    partialDays: ['monday'],
    booked: [
      {
        id: '1a2b3c4d-0003-0003-0003-000000000001',
        userId: 'admin-003',
        roomId: 'room3',
        eventType: 'Семинар',
        start: '2025-04-11T00:00:00.000Z',
        end: '2025-04-11T23:59:59.000Z',
        requestStatus: 'Принято',
        createdDate: '2025-04-05',
        comment: 'Международный научный семинар',
        title: 'Современные технологии',
        person: {
          id: 'prof-002',
          fullname: 'Ковалев Дмитрий Сергеевич',
          img: '/static/users/prof-002.jpg',
        },
        user: {
          id: 'admin-003',
          fullname: 'Федорова Анна Викторовна',
          img: '/static/users/admin-003.jpg',
        },
      },
      {
        id: '1a2b3c4d-0003-0003-0003-000000000002',
        userId: 'teacher-004',
        roomId: 'room3',
        eventType: 'Практическое занятие',
        start: '2025-04-07T09:30:00.000Z',
        end: '2025-04-07T12:00:00.000Z',
        requestStatus: 'Принято',
        createdDate: '2025-04-06',
        comment: 'Лабораторные работы по физике',
        title: 'Физика: практикум',
        person: {
          id: 'teacher-004',
          fullname: 'Кузнецов Алексей Сергеевич',
          img: '/static/users/teacher-004.jpg',
        },
        user: {
          id: 'teacher-004',
          fullname: 'Кузнецов Алексей Сергеевич',
          img: '/static/users/teacher-004.jpg',
        },
      },
    ],
  },
  {
    id: 'room4',
    room_number: 'D402',
    place: 40,
    bookedDays: ['wednesday'],
    partialDays: [],
    booked: [
      {
        id: '1a2b3c4d-0004-0004-0004-000000000001',
        userId: 'admin-004',
        roomId: 'room4',
        eventType: 'Тренинг',
        start: '2025-04-09T00:00:00.000Z',
        end: '2025-04-09T23:59:59.000Z',
        requestStatus: 'Принято',
        createdDate: '2025-04-05',
        comment: 'Корпоративное обучение',
        title: 'Эффективные коммуникации',
        person: {
          id: 'trainer-001',
          fullname: 'Орлова Екатерина Владимировна',
          img: '/static/users/trainer-001.jpg',
        },
        user: {
          id: 'admin-004',
          fullname: 'Михайлов Сергей Анатольевич',
          img: '/static/users/admin-004.jpg',
        },
      },
    ],
  },
  {
    id: 'room5',
    room_number: 'E510',
    place: 35,
    bookedDays: ['tuesday', 'thursday'],
    partialDays: ['friday'],
    booked: [
      {
        id: '1a2b3c4d-0005-0005-0005-000000000001',
        userId: 'admin-005',
        roomId: 'room5',
        eventType: 'Экзамен',
        start: '2025-04-08T00:00:00.000Z',
        end: '2025-04-08T23:59:59.000Z',
        requestStatus: 'Принято',
        createdDate: '2025-04-05',
        comment: 'Письменный экзамен для потока',
        title: 'Экзамен по математике',
        person: {
          id: 'prof-003',
          fullname: 'Соколова Наталья Ивановна',
          img: '/static/users/prof-003.jpg',
        },
        user: {
          id: 'admin-005',
          fullname: 'Андреев Павел Сергеевич',
          img: '/static/users/admin-005.jpg',
        },
      },
      {
        id: '1a2b3c4d-0005-0005-0005-000000000002',
        userId: 'teacher-005',
        roomId: 'room5',
        eventType: 'Защита проектов',
        start: '2025-04-10T00:00:00.000Z',
        end: '2025-04-10T23:59:59.000Z',
        requestStatus: 'Принято',
        createdDate: '2025-04-05',
        comment: 'Годовая защита студенческих работ',
        title: 'Защита курсовых проектов',
        person: {
          id: 'teacher-005',
          fullname: 'Белов Александр Дмитриевич',
          img: '/static/users/teacher-005.jpg',
        },
        user: {
          id: 'teacher-005',
          fullname: 'Белов Александр Дмитриевич',
          img: '/static/users/teacher-005.jpg',
        },
      },
      {
        id: '1a2b3c4d-0005-0005-0005-000000000003',
        userId: 'parent-001',
        roomId: 'room5',
        eventType: 'Собрание',
        start: '2025-04-11T14:00:00.000Z',
        end: '2025-04-11T16:00:00.000Z',
        requestStatus: 'Принято',
        createdDate: '2025-04-08',
        comment: 'Обсуждение учебного процесса',
        title: 'Родительское собрание',
        person: {
          id: 'teacher-006',
          fullname: 'Васильева Анна Николаевна',
          img: '/static/users/teacher-006.jpg',
        },
        user: {
          id: 'parent-001',
          fullname: 'Иванова Светлана Михайловна',
          img: '/static/users/parent-001.jpg',
        },
      },
    ],
  },
  {
    id: 'room6',
    room_number: 'F603',
    place: 18,
    bookedDays: ['monday'],
    partialDays: [],
    booked: [
      {
        id: '1a2b3c4d-0006-0006-0006-000000000001',
        userId: 'admin-006',
        roomId: 'room6',
        eventType: 'Тестирование',
        start: '2025-04-07T00:00:00.000Z',
        end: '2025-04-07T23:59:59.000Z',
        requestStatus: 'Принято',
        createdDate: '2025-04-05',
        comment: 'Входное тестирование студентов',
        title: 'Тестирование по английскому',
        person: {
          id: 'teacher-007',
          fullname: 'Козлова Марина Викторовна',
          img: '/static/users/teacher-007.jpg',
        },
        user: {
          id: 'admin-006',
          fullname: 'Семенова Ольга Алексеевна',
          img: '/static/users/admin-006.jpg',
        },
      },
    ],
  },
  {
    id: 'room7',
    room_number: 'G704',
    place: 22,
    bookedDays: [],
    partialDays: [],
    booked: [],
  },
  {
    id: 'room8',
    room_number: 'H810',
    place: 28,
    bookedDays: ['friday'],
    partialDays: [],
    booked: [
      {
        id: '1a2b3c4d-0008-0008-0008-000000000001',
        userId: 'admin-007',
        roomId: 'room8',
        eventType: 'Мастер-класс',
        start: '2025-04-11T00:00:00.000Z',
        end: '2025-04-11T23:59:59.000Z',
        requestStatus: 'Принято',
        createdDate: '2025-04-05',
        comment: 'Мастер-класс от IT-компании',
        title: 'Разработка мобильных приложений',
        person: {
          id: 'speaker-001',
          fullname: 'Новиков Артем Игоревич',
          img: '/static/users/speaker-001.jpg',
        },
        user: {
          id: 'admin-007',
          fullname: 'Тарасова Елена Владимировна',
          img: '/static/users/admin-007.jpg',
        },
      },
    ],
  },
  {
    id: 'room9',
    room_number: 'I901',
    place: 32,
    bookedDays: ['tuesday', 'wednesday'],
    partialDays: [],
    booked: [
      {
        id: '1a2b3c4d-0009-0009-0009-000000000001',
        userId: 'admin-008',
        roomId: 'room9',
        eventType: 'Лекция',
        start: '2025-04-08T00:00:00.000Z',
        end: '2025-04-08T23:59:59.000Z',
        requestStatus: 'Принято',
        createdDate: '2025-04-05',
        comment: 'Цикл лекций для магистрантов',
        title: 'Современные методы анализа данных',
        person: {
          id: 'prof-004',
          fullname: 'Громов Михаил Юрьевич',
          img: '/static/users/prof-004.jpg',
        },
        user: {
          id: 'admin-008',
          fullname: 'Крылов Андрей Николаевич',
          img: '/static/users/admin-008.jpg',
        },
      },
      {
        id: '1a2b3c4d-0009-0009-0009-000000000002',
        userId: 'teacher-008',
        roomId: 'room9',
        eventType: 'Практикум',
        start: '2025-04-09T00:00:00.000Z',
        end: '2025-04-09T23:59:59.000Z',
        requestStatus: 'Принято',
        createdDate: '2025-04-05',
        comment: 'Компьютерный практикум',
        title: 'Программирование на Java',
        person: {
          id: 'teacher-008',
          fullname: 'Орлов Денис Васильевич',
          img: '/static/users/teacher-008.jpg',
        },
        user: {
          id: 'teacher-008',
          fullname: 'Орлов Денис Васильевич',
          img: '/static/users/teacher-008.jpg',
        },
      },
    ],
  },
  {
    id: 'room10',
    room_number: 'J1002',
    place: 26,
    bookedDays: [],
    partialDays: [],
    booked: [],
  },
]
