import {Link} from 'react-router-dom'

export default function NavBar(){
    return(
        <>
        <Link to="/">Home</Link>
        <Link to="/intervals">Intervals</Link>
        <Link to="/chords">Chords</Link>
        </>
    )
}