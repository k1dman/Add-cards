import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
// import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import CardHeader from '@material-ui/core/CardHeader'
// import teal from '@material-ui/core/colors/teal'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: 305,
    margin: '7px',
    boxShadow: '0 3px 3px rgba(0,0,0,0.2)'
  },
  avatar: {
backgroundColor: '#2aa5b4'
  },
  details: {
    display: 'flex',
    flexDirection: 'row'
  },
  number: {
    width: '70px',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fd',
    color: '#e3e8ee',

    display: 'flex',
    flexDirection: 'row'
  },
  content: {
    flex: '1 0 auto'
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

const UserCard = ({ index = 0, firstName, secondName, email }) => {
  const classes = useStyles()

  return (
    <Card variant="outlined" className={classes.root}>
      <div className={classes.details}>
        <div className={classes.number}>
          <Typography component="h4" variant="h4">
            #{index + 1}
          </Typography>
        </div>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {`${firstName.slice(0, 1)}${secondName.slice(0, 1)}`.toUpperCase()}
            </Avatar>
          }
          title={`${firstName} ${secondName}`}
          subheader={email}
        />
      </div>
    </Card>
  )
}

UserCard.propTypes = {}

export default UserCard
