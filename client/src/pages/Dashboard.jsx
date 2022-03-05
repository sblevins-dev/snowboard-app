import { useEffect, useContext } from 'react'
import { CartContext } from '../contexts/CartContext'


export const Dashboard = () => {

  const { user } = useContext(CartContext)

  useEffect(() => {
    if (!user) {
    }
  }, [user])

  return (
    <div>Dashboard</div>
  )
}
