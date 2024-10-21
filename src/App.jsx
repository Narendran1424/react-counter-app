//  React hook = special function that allows functional components
//               to use React features without writing class components (React v16.8)
//               (useState, useEffect, useContext, useReducer, useCallback, and more)

//               A React hook that allows the creation of a stateful variable
//               AND a setter function to update its value in Virtual DOM.
//               [name, setName]

import Counter from "./Counter.jsx";

function App() {
  return(
    <Counter/>
    
  );
}

export default App