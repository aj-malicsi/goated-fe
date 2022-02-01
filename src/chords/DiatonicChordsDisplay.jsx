import { useState } from "react";
import { useForm } from "react-hook-form";
import NavBar from "../common/NavBar";
import DiatonicChordsMajorForm from "./DiatonicChordsMajorForm";

export default function DiatonicChordsDisplay(){

    const [key, setKey] = useState('C')

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        setKey(data.key)
    }
     
 
    return (
        <>
        <NavBar />
        <form onSubmit={handleSubmit(onSubmit)}>
            <select {...register("key")}>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
                <option value="F">F</option>
                <option value="G">G</option>
                <option value="A">A</option>
                <option value="B">B</option>

            </select>
            <input type="submit" />
        </form>

        <DiatonicChordsMajorForm key={propKey}/>
        </>
      
    );
}