import { Link } from "react-router-dom";
import NavBar from "../common/NavBar";
import DiatonicChordsDisplay from "./DiatonicChordsDisplay";
import DiatonicChordsMajorForm from "./DiatonicChordsMajorForm";



export default function ChordsIndex(){
    return(
        <>
        <NavBar />
        <br/>

        <Link to="/chords/diatonic" element={<DiatonicChordsDisplay />}> Chords in Major Keys </Link>
        </>
    )
}