import React,{useState} from 'react'

const FormExample = () => {
 const [userName,setUserName]=useState("")
 const getUsername=(event)=>{
    setUserName(event.target.value)
 }
 const[newuserdetail,setUserDetails]=useState()
 const Newuser=()=>{
    setUserDetails(userName)
 }
  return (
   <section className='form-section'>
    <h1>hello,{newuserdetail}</h1>
    <div className='form-Div'>
        <input type="text" placeholder='Enter your name'  onChange={getUsername}/>
        <br />
     <button type='submit'onClick={Newuser}>Submit</button>
     </div>
   </section> 
  )
}

export default FormExample