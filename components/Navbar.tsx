import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS } from '@/constants'
import Button from './Button'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="container flex items-center justify-between px-2">
        <Link href="/">
            <Image src="/logo.svg" width={121} height={78} alt="Food Hut" />
        </Link>

        <ul className="hidden md:flex gap-5">
            {NAV_LINKS.map((item, index) => (
                <Link href={item.href} key={item.key}>
                    {item.label}
                </Link>
            ))}
        </ul>

        <div className="hidden md:block">
            <Button type="button" label ="Download App"/>
        </div>

        <Image className="md:hidden" src="/mobile_menu_button.svg" width={36} height={27} alt="Mobile Menu Button" />
    </nav>
  )
}

export default Navbar