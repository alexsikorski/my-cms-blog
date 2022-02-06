import React from 'react';
import { BgParticles } from '.';
import Header from './Header';

const Layout = ({ children }) => (
  <>
    <BgParticles />
    <Header />
    {children}
  </>
);

export default Layout;