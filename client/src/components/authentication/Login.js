import { useEffect, useState } from "react"


 function Login(){
    let [load,setload] = useState(true)
    let [username,setusername] = useState("")
    let [password,setpassword] = useState("")
    
    useEffect(()=>{

    },[load])
    async function  handlelogin(e){
        const response = await fetch("login", {
            method: 'POST', 
            mode: 'cors', 
            cache: 'no-cache', 
            credentials: 'same-origin', 
            headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer', 
            body: JSON.stringify({userid:username,password:password}) 
          });
        console.log(response.json())
    }
    return(
       <div class="contact-section">
        <div class="overlay"></div>
        <div class="container">
            <div class="col-md-10 col-lg-8 m-auto">
                <h6 class="title mb-2">Login form</h6>
                <p class="mb-5 error-text"></p>
                    <input onChange={function (e){setusername(e.target.value)}} type="email" name="userid" id="userid" class="form-control" placeholder="Enter Email"requried value={username}/>
                    <input onChange={function (e){setpassword(e.target.value)}} type ="password"name="password" id="password" class="form-control" placeholder="Enter password" value={password}/>
                    <input type="submit" value="Login" class="form-control" onClick={handlelogin}/>
               
            </div>
        </div>
    </div>
    )
}
export default Login