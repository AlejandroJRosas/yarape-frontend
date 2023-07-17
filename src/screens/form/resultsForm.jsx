import { useContext } from 'react'
import { formContext } from '../../context/formContext'
import { Button } from '../../components/button'
import leafBackImg from '../../../assets/categories/leafBack.avif'
import badImg from '../../../assets/results/bad.png'
import normalImg from '../../../assets/results/normal.png'
import goodImg from '../../../assets/results/good.png'
import earthImg from '../../../assets/results/earth.png'
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

export const ResultForm = ({ onNext, setMood }) => {
  const { name, footprint, earthQuantity } = useContext(formContext)

  const range = () => {
    const value = Number((footprint * 0.001).toFixed(2))
    if (value > 9) {
      setMood('bad')
      return 'bad'
    }
    if (value >= 6 && value <= 9) {
      setMood('normal')
      return 'normal'
    }
    if (value < 6) {
      setMood('good')
      return 'good'
    }
  }

  const useRange = range()

  const handleSubmit = (event) => {
    event.preventDefault()
    onNext()
  }

  return (
    <>
      <div className='flex flex-col h-screen items-center justify-center'>
        <div
          className='bg-cover h-full w-full flex flex-col items-center justify-around text-center'
          style={{ backgroundImage: `url(${leafBackImg})` }}
        >
          <div className='flex flex-col text-3xl font-semibold w-4/5'>
            <label>Hemos terminado! {name}</label>
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
              {Number((footprint * 0.001).toFixed(2))} Ton de CO2 Cantidad{' '}
              {earthQuantity}
            </label>
          </div>
          <img src={earthImg} />
          <div className='text-3xl font-bold text-center flex flex-col'>
            <label>{resultados[useRange].lb1}</label>
            <label>{resultados[useRange].lb2}</label>
          </div>
          <img src={resultados[useRange].img} />
          <form onSubmit={handleSubmit}>
            <Button
              buttonState={null}
              isEnabled={true}
              size={'large'}
              buttonType={'submit'}
              onHome={true}
            >
              Siguiente
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
