import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Protected = (props) => {
  const [acces, setAcces] = useState(false)
  const navigate = useNavigate()
  const protectedRoute = () => {
    const token = localStorage.getItem('token')
    axios({
      method: 'POST',
      url: `${process.env.REACT_APP_BACK}/auth/protected_admin`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setAcces(res.data.acces)
      })
      .catch((err) => {
        setAcces(false)
        navigate('/')
      })
  }
  useEffect(() => {
    protectedRoute()
  })
  return <>{acces ? props.children : null}</>
}

export default Protected
