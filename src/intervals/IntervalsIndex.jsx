import {Link} from 'react-router-dom'
import NavBar from '../common/NavBar'

export default function IntervalsIndex(){
    return(
        <>
        <NavBar />
        <Link to="/intervals/fifths">Fifths</Link> <br/>
        <Link to="/intervals/fourths">Fourths</Link><br/>
        <Link to="/intervals/thirds">Thirds</Link><br/>
        
        </>
    )
    
}