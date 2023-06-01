import clsx from 'clsx'

const PersonalForm = () => {
  return (
    <div className={clsx('h-screen flex items-center justify-center')}>
      <form className={clsx('flex rounded-lg w-1/2')}>
        <div className={clsx('flex text-gray-700 p-20')}>
          <div className='mt-6'>
            <div className='pb-4'>
              <label htmlFor='name'>Hola! ¿Cuál es tu nombre?</label>
              <input type='text' name='name' placeholder='Ingresa tu nombre' />
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default PersonalForm
