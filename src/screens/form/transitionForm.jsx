import clsx from 'clsx'
import food from '../../../assets/categories/food.jpg'

const TransitionForm = () => {
  return (
    <div
      className={clsx(
        'flex flex-col w-full h-screen items-center justify-around border-2 border-red-900'
      )}
    >
      <div
        className={clsx('flex flex-col w-full h-full items-center border-2')}
      >
        <div
          className={clsx(
            'flex w-4/5 h-[80vw] rounded-full overflow-hidden',
            'md:w-1/5 md:h-[20vw]'
          )}
        >
          <img
            src={food}
            className={clsx(
              'w-full h-full object-cover object-center rounded-full'
            )}
          />
        </div>
        <p className={clsx('text-4xl font-semibold text-center py-10')}>
          Costumbres Alimenticias
        </p>
      </div>
      <button
        className={clsx(
          'text-white py-2 px-8 rounded-xl text-2xl font-semibold tracking-wide bg-GreenPalette cursor-pointer inline-flex items-center justify-center transition ',
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

export default TransitionForm
