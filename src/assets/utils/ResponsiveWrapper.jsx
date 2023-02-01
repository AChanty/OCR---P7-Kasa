import ResponsiveRules from './ResponsiveRules'

// ce composant utilitaire sert de wrapper pour ResponsiveRules.js, en prenant les mêmes données (breakpoint, contentA, contentB)
// et les transmet à ResponsiveRules.js, pour permettre une utilisation de ResponsiveRules.js plus simple et lisible dans l'application

function ResponsiveWrapper({ breakpoint, contentA, contentB }) {
   return ResponsiveRules(breakpoint, contentA, contentB)
}

export default ResponsiveWrapper
