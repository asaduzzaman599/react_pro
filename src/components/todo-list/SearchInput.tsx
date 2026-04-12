import InputText from '../input-fields/InputText';
import { setSearch as setStoreSearch } from '../../store/todo/todoSlice';
import { useStoreState } from '../../store/store-state';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

const SearchInput = ({ ...props }) => {
    const state = useStoreState()
    const [search, setSearch] = useState(state.todo?.search)
    const dispatch = useDispatch()

    useEffect(()=>{
        const handler = setTimeout(() => {
            dispatch(setStoreSearch(search));
    }, 300);

      return () => clearTimeout(handler);
    }, [dispatch, search])

    return (
        
       <div {...props}>
          <InputText 
                    name="search"
                    type="text"
                    value={search || ''}
                    placeholder="Search TODOs..."
                    onValueChange={(e)=>setSearch(e)}
                />
       </div>
    );
};

export default SearchInput;