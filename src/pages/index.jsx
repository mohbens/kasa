import Home from './D_Home'
import NotFound from './D_404'
import FicheLogement from './D_Fiche-Logement'
import APropos from './D_A-Propos'
function getPages() {
  return [
    {
      path: '/',
      label: 'Acceuil',
      component: Home,
      nav: true,
    },
    {
      path: '/about',
      label: 'A Propos',
      component: APropos,
      nav: true,
    },
    {
      path: '/details/:id',
      label: 'FicheLogement',
      component: FicheLogement,
    },
  ]
}

export {Home, NotFound, FicheLogement, APropos}
export default getPages
