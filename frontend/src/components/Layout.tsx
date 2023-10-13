import { PropsWithChildren } from 'react';
import { Navigation } from './navbar/Navigation';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};

// <Layout> <Children> </Layout>
