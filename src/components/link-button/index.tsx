import React from 'react'

import Link from 'next/link'

interface IButtonProps {
  color?: 'primary' | 'secondary'
  href: string
  target?: string
  rel?: string
  type?: 'submit' | 'reset' | 'button'
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

const LinkButton: React.FC<IButtonProps> = ({
  color = 'primary',
  href,
  target,
  rel,
  type = 'button',
  children,
  onClick,
  className
}) => {
  const linkStyles = `all:unset px-8 py-2 rounded-3xl text-[18px] font-semibold ${
    color === 'primary'
      ? 'bg-primary text-white'
      : color === 'secondary'
        ? 'bg-secondary text-white'
        : `bg-${color} text-white`
  } ${className}`

  return (
    <Link
      href={href}
      type={type}
      rel={rel}
      className={linkStyles}
      target={target}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

export default LinkButton
