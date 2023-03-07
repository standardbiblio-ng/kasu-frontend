import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
// import '../styles/globals.css'
import { useUserStore } from '@store/userStore.store'
// Here you would fetch and return the user / session
const useUser = () => ({ user: null, loading: false })

export default function Home() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(useUserStore.getState().isAuthenticated)
  const [user, setUser] = useState(useUserStore.getState().userDetails?.user)
  useEffect(() => {
    if (isAuthenticated && user.type == 'staff') {
      router.push('/staff')
    } else if (isAuthenticated && user.type == 'student') {
      router.push('/student')
    } else {
      router.push('auth/signin')
    }
  }, [user, isAuthenticated])

  return <div>Redirecting...</div>
  // here use a loading state
}
