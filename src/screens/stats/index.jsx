import clsx from 'clsx'
import logo from '../../../assets/logo.png'
import DoughnutChart from '../../charts/doughnut'

const cantidad = [
  { x: 'guayana', y: 50 },
  { x: 'caracas', y: 45 },
  { x: 'no pertenece a la ucab', y: 10 }
]

export const Stats = () => {
  return (
    <>
      <div className={clsx('flex flex-col items-center justify-center')}>
        <img src={logo} />
        <p
          className={clsx(
            'm-0 font-bold text-gray-600 text-5xl px-6 py-7 subpixel-antialiased'
          )}
        >
          Yarapë
        </p>
      </div>
      <div className='flex flex-col h-full bg-gray-300 items-center'>
        <label className='text-xl md:text-3xl font-medium text-center py-4'>
          Vista Estadística
        </label>
        {/* todos los recuadros */}
        <div className='flex flex-col items-center justify-center md:flex-wrap md:flex-row border-2 border-black w-11/12 p-4 mb-4'>
          <div className='flex flex-col items-center justify-center border-2 border-black w-full my-2 md:my-0 py-4 md:w-80'>
            <label className='text-lg'>Cantidad de Encuestados</label>
            <DoughnutChart data={cantidad} label={'Cantidad'} />
          </div>
          <div className='flex flex-col items-center justify-center border-2 border-black w-full my-2 md:my-0 py-4 md:w-80'>
            <label className='text-lg'>Cantidad de Encuestados</label>
            <DoughnutChart data={cantidad} label={'Cantidad'} />
          </div>
        </div>
      </div>
    </>
  )
}
