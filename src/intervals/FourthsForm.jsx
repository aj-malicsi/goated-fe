import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import NavBar from "../common/NavBar";

export default function FifthsForm() {

  const [correct, setCorrect] = useState(0)
  const [wrong, setWrong] = useState(0)
  const [total, setTotal] = useState(0)

  const { register, handleSubmit, resetField, formState: { errors } } = useForm();
  const onSubmit = data => {
    resetField("answer")

    if(data.answer === notes[val + 5]){
        console.log("correct", data.answer, display)
        let temp = correct + 1
        
        setCorrect(temp)
        
        setTotal(total + 1)
    
    }
    else{
       console.log("wrong")
       let temp = wrong + 1
        
       setWrong(temp)
       setTotal(total + 1)
   

    }
       
    }

    var notes = ['C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab','A', 'A#/Bb', 'B', 
    'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab','A', 'A#/Bb', 'B' ]
    let val = Math.floor(Math.random() * 13)
    let display = notes[val]
    


  return (
    <>
    <NavBar />
    <p> what is the fourth of {display}?</p>

    <p>correct: {correct}</p>
    <p>wrong: {wrong}</p>
    <p>total: {total}</p>

    <form onSubmit={handleSubmit(onSubmit)}>

      <input defaultValue="" {...register("answer")} />      
      
      <input type="submit" />
    </form>
    </>
  );
}