import React from 'react';
import MainLayout from '../MainLayout';


// This is ment to provide different kind of layout for the user
// like color stuff and shit

const LayoutProvider = ({children}) => <MainLayout>{children}</MainLayout>;

export default LayoutProvider;
