import React from 'react';
import Table from './table';

const Data = () => {

    const cols=["name","email","mob"]
    let data=[["sashi","sashi@email.com","123456789"],
            ["madhu","madhu@gmail.com","789456123"]]

  return (
    <div>
      <Table col={cols} users={data}/>
    </div>
  );
};

export default Data;


