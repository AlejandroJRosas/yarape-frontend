import leafBackImg from '../../../assets/categories/leafBack.avif'

export const Recomendations = () => {
  return (
    <>
      <div className='flex flex-col h-screen text-center'>
        <div
          className='bg-cover h-full w-full flex flex-col items-center justify-around text-center'
          style={{ backgroundImage: `url(${leafBackImg})` }}
        >
          <label className='text-4xl font-semibold'>Recomendaciones</label>
          <label className='text-2xl font-medium'>
            Cómo puedes reducir tu huella:
          </label>
          <div className='flex flex-col w-4/5 md:flex-row'>
            <div className='flex flex-row bg-yellow-500 w-full'>
              <img />
              <label>daf</label>
            </div>
            <div className='flex flex-row bg-yellow-500 w-full'>dfa</div>
            <div className='flex flex-row bg-yellow-500 w-full'>dfa</div>
          </div>
        </div>
      </div>
    </>
  )
}
