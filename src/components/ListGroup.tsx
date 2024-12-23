
import {Fragment , useState } from 'react'
interface Props{
  items : string[];
  heading : string;
  onSelectItem : (item :string) => void;
}
function ListGroup({items, heading ,onSelectItem} : Props) {
    
  const  [selecteditem , setselected]= useState(-1);
    

   const novalues = () => items.length === 0 && <p> No items Found</p> 
   

  return (
   <Fragment>
    <h1>{heading}</h1>
    {novalues()}
   <ul className='list-group'>
           {items .map((items,  index) =>(
            <li  className= {selecteditem === index ? 'list-group-item active' : 'list-group-item'}
            key={items} 
            onClick={() => {setselected(index) ;
               onSelectItem(items)
              }}
              >
                {items}
              </li>
            ))}
   </ul>
 
    
   </Fragment>
  )
}

export default ListGroup
 