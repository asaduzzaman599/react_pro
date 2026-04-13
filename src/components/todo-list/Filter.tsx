
import Card from '../Card'
import UserSelect from './UserSelect'
import SearchInput from './SearchInput'
import { StatusSelect } from './StatusSelect'
import { resetFilters } from '../../store/todo/todoSlice'
import { useDispatch } from 'react-redux'
import PrimaryButton from './PrimaryButton'
import { useUsers } from '../../hooks/todos'


const Filters = () => {
    const { data: users } = useUsers()
    const dispatch = useDispatch()
  return (
    <Card>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 items-center'>
            <div className='md:col-span-12' >
                <SearchInput />
            </div>
            <UserSelect users={users} />
            <StatusSelect />
            <div className='col-span-1 md:col-span-3 flex items-end h-full' >

                <PrimaryButton onClick={() => dispatch(resetFilters())}>
                    Clear Filters
                </PrimaryButton>
            </div>
        </div>
    </Card>
  )
}


export default Filters;