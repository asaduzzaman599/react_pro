
import { Navigate, Route, Routes } from 'react-router-dom'
import TodoListPage from '../pages/TodoList'
import FromBuilderPage from '../pages/FromBuilder';
import FormPreviewPage from '../pages/FormPreview';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/todos" element={<TodoListPage />} />
            <Route path="/form-builder" element={<FromBuilderPage />} />
            <Route path="/form-preview" element={<FormPreviewPage />} />

            
      {/* Optional: catch all unknown routes */}
      <Route path="*" element={<Navigate to="/todos" replace />} />
        </Routes>
    );
};

export default AppRouter;