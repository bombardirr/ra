export const useFormatDate = () => {
  const formatDate = (dateString) => {
    if (!dateString) return ''

    const date =
      typeof dateString === 'string' || dateString instanceof String
        ? new Date(dateString)
        : new Date(dateString)

    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear()

    return `${day}.${month}.${year}`
  }

  return {
    formatDate,
  }
}
