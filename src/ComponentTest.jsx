import {/*useState*/useContext } from "react";
import {toggle} from './App';
const ComponentTest = () => {
//   const [dark, setDark] = useState(false);
const darki = useContext(toggle)

  const style = {
    width: "100vw",
    height: "80vh",
    border: "2px solid black",
    color:darki ? "white" : "black",
    background: darki ? "black" : "white",
  };

//   function toggleThemeHandler() {
//     setDark((prevDark) => !prevDark);
//   }
  return (
    <>
      <div style={style}>
        <h1>hello!</h1>
        </div>
      {/* <button value={dark} onClick={toggleThemeHandler}>
        change theme
      </button> */}
    </>
  );
};
export default ComponentTest;
