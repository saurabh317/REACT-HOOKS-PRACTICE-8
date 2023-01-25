import React ,{ useState, /*useEffect,*/ } from 'react';
import './App.css';
import ComponentTest from './ComponentTest';
export const toggle = React.createContext();

function App() {
  const [dark,setDark] = useState(false);
  
  // const[state,setState] = useState('post');
  // const[item,setItem] = useState([]);

  // useEffect(()=>{
  //   fetch(`https://jsonplaceholder.typicode.com/${state}`)
  //   .then(response => response.json())
  //   .then(json => setItem(json))
  // },[state])

  function toggler(){
    setDark(prevTheme => !prevTheme)

  }



  return (
    <>
    <toggle.Provider value={dark}>
    {/* <button onClick={() =>setState('post')}>posts</button>
    <button onClick={() =>setState('users')}>users</button>
    <button onClick={() =>setState('comments')}>comments</button>
    <div>
      <h1>{state}</h1>
      </div>
      <div style={style}>
        {JSON.stringify(item)}
      </div> */}
      <button value={dark} onClick={toggler}>change Theme</button>
      <ComponentTest/>
      </toggle.Provider>
    </>
  )
}
   

export default App;

