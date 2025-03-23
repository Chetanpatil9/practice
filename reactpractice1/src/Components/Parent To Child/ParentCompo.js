import React from 'react';
import ChildCompo from './ChildCompo';

function ParentCompo() {
  const data = {
    name: 'John Doe',
    age: 25,
    city: 'New York',
  };

  return (
    <div>
      <ChildCompo data={data} />
    </div>
  );
}

export default ParentCompo;
