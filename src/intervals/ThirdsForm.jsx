import React from "react";
import { useForm } from "react-hook-form";
import NavBar from "../common/NavBar";

export default function FifthsForm() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
     if(data.answer === notes[val + 4]){
         console.log("correct", data.answer, display)
         console.log("score", correct, wrong, total)
     }
     else
        console.log("wrong")
    }

    var notes = ['C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab','A', 'A#/Bb', 'B', 
    'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab','A', 'A#/Bb', 'B' ]
    let val = Math.floor(Math.random() * 13)
    let display = notes[val]
    let correct = 0
    let wrong = 0
    let total = correct + wrong


  return (
    <>
    <NavBar />
    <p>what is the third of {display}</p>

    <form onSubmit={handleSubmit(onSubmit)}>

      <input defaultValue="" {...register("answer")} />

      
      
      
      <input type="submit" />
    </form>
    </>
  );
}