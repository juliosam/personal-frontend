import '../styles/globals.css'
import NavBar from "../components/navBar"

function MyApp({ Component, pageProps }) {
  return (
    <div className='bg-indigo-500 '>
      <NavBar/>
      <div className='bg-indigo-100 px-10 pb-1'>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
