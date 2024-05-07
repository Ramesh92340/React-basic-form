import React,{useState} from 'react'

const SignIn = () => {
    const[data, setData] = useState({
        name:"",
        nomiee:"",
        email:"",
        gender:"",
        dob:"",
        browse:"",
        password:"",
    })

    const[nameFinal,setNameFinal] = useState();
    const[finalEmail,setFinalEmail] = useState();
    const[final,setFinal] = useState();
    const[brows,setBrows] = useState();
   
    const{name,email,gender,dob,browse,password,nomiee} = data;

    const changeHandler = (e) => {
        setData({...data,  [e.target.name] : e.target.value });
        console.log(data)
    }

    const SubmitHandler = (e) =>{
        e.preventDefault();
        // console.log(data,"finaldata")
        setNameFinal(data.name);
        setFinalEmail(data.gender)
        setFinal(data.dob)
        setBrows(data.browse)
        setFinalEmail(data.password)
        setFinalEmail(data.email)


    }

  return (
    <>
        <form onSubmit={SubmitHandler}>
           Name   -   <input type='text' placeholder='name' onChange={changeHandler} name='name' value={name} required/><br/>
           nomiee -    <input type='text' placeholder='name' onChange={changeHandler} name='nomiee' value={nomiee} /><br/>
           Gender -  <input type="radio" onChange={changeHandler} name="gender" value={gender}/>male
                     <input type='radio' onChange={changeHandler} name="gender" value={gender}/>female<br/>
           Email  -   <input type='email' placeholder='Email' onChange={changeHandler} name='email' value={email} required/><br/>          
           D.O.B  -   <input type='date'onChange={changeHandler} name="dob" value={dob} min="2000-01-01"/><br/>
           Photo  -   <input type="file"onChange={changeHandler}name="browse" value={browse} placeholder='img.. upload'/><br/>
           Password - <input type='password'onChange={changeHandler}     name="password" value={password} placeholder='........' /><br/> 
            <input type='submit'/>
        </form>

        <h1>{nameFinal}</h1>
        <h1>{finalEmail}</h1>
        <h1>{final}</h1>
        <h1>{brows}</h1>
    </>
  )
}

export default SignIn