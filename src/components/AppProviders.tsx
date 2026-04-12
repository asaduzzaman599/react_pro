import React from 'react';
import { store } from '../store';
import { Provider } from 'react-redux';

interface Props {
    children?: React.ReactNode
}
export const AppProviders = ({children}: Props) => (<>
<Provider store={store}>
    {children}
</Provider>
</>)