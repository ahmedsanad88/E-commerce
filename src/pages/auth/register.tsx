import React from 'react';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import Register from '@/ui/sections/auth/Register';

const register = () => {
  return (
    <Main
      meta={
        <Meta
          title="Register a new Account"
          description="Wow You are creating a new account with Buy by two E-commerce, we are blessed by choosing us for a better shopping experience"
        />
      }
    >
      <div>
        <Register />
      </div>
    </Main>
  );
};

export default register;
