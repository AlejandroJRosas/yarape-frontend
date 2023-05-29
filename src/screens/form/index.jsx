import leafBack from '../../assets/categories/leafBack.avif'

const Form = () => {
  return (
    <div className='w-screen h-screen relative'>
      <img
        src={leafBack}
        className='w-full h-full object-cover mix-blend-overlay absolute'
      />
      <div className='text-center font-bold text-5xl'>hola</div>
    </div>
  )
}

export default Form
