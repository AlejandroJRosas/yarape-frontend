import { ImageComponent } from '../../components/imageComponent'
import categoriesImagesHash from '../../../assets/categories'
import transportImg from '../../../assets/categories/transport.jpg'
import { Button } from '../../components/button'
// import waterImg from '../../../assets/categories/water.jpg'

export const QuestionsForm = () => {
  return (
    <div className='flex flex-col h-screen'>
      <div className='flex h-3/6'>
        <ImageComponent
          src={transportImg}
          hash={categoriesImagesHash[0].blurhash}
          compClassName={'object-cover w-full h-full'}
        />
      </div>
      <div className='self-center text-2xl font-semibold'>Transporte</div>
      <form className='flex flex-col h-full items-center justify-around'>
        <label className='text-3xl font-bold'>1-¿Pregunta?</label>
        <div className='flex flex-col'>
          <Button className={'bg-'}>Opcion</Button>
          <Button className={'bg-'}>Opcion</Button>
          <Button className={'bg-'}>Opcion</Button>
          <Button className={'bg-'}>Opcion</Button>
        </div>
        <Button size={'large'} isEnabled={false}>
          Siguiente
        </Button>
      </form>
    </div>
  )
}
