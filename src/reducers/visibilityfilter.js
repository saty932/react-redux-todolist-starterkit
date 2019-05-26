export default function (state="SHOW_ALL", action) {
    switch (action.type) {
      case 'UPDATE_FILTER':
      return action.filterType
      default:
      return state
    }
  }
  