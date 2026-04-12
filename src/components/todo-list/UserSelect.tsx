import React from 'react';
import type { User } from '../../types/todo';
import InputSelect from '../input-fields/InputSelect';
import { useStoreState } from '../../store/store-state';
import { useDispatch } from 'react-redux';
import { setUserId } from '../../store/todo/todoSlice';

const UserSelect = ({users, ...props}: {users: User[]}) => {
    const state = useStoreState()
    const dispatch = useDispatch()

    return (<div {...props}> {state.todo.userId}
                <InputSelect 
                label='Filter by User' 
                options={users.map((user) => ({ title: user.name, value: user.id }))} 
                value={state.todo.userId}
                onChange={(value) => dispatch(setUserId(value))}
                />
            </div>
    );
};

export default UserSelect;