import {toggleCreateUsersModal} from './ui'

const USERS_RECIEVED = 'test-app/USERS_RECIEVED'
const ADD_NEW_USER = 'test-app/ADD_NEW_USER'

const initialState = {
  list: [
  ]
}

export default function (state = initialState, action) {
  switch (action.type) {
    case USERS_RECIEVED: {
      return { ...state, list: [...action.list] }
    }

    case ADD_NEW_USER: {
      return { ...state, list: [...state.list, action.user] }
    }
    default: {
      return state
    }
  }
}

export function getUsers() {
  return (dispatch) => {
    fetch('/api/v1/users')
      .then((r) => r.json())
      .then(({ status, users }) => {
        if (status === 'ok') {
          dispatch({ type: USERS_RECIEVED, list: users })
        }
      }).catch(() => {})
  }
}

export function addUser({ firstName, secondName, email }) {
  return (dispatch) => {
    fetch('/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ firstName, secondName, email })
    })
      .then((r) => r.json())
      .then(({ status, user }) => {
        if (status === 'ok') {
          dispatch({ type: ADD_NEW_USER, user })
          dispatch(toggleCreateUsersModal())
        }
      })
      .catch((err) => {console.log(err)})
  }
}
