import { createContext, useContext, useEffect, useState } from "react";
const MyText = createContext();  

function App() {

//GLOBAL CONSTS
const [state, toggleState] = useState(true) //state toggler
const [clickScreen, toggleClick] = useState(0) //clickScreen counter


// USEEFFECTS
useEffect(() => {
  document.addEventListener('click', handleClickScreen) 
  return() => document.removeEventListener('click', handleClickScreen)
}
);

useEffect(() => {
  console.log(state); //toggling state log
}, [state]
)


// HANDLERS
function handleState(){
  toggleState((prevState) => !state)
};

function handleClickScreen(event){
  toggleClick((prevState) => prevState + 1)
}



  return (
    <>
    <h1>Você clicou na página inteira {clickScreen} vezes

    </h1>
    <MyText.Provider value={{ text: 'Toggle State'}}> {/* exemplo de useContext */}
      
    <Button click={() => handleState()}></Button>{/* passing a function through components*/}

    </MyText.Provider>
    </>
  );
}

function Button(props){

  const Text = useContext(MyText)

  return (
    <button onClick={props.click}>{Text.text}</button>
  );
}

export default App;
