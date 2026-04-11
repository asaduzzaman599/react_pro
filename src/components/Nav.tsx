import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <ul>
            <li>
                <NavLink
                    to={`/todos`}
                >
                    Todo List
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={`/form-builder`}
                >
                   Form Builder
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={`/form-preview`}
                >
                    Form Preview
                </NavLink>
            </li>
        </ul>
    );
};

export default Nav;