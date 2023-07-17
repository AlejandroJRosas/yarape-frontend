import clsx from 'clsx'
import { Link } from 'react-router-dom'

import logo from '../../../assets/logo.png'
import statsImg from '../../../assets/homeAssets/statsButton.png'
import { ImageComponent } from '../../components/imageComponent'

export const NavBar = () => {
  return (
    <div className={clsx('flex flex-col items-center justify-center')}>
      <ImageComponent src={logo} hash={'LZP@2{?]w^R5fgozRkaf-D$lofM{'} />
      <p
        className={clsx(
          'm-0 font-bold text-gray-600 text-5xl px-6 py-7 subpixel-antialiased'
        )}
      >
        Yarapë
      </p>
      <Link
        to='/stats'
        tabIndex={-1}
        className='absolute left-[85%] bottom-[90%] md:bottom-[80%] rounded-full border-2 hover:border-GreenPalette hover:animate-bounce'
      >
        <img src={statsImg} className='h-12 w-12 md:h-16 md:w-16' />
      </Link>
    </div>
  )
}
