import {Fragment , useState } from 'react'

function ListGroup() {
    const item = [
        'kodai',
        'Madurai'
    ];
  const  [selecteditem , setselected]= useState(-1);
    

   const novalues = () => item.length === 0 && <p> No items Found</p> 
   

  return (
   <Fragment>
    <h1> List </h1>
    {novalues()}
   <ul className='list-group'>
           {item .map((item,  index) =>(
            <li  className= {selecteditem === index ? 'list-group-item active' : 'list-group-item'}key={item} onClick={() => setselected(index)}>{item}</li>
            ))}
   </ul>
   </Fragment>
  )
}

export default ListGroup
 