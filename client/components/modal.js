import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-material-ui'
import LinearProgress from '@material-ui/core/LinearProgress'
import { useDispatch } from 'react-redux'
import { addUser } from '../redux/reducers/users'

function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  }
}
const useStyles = makeStyles((theme) => ({
  paper: {
    ...theme.typography,
    position: 'absolute',
    width: 300,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}))

const Home = ({ open, toggle }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [modalStyle] = useState(getModalStyle)

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Typography component="h6" variant="h6">
        Создание пользователя
      </Typography>
      <Formik
        initialValues={{
          email: '',
          firstName: '',
          secondName: ''
        }}
        validate={(values) => {
          const errors = {}
          if (!values.email) {
            errors.email = 'Необходимо заполнить'
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Некорректный e-mail'
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(addUser(values))

          setSubmitting(false)
        }}
      >
        {({ submitForm, isSubmitting }) => (
          <Form>
            <Box m={6} />
            <Field
              component={TextField}
              size="small"
              fullWidth
              required
              defaultValue=""
              variant="outlined"
              name="firstName"
              type="text"
              label="Имя"
            />
            <Box m={2} />

            <Field
              component={TextField}
              size="small"
              fullWidth
              required
              defaultValue=""
              variant="outlined"
              name="secondName"
              type="text"
              label="Фамилия"
            />
            <Box m={2} />

            <Field
              component={TextField}
              size="small"
              fullWidth
              required
              defaultValue=""
              variant="outlined"
              name="email"
              type="email"
              label="E-mail"
            />
            <Box m={2} />

            {isSubmitting && <LinearProgress />}
            <Box m={10} />

            <Button
              onClick={() => {
                submitForm()
              }}
              size="small"
              fullWidth
              variant="contained"
              color="primary"
            >
              Создать
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )

  return (
    <div>
      <Modal
        open={open}
        onClose={toggle}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  )
}

Home.propTypes = {}

export default Home
