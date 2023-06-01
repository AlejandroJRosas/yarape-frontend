import clsx from 'clsx'
import food from '../../assets/categories/food.jpg'

const Form = () => {
  return (
    <div
      className={clsx(
        'flex flex-col w-screen h-screen justify-around items-center'
      )}
    >
      <div className={clsx('flex flex-col items-center')}>
        <div className={clsx('w-4/5 h-[80vw] rounded-full overflow-hidden')}>
          <img
            src={food}
            className={clsx(
              'w-full h-full object-cover object-center rounded-full'
            )}
          />
        </div>
        <p className={clsx('text-4xl font-semibold text-center py-10')}>
          Relacionado a la Alimentación
        </p>
      </div>
      <button
        className={clsx(
          'text-white py-2 px-8 rounded-xl text-2xl font-semibold tracking-wide bg-GreenPalette cursor-pointer inline-flex items-center justify-center isolate transition ',
          '',
          'hover:bg-[#2db946] hover:shadow-xl outline-none ring-GreenPalette ring-offset-2 focus-visible:ring-2 focus:scale-[0.95]',
          'disabled:bg-green-500/50 disabled:cursor-not-allowed disabled:shadow'
        )}
      >
        Siguiente
      </button>
    </div>
  )
}

export default Form
