import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { getUsers } from '../redux/reducers/users'

const Startup = (props) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUsers())
  }, [])

  return props.children
}

Startup.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
}

export default Startup
