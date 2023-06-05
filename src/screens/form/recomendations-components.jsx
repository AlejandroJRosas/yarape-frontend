import transportImg from '../../../assets/results/transport.png'
import foodImg from '../../../assets/results/food.png'
import waterImg from '../../../assets/results/water.png'
import shoppingImg from '../../../assets/results/shopping.png'
import energyImg from '../../../assets/results/energy.png'
import greatImg from '../../../assets/results/great.png'
import clsx from 'clsx'

const result = {
  bad: [
    {
      desc: 'Trata de usar medios de transporte eco-amigables',
      img: transportImg
    },
    {
      desc: 'Intenta incluir comidas vegetarianas en tu menú',
      img: foodImg
    },
    {
      desc: 'No tardes tanto bañándote',
      img: waterImg
    },
    {
      desc: 'Compra ropa de segunda mano',
      img: shoppingImg
    },
    {
      desc: 'Trata de hacer uso de bombillos ahorradores',
      img: energyImg
    }
  ],
  normal: [
    {
      desc: 'Trata de usar medios de transporte eco-amigables',
      img: transportImg
    },
    {
      desc: 'No comas tantas carnes',
      img: foodImg
    },
    {
      desc: 'No uses tanto el aire acondicionado',
      img: energyImg
    }
  ],
  good: [
    {
      desc: 'Excelente! Tienes un consumo muy eficiente, sigue así", "Promueve tus hábitos con el mundo!',
      img: greatImg
    }
  ]
}

export const RecomendationComponent = ({ status, number }) => {
  return (
    <div
      className={clsx(
        'flex flex-row md:flex-row h-40 md:h-40 w-full text-center mx-3 rounded-2xl px-4 my-4 md:my-0 justify-center',
        { 'h-auto': status === 'good', 'flex-col': status === 'good' },
        {
          'bg-blue-500': result[status][number].img === transportImg,
          'bg-yellow-400':
            result[status][number].img === foodImg ||
            result[status][number].img === energyImg,
          'bg-red-500':
            result[status][number].img === shoppingImg ||
            result[status][number].img === waterImg,
          'bg-GreenPalette': result[status][number].img === greatImg
        }
      )}
    >
      <img src={result[status][number].img} className='object-contain' />
      <label className='self-center w-3/5 text-white font-semibold text-lg'>
        {result[status][number].desc}
      </label>
    </div>
  )
}
