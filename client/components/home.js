import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Modal from './modal'
import UserList from './user-list'
import Head from './head'
import { toggleCreateUsersModal } from '../redux/reducers/ui'

const Home = () => {
  const dispatch = useDispatch()
  const open = useSelector((s) => s.ui.isCreateUserModalOpen)
  const toggle = () => {
    dispatch(toggleCreateUsersModal())
  }
  return (
    <div>
      <Head title="Hello" />

      <UserList />
      <Modal open={open} toggle={toggle} />
    </div>
  )
}

Home.propTypes = {}

export default Home
