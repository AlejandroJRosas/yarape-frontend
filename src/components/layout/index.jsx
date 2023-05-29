import NavBar from './NavBar'

const Layout = (props) => {
  return (
    <div>
      <div className='flex flex-col w-full h-screen bg-[antiquewhite]'>
        <NavBar />
        {props.children}
      </div>
    </div>
  )
}

export default Layout
