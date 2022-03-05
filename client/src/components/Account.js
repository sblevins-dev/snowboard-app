import '../css/account.css';
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { getUser } from '../features/auth/userSlice'

export const Account = () => {
  const { user } = useContext(CartContext)
  const navigate = useNavigate()

  useEffect(() => {

    if (!user) {
      navigate('/login')
    }

    getUser()
  }, [])
  
  return (
    <div className='account-wrapper'>Account</div>
  )
}
