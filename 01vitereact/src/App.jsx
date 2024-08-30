import Chai from "./chai"

function App() {
  const username="Utkarsh Gupta";
  return (
    // <>  fragmentation:-//in vite we return only one element in return statement so for returning many element in statement we use div tag and for not using div tag again and again we se empty bracket this is called as fragmentation.
    <>
    <Chai />
    <h1>chai is ready</h1>
    <p>Hello how are you {username}</p>  /*//here between { username }  this is evaulated expression the final value of username is visible */
    </>
  )
}

export default App
