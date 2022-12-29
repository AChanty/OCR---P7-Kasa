import './about.css'
import Collapse from './../../components/Collapse/Collapse.jsx'
import Image from './../../assets/img/about-background.jpg'

function About() {
   return (
      <div className="main-wrapper">
         <img className="about_image" src={Image} alt="about" />
         <Collapse
            headerName="Fiabilité"
            content={
               <p>
                  Les annonces postées sur Kasa garantissent une fiabilité
                  totale. Les photos sont conformes aux logements, et toutes les
                  informations sont régulièrement vérifiées par nos équipes.
               </p>
            }
         />

         <Collapse
            headerName="Respect"
            content={
               <p>
                  La bienveillance fait partie des valeurs fondatrices de Kasa.
                  Tout comportement discriminatoire ou de perturbation du
                  voisinage entraînera une exclusion de notre plateforme.
               </p>
            }
         />

         <Collapse
            headerName="Service"
            content={
               <p>
                  Nos équipes se tiennent à votre disposition pour vous fournir
                  une expérience parfaite. N'hésitez pas à nous contacter si
                  vous avez la moindre question.
               </p>
            }
         />

         <Collapse
            headerName="Sécurité"
            content={
               <p>
                  La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes
                  que pour les voyageurs, chaque logement correspond aux
                  critères de sécurité établis par nos services. En laissant une
                  note aussi bien à l'hôte qu'au locataire, cela permet à nos
                  équipes de vérifier que les standards sont bien respectés.
                  Nous organisons également des ateliers sur la sécurité
                  domestique pour nos hôtes.
               </p>
            }
         />
      </div>
   )
}

export default About
