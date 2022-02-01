import React from "react";
import {useState} from "react"
import { useForm } from "react-hook-form";




export default function DiatonicChordsMajorForm() {

  const [correct, setCorrect] = useState(0)
  const [wrong, setWrong] = useState(0)
  const [total, setTotal] = useState(0)
  const [key, setKey] = useState('B')

  const { register, handleSubmit, resetField, formState: { errors } } = useForm();

  let scale = []
  

  const onSubmit = data => {
    resetField("answer")
  
    //switch

    switch(key){
      case "C":
        scale  = cMajor
        if(data.answer === (scale[val] + scale[val+2] + scale[val+4] )){
          console.log(data.answer, (scale[val] + scale[val+2] + scale[val+4] ))
          setCorrect(correct + 1)
          setTotal(total + 1)
  
        }
        else{
          console.log(data.answer, (scale[val] + scale[val+2] + scale[val+4] ))
          setWrong(wrong + 1)
          setTotal(total + 1)
        }
        break;
      
      case "D":
        scale  = dMajor
        if(data.answer === (scale[val] + scale[val+2] + scale[val+4] )){
          console.log(data.answer, (scale[val] + scale[val+2] + scale[val+4] ))
          setCorrect(correct + 1)
          setTotal(total + 1)
  
        }
        else{
          console.log(data.answer, (scale[val] + scale[val+2] + scale[val+4] ))
          setWrong(wrong + 1)
          setTotal(total + 1)
        }
        break;

      case "E":
        scale  = eMajor
        if(data.answer === (scale[val] + scale[val+2] + scale[val+4] )){
          console.log(data.answer, (scale[val] + scale[val+2] + scale[val+4] ))
          setCorrect(correct + 1)
          setTotal(total + 1)
  
        }
        else{
          console.log(data.answer, (scale[val] + scale[val+2] + scale[val+4] ))
          setWrong(wrong + 1)
          setTotal(total + 1)
        }
        break;

      case "F":
        scale  = fMajor
        if(data.answer === (scale[val] + scale[val+2] + scale[val+4] )){
          console.log(data.answer, (scale[val] + scale[val+2] + scale[val+4] ))
          setCorrect(correct + 1)
          setTotal(total + 1)
  
        }
        else{
          console.log(data.answer, (scale[val] + scale[val+2] + scale[val+4] ))
          setWrong(wrong + 1)
          setTotal(total + 1)
        }
        break;

        
      case "G":
        scale  = gMajor
        if(data.answer === (scale[val] + scale[val+2] + scale[val+4] )){
          console.log(data.answer, (scale[val] + scale[val+2] + scale[val+4] ))
          setCorrect(correct + 1)
          setTotal(total + 1)
  
        }
        else{
          console.log(data.answer, (scale[val] + scale[val+2] + scale[val+4] ))
          setWrong(wrong + 1)
          setTotal(total + 1)
        }
        break;

        case "A":
        scale  = aMajor
        if(data.answer === (scale[val] + scale[val+2] + scale[val+4] )){
          console.log(data.answer, (scale[val] + scale[val+2] + scale[val+4] ))
          setCorrect(correct + 1)
          setTotal(total + 1)
  
        }
        else{
          console.log(data.answer, (scale[val] + scale[val+2] + scale[val+4] ))
          setWrong(wrong + 1)
          setTotal(total + 1)
        }
        break;

        case "B":
          scale  = bMajor
          if(data.answer === (scale[val] + scale[val+2] + scale[val+4] )){
            console.log(data.answer, (scale[val] + scale[val+2] + scale[val+4] ))
            setCorrect(correct + 1)
            setTotal(total + 1)
    
          }
          else{
            console.log(data.answer, (scale[val] + scale[val+2] + scale[val+4] ))
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
            <p>You're in the key of {key}, {val+1}</p>
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

    if(key === 'F'){
      let display = fMajor[val]
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

    var gMajor = ['G', 'A', 'B', 'C', 'D', 'E', 'F#',
    'G', 'A', 'B', 'C', 'D', 'E', 'F#']

    if(key === 'G'){
      let display = gMajor[val]
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

    var aMajor = ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#',
    'A', 'B', 'C#', 'D', 'E', 'F#', 'G#']

    if(key === 'A'){
      let display = aMajor[val]
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

    

    var bMajor = ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#',
    'B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#']

    if(key === 'B'){
      let display = bMajor[val]
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