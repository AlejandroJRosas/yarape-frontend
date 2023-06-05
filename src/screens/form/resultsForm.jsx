import { useContext } from 'react'
import { formContext } from '../../context/formContext'
import { Button } from '../../components/button'
import leafBackImg from '../../../assets/categories/leafBack.avif'
import badImg from '../../../assets/results/bad.png'
import normalImg from '../../../assets/results/normal.png'
import goodImg from '../../../assets/results/good.png'
import clsx from 'clsx'

const resultados = {
  bad: {
    lb1: 'Tu huella es muy alta!',
    lb2: 'Debes reducirla!',
    img: badImg
  },
  normal: {
    lb1: 'Tu huella es Promedio!',
    lb2: 'Pero puedes mejorarla!',
    img: normalImg
  },
  good: {
    lb1: 'Tu huella es muy baja!',
    lb2: 'Bien hecho!',
    img: goodImg
  }
}

export const ResultForm = () => {
  const { userName, userFootprint } = useContext(formContext)

  const range = () => {
    const value = Number((userFootprint * 0.001).toFixed(2))
    if (value > 8.5) return 'bad'
    if (value >= 5 && value <= 8.5) return 'normal'
    if (value < 5) return 'good'
  }

  const useRange = range()

  return (
    <>
      <div className='flex flex-col h-screen items-center justify-center'>
        <div
          className='bg-cover h-full w-full flex flex-col items-center justify-around text-center'
          style={{ backgroundImage: `url(${leafBackImg})` }}
        >
          <div className='flex flex-col text-3xl font-semibold w-4/5'>
            <label>Hemos terminado! {userName}</label>
            <label>Tu huella ecológica es de:</label>
          </div>
          <div
            className={clsx('rounded-full w-3/4 text-center', {
              'bg-red-600': useRange === 'bad',
              'bg-yellow-600': useRange === 'normal',
              'bg-GreenPalette': useRange === 'good'
            })}
          >
            <label className='text-4xl font-semibold text-white'>
              {Number((userFootprint * 0.001).toFixed(2))} Ton de CO2
            </label>
          </div>
          <div className='text-3xl font-bold text-center flex flex-col'>
            <label>{resultados[useRange].lb1}</label>
            <label>{resultados[useRange].lb2}</label>
          </div>
          <img src={resultados[useRange].img} />
          <Button size={'large'} isEnabled={true}>
            Siguiente
          </Button>
        </div>
      </div>
    </>
  )
}
