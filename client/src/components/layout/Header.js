
import {useEffect,useState}from 'react'
import {useNavigate  } from 'react-router-dom'
 function  Header() {
  const navigate = useNavigate()
  let [load,setload] = useState(true)
  useEffect( ()=>{
    let user =  getuser().then(user=>{

      if(user === "not found"){
      
        navigate("/login")
      }
    })
    

   
  },[load])
  async function getuser(){
    let res = await fetch("/login")
    let user = await res.json()
    
    setload(false)
    return user.user
    
    
  }
  return(
    <>
    
        <nav class="page-navbar" data-spy="affix" data-offset-top="10">
    <ul class="nav-navbar container"> 
            
            <li class="nav-item"><a href="/login" class="nav-link">a </a></li>
            <li class="nav-item"><a href="/logout" class="nav-link">a </a></li>  
    </ul>
  </nav>
    </>
  )

 
}

export default Header;
