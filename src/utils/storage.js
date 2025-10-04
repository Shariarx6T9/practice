export const loadBookings = () => {
  try { return JSON.parse(localStorage.getItem('bookings') || '[]') } catch(e) { return [] }
}
export const saveBookings = (bookings) => {
  localStorage.setItem('bookings', JSON.stringify(bookings))
}