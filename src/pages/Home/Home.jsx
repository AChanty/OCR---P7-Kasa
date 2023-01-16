import './home.css'
import Banner from '../../components/Banner/Banner'
import MobileBackground from './../../assets/img/banner.png'
import DesktopBackground from './../../assets/img/desktop-banner.png'
import Card from '../../components/Card/Card'
import ResponsiveRules from '../../../src/assets/utils/Responsive'
import Logements from './../../assets/datas/logements.json'

function Home() {
   return (
      <div className="main-wrapper">
         {ResponsiveRules(
            992, // change l'image de fond lorsque l'écran est inférieur/supérieur à 992px
            <Banner
               text="Chez vous, partout et ailleurs"
               background={DesktopBackground}
            />,
            <Banner
               text="Chez vous, partout et ailleurs"
               background={MobileBackground}
            />
         )}
         <div className="home_cards-container">
            <div className="card-container">
               {Logements.map(
                  // créé un div.card-item pour chaque objet disponible dans logement.json
                  (logement, index) => (
                     <Card
                        link={`/logement/${logement.id}`}
                        key={index}
                        title={logement.title}
                        cover={logement.cover}
                     />
                  )
               )}
            </div>
         </div>
      </div>
   )
}

export default Home
