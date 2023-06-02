import classNames from 'classnames'

const CustomButton = ({ selected, children, ...rest }) => {
  const buttonClasses = classNames(
    'px-4',
    'py-2',
    'rounded-md',
    'font-bold',
    'uppercase',
    'tracking-wider',
    'transition-colors',
    'duration-300',
    {
      'bg-blue-500': selected,
      'bg-gray-400': !selected,
      'hover:bg-blue-600': !selected,
      'hover:bg-gray-500': selected
    }
  )

  return (
    <button className={buttonClasses} {...rest}>
      {selected ? `Selected: ${children}` : children}
    </button>
  )
}

export default CustomButton
