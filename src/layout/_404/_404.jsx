import "./_404.scss"

export function Show404() {

    return(
        <div className="show404">
            <div className="_404">404</div>
            <p className="p">Oups! La page que vous demandez n'existe pas.</p>
            <a className='a' href="/">Retourner sur la page d’accueil</a>       
        </div>
)
}