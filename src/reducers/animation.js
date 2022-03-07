export default (state = {
  animate: false
}, action) => {
  switch (action.type) {
    case 'START_ANIMATION':
      return { ...state, animate: true }
    case 'STOP_ANIMATION':
      return { ...state, animate: false }
    default:
      return state
  }
}
