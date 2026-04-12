import React from 'react';

type Props = {
    children?: React.ReactNode
    title?: string
    subTitle?: string
}
const MainSection = ({ children, title, subTitle }: Props) => {
    return (
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='py-5 w-full'>
                <h1 className=' text-xl text-gray-700 font-medium'>{title}</h1>
                {subTitle && <h3 className='text-gray-500 mt-4'>{subTitle}</h3>}
            </div>
            {children}
        </div>
    );
};

export default MainSection;