import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPaypal, faGithub, faNpm, faLinkedin, faWordpress } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faHome, faGlobe, faBars, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  // fab
  faPaypal,
  faGithub,
  faNpm,
  faLinkedin,
  faWordpress,

  // far
  faEnvelope,

  // fas
  faHome,
  faGlobe,
  faBars,
  faExternalLinkAlt
)

Vue.component('FAI', FontAwesomeIcon)
