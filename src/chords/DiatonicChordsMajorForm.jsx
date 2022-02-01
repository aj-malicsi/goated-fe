import React from "react";
import {useState} from "react"
import { useForm } from "react-hook-form";




export default function DiatonicChordsMajorForm() {

  const [correct, setCorrect] = useState(0)
  const [wrong, setWrong] = useState(0)
  const [total, setTotal] = useState(0)
  const [key, setKey] = useState('E')

  const { register, handleSubmit, resetField, formState: { errors } } = useForm();
  

  const onSubmit = data => {
    resetField("answer")
  
    //switch

    switch(key){
      case "C":
        if(data.answer === (cMajor[val] + cMajor[val+2] + cMajor[val+4] )){
          console.log(data.answer, (cMajor[val] + cMajor[val+2] + cMajor[val+4] ))
          setCorrect(correct + 1)
          setTotal(total + 1)
  
        }
        else{
          console.log(data.answer, (cMajor[val] + cMajor[val+2] + cMajor[val+4] ))
          setWrong(wrong + 1)
          setTotal(total + 1)
        }
        break;
      
      case "D":
        if(data.answer === (dMajor[val] + dMajor[val+2] + dMajor[val+4] )){
          console.log(data.answer, (dMajor[val] + dMajor[val+2] + dMajor[val+4] ))
          setCorrect(correct + 1)
          setTotal(total + 1)
  
        }
        else{
          console.log(data.answer, (dMajor[val] + dMajor[val+2] + dMajor[val+4] ))
          setWrong(wrong + 1)
          setTotal(total + 1)
        }
        break;

      case "E":
        if(data.answer === (eMajor[val] + eMajor[val+2] + eMajor[val+4] )){
          console.log(data.answer, (eMajor[val] + eMajor[val+2] + eMajor[val+4] ))
          setCorrect(correct + 1)
          setTotal(total + 1)
  
        }
        else{
          console.log(data.answer, (eMajor[val] + eMajor[val+2] + eMajor[val+4] ))
          setWrong(wrong + 1)
          setTotal(total + 1)
        }
        break;

      
      

    }
        
    }

    var notes = ['C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab','A', 'A#/Bb', 'B', 
    'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab','A', 'A#/Bb', 'B' ]
    let val = Math.floor(Math.random() * 8)
    let display = notes[val]

    var cMajor = ['C', 'D', 'E', 'F', 'G', 'A', 'B',
    'C', 'D', 'E', 'F', 'G', 'A', 'B']


    if(key === 'C'){
        let display = cMajor[val]
        return(
            <>
            <p>You're in the key of {key}</p>
            <p>what are the notes of {display}</p>

            <p>correct: {correct}</p>
            <p>wrong: {wrong}</p>
            <p>total: {total}</p>

            <form onSubmit={handleSubmit(onSubmit)}>

            <input defaultValue="" {...register("answer")} />
            
            <input type="submit" />
            </form>
            
            </>
        )
  
    }

    var dMajor = ['D', 'E', 'F#', 'G', 'A', 'B', 'C#',
    'D', 'E', 'F#', 'G', 'A', 'B', 'C#']

    if(key === 'D'){
      let display = dMajor[val]
      return(
          <>
          <p>You're in the key of {key}</p>
          <p>what are the notes of {display}, {val+1}</p>

          <p>correct: {correct}</p>
          <p>wrong: {wrong}</p>
          <p>total: {total}</p>

          <form onSubmit={handleSubmit(onSubmit)}>

          <input defaultValue="" {...register("answer")} />
          
          <input type="submit" />
          </form>
          
          </>
      )
    }

    var eMajor = ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#',
    'E', 'F#', 'G#', 'A', 'B', 'C#', 'D#' ]

    if(key === 'E'){
      let display = eMajor[val]
      return(
          <>
          <p>You're in the key of {key}</p>
          <p>what are the notes of {display}, {val+1}</p>

          <p>correct: {correct}</p>
          <p>wrong: {wrong}</p>
          <p>total: {total}</p>

          <form onSubmit={handleSubmit(onSubmit)}>

          <input defaultValue="" {...register("answer")} />
          
          <input type="submit" />
          </form>
          
          </>
      )
    }



    var fMajor = ['F', 'G', 'A', 'Bb', 'C', 'D', 'E', 
    'F', 'G', 'A', 'Bb', 'C', 'D', 'E']

    var gMajor = ['G', 'A', 'B', 'C', 'D', 'E', 'F#',
    'G', 'A', 'B', 'C', 'D', 'E', 'F#']

    var aMajor = ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#',
    'A', 'B', 'C#', 'D', 'E', 'F#', 'G#']

    var bMajor = ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#',
    'B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#']
    


  return (
    <>
    <p>what are the notes of {display} Major?</p>

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