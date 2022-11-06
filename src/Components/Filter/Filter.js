import { useDispatch, useSelector } from "react-redux";
import { getSelectedCategory, filteredCategory } from "../../redux/dishesSlices";

const Filter = ({category}) =>{

    const selectedCategory = useSelector(getSelectedCategory);
    const dispatch = useDispatch();
    return(<div>
       <p onClick={()=>{dispatch(filteredCategory(category))}} className={selectedCategory === category? 'categoryButtonSelected' : 'categoryButton'}>{category}</p> 
    </div>
    )
}
export default Filter;