import {useDispatch, useSelector} from "react-redux";
import { changeTitleAction, clearTuk, updateInp} from "../../redux/actions";

export default function MainPage(){
    const dispatch = useDispatch()
    const {list} = useSelector(state => state.userReducer)
    const {input} = useSelector(state => state.userReducer)

    const addNum = () => {
        dispatch(changeTitleAction(input))
    }

    const clearList = () => {
        dispatch(clearTuk())
    }

    const update = ({target}) => {
        dispatch(updateInp(target.value))
    }

    return <>
        <input type="number" value={input} onChange={update}/>
        <button onClick={addNum}>Add</button>
        <button onClick={clearList}>Clear</button>

        {
            list.map((e, i)=> <div key={i}>
                <p>{e}</p>
            </div>)
        }
    </>
}