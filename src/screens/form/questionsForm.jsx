import { ImageComponent } from '../../components/imageComponent'
import categoriesImagesHash from '../../../assets/categories'
import transportImg from '../../../assets/categories/transport.jpg'
// import waterImg from '../../../assets/categories/water.jpg'

export const QuestionsForm = () => {
  return (
    <div className='flex flex-col h-screen'>
      <div className='h-2/6'>
        <ImageComponent
          src={transportImg}
          hash={categoriesImagesHash[0].blurhash}
          compClassName={'object-cover w-full h-full'}
        />
      </div>
      <div className='self-center text-2xl font-semibold'>Transporte</div>
      <form>form</form>
    </div>
  )
}
