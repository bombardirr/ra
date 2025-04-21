import { mockResources } from 'src/api/mockResources.js'
import { mockRoomType } from 'src/api/mockRoomType.js'
import { mockSchedule } from 'src/api/mockSchedule.js'

//Network throttling
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export const mockApi = {
  async getResources() {
    await delay(500)
    return mockResources
  },

  async getRoomTypes() {
    await delay(500)
    return mockRoomType
  },

  async getSchedule() {
    await delay(500)
    return mockSchedule
  },
}
