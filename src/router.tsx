import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import GeneralLayout from './layout/GeneralLayout';
import Home from './pages/Home';
import Step1 from './pages/Step1';
import Step2 from './pages/Step2';
import Step3 from './pages/Step3';
import Step4 from './pages/Step4';

interface RouterElement {
  id: number;
  path: string;
  label: string;
  element: React.ReactNode;
  withStep: boolean;
}

export interface StepElement {
  id: number;
  path: string;
  label: string;
}

const routerData: RouterElement[] = [
  {
    id: 0,
    path: '/',
    label: 'Home',
    element: <Home />,
    withStep: false,
  },
  {
    id: 1,
    path: '/step-1',
    label: 'Step1',
    element: <Step1 />,
    withStep: true,
  },
  {
    id: 2,
    path: '/step-2',
    label: 'Step2',
    element: <Step2 />,
    withStep: true,
  },
  {
    id: 3,
    path: '/step-3',
    label: 'Step3',
    element: <Step3 />,
    withStep: true,
  },
  {
    id: 4,
    path: '/step-4',
    label: 'Step4',
    element: <Step4 />,
    withStep: true,
  },
];

export const router = createBrowserRouter(
  routerData.map((router) => {
    if (router.withStep) {
      return {
        path: router.path,
        element: <GeneralLayout>{router.element}</GeneralLayout>,
      };
    }
    return {
      path: router.path,
      element: router.element,
    };
  }),
);

export const stepContent = routerData.reduce((prev, router) => {
  if (!router.withStep) return prev;

  return [
    ...prev,
    {
      id: router.id,
      path: router.path,
      label: router.label,
    },
  ];
}, [] as StepElement[]);
