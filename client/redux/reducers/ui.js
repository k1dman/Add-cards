const TOGGLE_CREATE_USERS_MODAL = 'test-app/TOGGLE_CREATE_USERS_MODAL'

const initialState = {
  isCreateUserModalOpen: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_CREATE_USERS_MODAL: {
      return { ...state, isCreateUserModalOpen: !state.isCreateUserModalOpen }
    }
    default: {
      return state
    }
  }
}

export function toggleCreateUsersModal() {
  return { type: TOGGLE_CREATE_USERS_MODAL }
}
