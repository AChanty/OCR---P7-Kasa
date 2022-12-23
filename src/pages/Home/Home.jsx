import './home.css'
import Banner from '../../components/Banner/Banner'
import Background from './../../assets/img/banner.png'

function Home() {
   return (
      <div className="home_container">
         <Banner
            text="Chez vous, partout et ailleurs"
            background={Background}
         />
      </div>
   )
}

export default Home
