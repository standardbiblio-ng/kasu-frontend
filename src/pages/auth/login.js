import { useRouter } from 'next/router'

export default function Login() {
    const router = useRouter()

    return (
        <section className='w-full h-screen bg-primary flex items-center justify-center'>
            <button className='px-12 py-4 border border-black rounded-md bg-white text-black' type="button" onClick={() => router.push('/dashboard')}>
                Click to login
            </button>
        </section>
    )
}