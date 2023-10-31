"use client";

import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  router.replace('https://timmac.dev');
  return (
    <div>
      </div>
  )
}