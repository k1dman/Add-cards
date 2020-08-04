import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import AddIcon from '@material-ui/icons/Add'
// import blueGrey from '@material-ui/core/colors/blueGrey'
import { useDispatch } from 'react-redux'
import Typography from '@material-ui/core/Typography'
import { toggleCreateUsersModal } from '../redux/reducers/ui'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: 305,
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    margin: '7px',
    border: '0px',
    backgroundImage: 'url("data:image/svg+xml,%3csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3e%3crect width=\'100%25\' height=\'100%25\' fill=\'none\' stroke=\'%23333\' stroke-width=\'4\' stroke-dasharray=\'10%2c 6\' stroke-dashoffset=\'45\' stroke-linecap=\'butt\'/%3e%3c/svg%3e")'
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    margin: 'auto'
  },
  content: {
    flex: 'auto'
  },
  cover: {
    width: 151
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  }
}))

const UserCard = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const toggle = () => {
    dispatch(toggleCreateUsersModal())
  }
  return (
    <Card onClick={toggle} variant="outlined" className={classes.root}>
      <Typography component="h4" variant="h4">
        {' '}
        <AddIcon fontSize="large" />{' '}
      </Typography>
    </Card>
  )
}

UserCard.propTypes = {}

export default React.memo(UserCard)
