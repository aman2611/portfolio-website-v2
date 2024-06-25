'use client'

import { useTheme } from 'next-themes'
import Image from "next/image"
import { useState, useEffect } from 'react'
import { GoMoon, GoSun } from "react-icons/go"


export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() =>  setMounted(true), [])

  if (!mounted) return (
    <Image
      src= {<GoSun/>}
      width={24}
      height={24}
      sizes="24x24"
      alt="Loading Light/Dark Toggle"
      priority={false}
      className="text-xl"
    />
  )

  if (resolvedTheme === 'dark') {
    return <GoSun onClick={() => setTheme('light')}  className="text-xl"/>
  }

  if (resolvedTheme === 'light') {
    return <GoMoon onClick={() => setTheme('dark')} className="text-xl" />
  }

}