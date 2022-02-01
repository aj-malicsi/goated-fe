import { Link } from "react-router-dom";
import NavBar from "../common/NavBar";
import DiatonicChordsMajorForm from "./DiatonicChordsMajorForm";



export default function ChordsIndex(){
    return(
        <>
        <NavBar />
        <br/>

        <Link to="/chords/diatonic/major" element={<DiatonicChordsMajorForm />}> Chords in Major Keys </Link>
        </>
    )
}