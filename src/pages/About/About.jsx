import './about.css'
import Collapse from './../../components/Collapse/Collapse.jsx'
import Image from './../../assets/img/about-background.jpg'
import MobileImage from './../../assets/img/about-responsive-background.png'
import ResponsiveWrapper from '../../assets/utils/ResponsiveWrapper'

const aboutContent = [
   {
      header: 'Fiabilité',
      text: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
   },
   {
      header: 'Respect',
      text: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
   },
   {
      header: 'Service',
      text: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
   },
   {
      header: 'Sécurité',
      text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
   },
]

function About() {
   return (
      <div className="main-wrapper">
         <ResponsiveWrapper
            // affiche une image différente en fonction de la taille de l'écran
            breakpoint={992}
            contentA={
               <img className="about_image" src={MobileImage} alt="about" />
            }
            contentB={<img className="about_image" src={Image} alt="about" />}
         />
         <div className="about_collapses-wrapper">
            {/* parcourt le tableau "aboutContent" pour créer un élément "Collapse" pour chaque entrée présente */}
            {aboutContent.map((aboutContent, index) => (
               <Collapse
                  key={index}
                  headerName={aboutContent.header}
                  content={<p>{aboutContent.text}</p>}
               />
            ))}
         </div>
      </div>
   )
}

export default About
