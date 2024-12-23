import React from 'react';

import {
  // GrUserSettings,
  GrCart,
  GrList,
  GrCreditCard,
  GrContactInfo,
 GrBarChart,
  GrCircleQuestion,

} from "react-icons/gr";
import { LuMilk } from "react-icons/lu";


import { CNavGroup, CNavItem, CNavTitle, } from '@coreui/react';

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    icon: <GrBarChart size={20} color='white' />,
    to: '/home',
    role: ['instructor', 'owner'],
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: '',
  },
  {
    component: CNavItem,
    name: 'Categories',
    to: '/categories/list',
    icon: <GrList size={20} color='white' />,
  },
  // {
  //   component: CNavItem,
  //   name: 'Brands',
  //   to: '/brands/list',
  //   icon: <GrProjects size={20} color='white' />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'Products',
  //   to: '/products/list',
  //   icon: <GrDeliver size={20} color='white' />,
  // },
  {
    component: CNavItem,
    name: 'Transactions',
    to: '/transactions',
    icon: <GrCreditCard size={20} color='white' />,
  },
  {
    component: CNavItem,
    name: 'Orders',
    to: '/customers/orders',
    icon: <GrCart size={20} color='white' />,
  },
  // {
  //   component: CNavItem,
  //   name: 'History',
  //   to: '/customers/history',
  //   icon: <GrHistory size={20} color='white' />,
  // },

  {
    component: CNavItem,
    name: 'Products',
    to: '/spare-parts/list',
    icon: <LuMilk size={20} color='white' />,
  },


  {
    component: CNavItem,
    name: 'Quries',
    to: '/user/quries',
    icon: <GrContactInfo size={20} color='white' />,
  },

  {
    component: CNavItem,
    name: 'FAQs',
    to: '/home/faqs',
    icon: <GrCircleQuestion size={20} color='white' />,
  },

]

export default _nav
