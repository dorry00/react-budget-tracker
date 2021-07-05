import React,{useContext} from 'react'
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../Context/AppContext';

function ExpenseItem(props) {

    const {dispatch}=useContext(AppContext);

    const handleDelete = ()=>{
        dispatch({
            type:'DELETE_EXPENSE',
            payload:props.id,
        });
    };
    return (
        <div>
            <li className="list-group-item d-flex align-items-center justify-content-center mt-3 ">{props.name}
            <div className="ml">
                <span className="ml-5 bg-success">{props.cost}</span>
                <TiDelete onClick={handleDelete}/>
            </div>

                </li>
        </div>
    )
}

export default ExpenseItem
