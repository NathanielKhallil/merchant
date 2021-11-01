import React from 'react';
import TestRenderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import Cart from './components/Cart/Cart'
import App from './App';


const mocks = ['Cart']; // We'll fill this in next

it('renders without error', () => {
  const component = TestRenderer.create(
    <MockedProvider addTypename={false}>
      <Cart />               

    </MockedProvider>,
  );

 
});