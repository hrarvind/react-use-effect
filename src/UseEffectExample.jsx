import React, { useState, useEffect } from 'react';

function UseEffectExample(props) {
  const [name, setName] = useState(0);

  useEffect(() => {
    localStorage.setItem("name", name);
    return () => {
        console.log("CLeaned up");
        localStorage.clear();
    }
  }, [name]);

  

  return (
    <div>
      <p>Input field change test</p>
      <input type="text" onChange={(e) => {
          setName(e.target.value)
      }} value={name}/>
      <button onClick={() => {
        props.setIsRenderEffect()//on click  this component gets unmounted and localstorage gets cleaned up
      }}>
        Test use effect cleanup
      </button>
    </div>
  );
}

export default UseEffectExample;