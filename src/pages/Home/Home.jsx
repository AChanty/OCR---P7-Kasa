import './home.css'
import Banner from '../../components/Banner/Banner'
import MobileBackground from './../../assets/img/banner.png'
import Card from '../../components/Card/Card'

function Home() {
   return (
      <div className="home_container">
         <Banner
            text="Chez vous, partout et ailleurs"
            background={MobileBackground}
         />
         <Card />
      </div>
   )
}

export default Home
