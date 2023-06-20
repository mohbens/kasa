import Home from "./D_Home"
import NotFound from "./D_404"
import FicheLogement from "./D_Fiche-Logement"
import APropos from "./D_A-Propos"
function getPages(){
    return [
        {
            path: '/',
            label: 'Home',
            component: Home,
            nav: true
        },
        {
            path: '/APropos',
            label: 'APropos',
            component: APropos,
            nav: true
        },
        {
            path: '/details/:id',
            // path: '/:id',
            label: 'FicheLogement',
            component: FicheLogement
        },

        // '/': Home,
        // '*': NotFound,
        // 'fiche': FicheLogement,
        // '/aboutUs': APropos,
    ]
}


export {Home,NotFound,FicheLogement,APropos}
export default getPages