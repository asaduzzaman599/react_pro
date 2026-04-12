import { useEffect, useState } from "react";
import MainSection from "../components/MainSection";
import Filters from "../components/todo-list/Filter";
import Table from "../components/todo-list/Table";


const TodoListPage = () => {
    const [ users, setUsers] = useState()
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data))
    }, [])
    return (
        <MainSection title='TODO List' >
               <Filters users={users ?? []} />
               <Table users={users ?? []} />
                TODO List Content
        </MainSection>
    );
};

export default TodoListPage;