export function selectUserByName(state, name) {
  const filteredNames = state.users.filter(user => user.name === name)
  return filteredNames
}
export function getAppointmentsForDay(state, day) {
  const filteredAppointments = []
  state.days.forEach(stateDay => {
    if (stateDay.name === day) {
      stateDay.appointments.forEach(appointmentId => {
        filteredAppointments.push(state.appointments[appointmentId])
      })
    }
  })
  return filteredAppointments
}
