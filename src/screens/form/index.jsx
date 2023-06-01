import clsx from 'clsx'

import leafBack from '../../assets/categories/leafBack.avif'

const Form = () => {
  return (
    <div className={clsx('w-screen h-screen relative')}>
      <img
        src={leafBack}
        className={clsx(
          'w-full h-full object-cover mix-blend-overlay absolute',
          ''
        )}
      />
      <div className={clsx('text-center font-bold text-5xl')}>hola</div>
    </div>
  )
}

export default Form
