import ResponsiveRules from './ResponsiveRules'

// ce composant utilitaire sert de wrapper pour ResponsiveRules, en prenant les mêmes données (breakpoint, contentA, contentB)
// et les transmet à ResponsiveRules, pour permettre une utilisation de ResponsiveRules plus simple et lisible dans l'application

function ResponsiveWrapper({ breakpoint, contentA, contentB }) {
   return ResponsiveRules(breakpoint, contentA, contentB)
}

export default ResponsiveWrapper
