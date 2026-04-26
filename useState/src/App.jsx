import { useState } from 'react'
const App = () => {

  const [name, setName] = useState('Ashish');
  const [age, setAge] = useState(28);

  function changeName () {
    setName("Jeni");
  }

  function changeAge (){
    setAge(26);
  }

  return (
    <div>
      <h1>My name is {name}</h1>
      <h2>Age is {age}</h2>
      <button onClick={ function () {
        // setName("Aiyana")
        // setAge(5) 
        changeAge()
        changeName()
      }}>Change user info</button>
    </div>
  )
}

export default App