import React from 'react';
import { useContext , useState  } from 'react';
import { AppContext } from '../Context/AppContext';
import {v4 as uuidv4} from 'uuid';




function AddExpense(props) {

  const {dispatch} = useContext(AppContext);

    const [name,setName]=useState('');
    const [cost,setCost]=useState('');

    const OnSubmitHandler = (event)=>{
        event.preventDefault();

        const expense={
            id:uuidv4(),
            name:name,
            cost:parseInt(cost),

        };

        dispatch({
			type: 'ADD_EXPENSE',
			payload: expense,
		});

    setName('');
    setCost('');


    };
    return (
                    
            <form onSubmit={OnSubmitHandler}>
             <div className="form-group">
             <label for="name">Name</label>
             <input type="text "
              required="required"
               id="name" 
               className="form-control"
               value={name}
               onChange={(event)=>setName(event.target.value)} />
             </div>

             <div className="form-group">
             <label for="Cost">Cost</label>
             <input type="text"
              class="form-control"
               id="cost"
               value={cost}
               onChange={(event)=>setCost(event.target.cost)}/>
             </div>
 
    
             <button type="submit" class="btn btn-primary mt-3">Add</button>

            </form>
        
    );
};

export default AddExpense
