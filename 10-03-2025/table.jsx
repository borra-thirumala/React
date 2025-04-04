import React from 'react';

const Table = (cols) => {
    console.log(cols)
  return (
    <div>
      <table border={"3px"}>
        <thead>
          <tr style={{color:"red",fontSize:"25px"}}>
            {cols.col.map((e,i)=>{
              return <td key={i}>{e}</td>
            })}
          </tr>
        </thead>
        <tbody>
          {cols.users.map((e,i)=>{
            return <tr key={i}>{e.map((ele,i)=>{
              return <td key={i}>{ele}</td>
            })}</tr>
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
