import MainSection from "../components/MainSection";
import Filters from "../components/todo-list/Filter";
import Table from "../components/todo-list/Table";


const TodoListPage = () => {

    
    return (
        <MainSection title='TODO List' >

               <Filters />
               <Table />
        </MainSection>
    );
};

export default TodoListPage;