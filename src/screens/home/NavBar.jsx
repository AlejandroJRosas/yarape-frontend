import clsx from 'clsx'

import logo from '../../assets/logo.png'

const NavBar = () => {
  return (
    <div className={clsx('flex flex-col items-center justify-center')}>
      <div className={clsx('')}>
        <img src={logo} alt='Logo' className='' />
      </div>
      <p
        className={clsx(
          'm-0 font-bold text-gray-600 text-5xl px-6 py-7 subpixel-antialiased'
        )}
      >
        Yarapë
      </p>
    </div>
  )
}

export default NavBar
