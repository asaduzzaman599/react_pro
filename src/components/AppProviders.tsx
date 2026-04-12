import React from 'react';
import { store } from '../store';
import { Provider } from 'react-redux';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../lib/queryClient';

interface Props {
    children?: React.ReactNode
}
export const AppProviders = ({children}: Props) => (<>
<Provider store={store}>
    <QueryClientProvider client={queryClient}>
    {children}
    </QueryClientProvider>
</Provider>
</>)