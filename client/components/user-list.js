import React from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'

import UserCard from './user-card'
import AddUserCard from './add-user-card'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: theme.spacing(1),
    justifyContent: 'center'
  }
}))

const UserList = () => {
  const users = useSelector((s) => s.users.list)
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {users.map((user, index) => {
        return <UserCard key={user.email} {...user} index={index} />
      })}
      <AddUserCard />
    </div>
  )
}

UserList.propTypes = {}

export default UserList
