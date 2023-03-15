import React from 'react';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import Login from '@/ui/sections/auth/Login';

const login = () => {
  return (
    <Main
      meta={
        <Meta
          title="Login to your profile"
          description="Welcome back to buy by two e-commerce, please login to have a better experience with your account"
        />
      }
    >
      <div className="grid min-h-screen place-items-center">
        <Login />
      </div>
    </Main>
  );
};

export default login;
