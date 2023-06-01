import clsx from 'clsx'

import logo from '../../assets/logo.png'

const NavBar = () => {
  return (
    <div
      className={clsx(
        'h-32 w-full top-0 left-0 m-0 flex flex-row justify-center'
      )}
    >
      <div className={clsx('flex flex-row px-4 gap-4')}>
        <div className={clsx('flex flex-row items-center')}>
          <img src={logo} alt='Logo' width='85' />
          <p
            className={clsx(
              'text-center m-0 font-bold text-gray-600 text-2xl px-6 py-7 subpixel-antialiased'
            )}
          >
            Yarapë
          </p>
        </div>
      </div>
    </div>
  )
}

export default NavBar
