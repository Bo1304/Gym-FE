import React from 'react'
import { Outlet } from 'react-router';
import HomeGym from '../Users/HomeGym';

import UserFooter from './UserFooter'
import UserHeader from './UserHeader'

const AllHeaderFooter = () => {
  return (
    <>
      <UserHeader />
      <HomeGym />
      <UserFooter />
    </>
  );
};

export default AllHeaderFooter;

// Outlet để dùng header và footer sd cho các component khác mà k cần add lại header và footer 