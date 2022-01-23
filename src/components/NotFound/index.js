import "./style.css"
import {Link} from 'react-router-dom'
export default function NotFound() {
    return(
        <div className='notFound'>
        <h1>404</h1>
        <h2>pagina nao encontrada</h2>
        <Link to='/'> voltar para home</Link>
        </div>
    )
}