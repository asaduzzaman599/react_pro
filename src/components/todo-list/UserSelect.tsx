import InputSelect from '../input-fields/InputSelect';
import { useStoreState } from '../../store/store-state';
import { useDispatch } from 'react-redux';
import { setUserId } from '../../store/todo/todoSlice';
import { useUsers } from '../../hooks/todos';
import type { User } from '../../types/todo';

const UserSelect = ({...props}) => {
    const { data: users } = useUsers()
    const state = useStoreState()
    const dispatch = useDispatch()

    return (<div {...props}>
                <InputSelect 
                label='Filter by User' 
                options={users?.map((user: User) => ({ title: user.name, value: user.id })) ?? []} 
                value={state.todo.userId}
                onChange={(value) => dispatch(setUserId(value))}
                />
            </div>
    );
};

export default UserSelect;