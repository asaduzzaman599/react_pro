

import InputSelect from '../input-fields/InputSelect';
import { useStoreState } from '../../store/store-state';
import { useDispatch } from 'react-redux';
import { setCompleted } from '../../store/todo/todoSlice';

export const StatusSelect = ({...props}) => {

    const state = useStoreState()
    const dispatch = useDispatch()

    return (
        <div {...props} >
            <InputSelect
                label='Status' 
                options={[{ title: 'Pending', value: 0 }, { title: 'Completed', value: 1 }]} 
                value={state.todo.completed !== undefined ? state.todo.completed ? 1 : 0 : undefined}
                onChange={(value) => dispatch(setCompleted(!!value))}
            />
        </div>
    );
};
