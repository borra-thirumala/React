/*import React from 'react'
const Child = (props) =>{
    console.log(props,"Child")
    return (
        <div>
            Child
        </div>
    )
}
export default Child*/
import React from 'react';

const Child = (props) => {
  console.log(props, "Child");
  return (
    <div>
      Child Component - Prop: {props.p}
    </div>
  );
};

export default Child;

