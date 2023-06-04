import clsx from 'clsx'

import logo from '../../../assets/logo.png'
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
    </div>
  )
}
