import type { ButtonVariant, ButtonSize } from '../../types'
import { Link } from 'react-router-dom'
import type { ReactNode, ButtonHTMLAttributes } from 'react'

type ButtonBase = {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
  className?: string
}

type ButtonAsButton = ButtonBase & ButtonHTMLAttributes<HTMLButtonElement> & { to?: never; href?: never }
type ButtonAsLink = ButtonBase & { to: string; href?: never; className?: string; children: ReactNode }
type ButtonAsAnchor = ButtonBase & { href: string; to?: never; className?: string; children: ReactNode }

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor

const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2'

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-navy text-white hover:bg-navy-800 shadow-md shadow-navy/20',
  outline: 'border-2 border-navy text-navy hover:bg-navy hover:text-white',
  ghost: 'text-navy hover:bg-navy/5',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3.5 text-base',
}

export default function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className = '', children } = props
  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  if ('to' in props && props.to) {
    return <Link to={props.to} className={classes}>{children}</Link>
  }

  if ('href' in props && props.href) {
    return <a href={props.href} className={classes} target="_blank" rel="noopener noreferrer">{children}</a>
  }

  const { variant: _, size: __, className: ___, children: ____, ...rest } = props as ButtonAsButton
  return <button className={classes} {...rest}>{children}</button>
}
