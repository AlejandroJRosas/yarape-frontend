import { twMerge } from 'tailwind-merge'
import { cva } from 'class-variance-authority'
import clsx from 'clsx'
import { forwardRef } from 'react'

const variants = cva(
  [
    'rounded-full',
    'tracking-wide',
    'cursor-pointer',
    'inline-flex',
    'items-center',
    'justify-center',
    'relative',
    'transition',
    'outline-none',
    'focus:scale-[0.85]',
    'disabled:cursor-not-allowed'
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-GreenPalette',
          'text-white',
          'font-semibold',
          'shadow',
          'hover:bg-[#2db946]',
          'hover:shadow-md',
          'ring-GreenPalette',
          'disabled:bg-green-500/50',
          'disabled:shadow'
        ],
        secondary: [
          'font-normal',
          'bg-gray-50',
          'hover:bg-gray-100',
          'disabled:bg-gray-50/50',
          'disabled:shadow',
          'disabled:text-gray-950/50',
          'text-gray-950',
          'text-gray-950',
          'shadow',
          'border',
          'border-neutral-200/50',
          'ring-offset-2',
          'focus-visible:ring-2',
          'ring-gray-200'
        ],
        posibleAnswers: [],
        link: [],
        ghost: []
      },
      size: {
        small: [
          'text-sm',
          'px-4',
          'py-1',
          'ring-offset-2',
          'focus-visible:ring-2'
        ],
        default: [
          'px-8',
          'py-2',
          'leading-6',
          'ring-offset-4',
          'focus-visible:ring-4'
        ],
        large: [
          'text-lg',
          'px-12',
          'py-3',
          'leading-12',
          'ring-offset-4',
          'focus-visible:ring-4'
        ]
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default'
    }
  }
)

const Loading = () => {
  return (
    <div className='absolute inline-flex items-center'>
      <div className='w-4 h-4 rounded-full border-2 border-b-transparent animate-spin border-[inherit]' />
    </div>
  )
}

const Button = forwardRef(
  (
    {
      className,
      variant,
      size,
      children,
      loading,
      isEnabled,
      buttonType,
      buttonState,
      setButton,
      onClick,
      ...rest
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={clsx(twMerge(variants({ variant, size, className })), {
          'ring-offset-4 ring-4 scale-[0.85]':
            (buttonState && isEnabled) || (buttonState === null && isEnabled),
          '': buttonState === false && isEnabled
        })}
        {...rest}
        disabled={!isEnabled}
        type={buttonType}
        onClick={() => {
          onClick()
          setButton(true)
        }}
      >
        {loading && <Loading />}
        <span
          className={clsx('transition', {
            'opacity-0': loading,
            'opacity-100': !loading
          })}
        >
          {children}
        </span>
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
