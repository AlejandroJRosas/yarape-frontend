import { Link } from 'react-router-dom'
import leafBackImg from '../../assets/categories/leafBack.avif'
import { Button } from '../components/button'
import sadImg from '../../assets/sad.png'

export const PageNotFound = () => {
  return (
    <div className='flex flex-col h-screen w-full items-center justify-center'>
      <div
        className='bg-cover w-full h-full flex flex-col items-center justify-around text-center'
        style={{ backgroundImage: `url(${leafBackImg})` }}
      >
        <div className='flex flex-col'>
          <label className='text-7xl font-bold'>404</label>
          <label className='text-4xl font-semibold'>
            Parece que te has extraviado
          </label>
        </div>
        <img src={sadImg} className='w-1/2 h-1/2 object-contain' />
        <Link to={'/'} tabIndex={-1}>
          <Button
            size={'large'}
            isEnabled={true}
            buttonType={'button'}
            onHome={true}
          >
            Volver al inicio
          </Button>
        </Link>
      </div>
    </div>
  )
}
