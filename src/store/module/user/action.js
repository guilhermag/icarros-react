export function addNewUser(user) {
  return {
    type: 'ADD_USER',
    payload: {
      user
    }
  }
}