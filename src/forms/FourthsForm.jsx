import React from "react";
import { useForm } from "react-hook-form";

export default function FifthsForm() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
     if(data.answer === notes[val + 5]){
         console.log("correct", data.answer, display)
         correct += 1
         console.log("score", correct, wrong, total)
     }
     else{
        console.log("wrong")
        console.log("score", correct, wrong, total)

     }
       
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
    <p>{display}</p>

    <form onSubmit={handleSubmit(onSubmit)}>

      <input defaultValue="" {...register("answer")} />

      
      
      
      <input type="submit" />
    </form>
    </>
  );
}