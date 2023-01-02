import './home.css'
import Banner from '../../components/Banner/Banner'
import MobileBackground from './../../assets/img/banner.png'
import Card from '../../components/Card/Card'

function Home() {
   return (
      <div className="main-wrapper">
         <Banner
            text="Chez vous, partout et ailleurs"
            background={MobileBackground}
         />
         <div className="home_cards-container">
            <Card />
         </div>
      </div>
   )
}

export default Home
