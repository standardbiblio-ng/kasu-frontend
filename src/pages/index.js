import { useEffect } from 'react'
import { useRouter } from 'next/router'
// import '../styles/globals.css'

// Here you would fetch and return the user / session
const useUser = () => ({ user: null, loading: false })

export default function Home() {
  const { user, loading } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (!(user || loading)) {
      router.push('auth/signin')
    }
  }, [user, loading])

  return <div>Redirecting...</div>
  // here use a loading state
}
