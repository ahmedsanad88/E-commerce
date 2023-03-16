import type { FormikHelpers } from 'formik';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Lottie from 'lottie-react';
import Link from 'next/link';
import React from 'react';
import * as Yup from 'yup';

import login from '@/public/assets/json/login.json';

interface Values {
  email: string;
  password: string;
}

// suppose later match the entered password hash with the one in th backend and if user match then send a token from the backend if not then show error to the user.

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Must provide your email address'),
  password: Yup.string().required('No password provided'),
});

const Login = () => {
  return (
    <div className="relative flex w-full flex-col justify-end gap-4 overflow-hidden rounded-lg p-4 shadow-md md:w-[90%] md:flex-row xl:w-[1000px]">
      <div className="animated-bg absolute inset-0 left-[50%] top-[50%] z-0 translate-x-[-50%] translate-y-[-50%]"></div>
      <div>
        <Lottie animationData={login} loop={true} />
      </div>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={LoginSchema}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            // eslint-disable-next-line no-alert
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        {({ errors, touched }) => (
          <Form className="z-10 flex w-full flex-col gap-1 rounded-lg bg-white p-4 md:w-[80%]">
            <h1 className="text-center font-semibold capitalize">
              Welcome Back!
            </h1>
            <div className="relative flex w-full flex-col pb-5">
              <label
                className={`font-medium capitalize text-[#171520] ${
                  errors.email && touched.email
                    ? 'animate-input-label'
                    : 'animate-none'
                }`}
                htmlFor="email"
              >
                Email
              </label>
              <Field
                id="email"
                name="email"
                placeholder="ahmed@test.com"
                className={`h-14 w-full rounded-md bg-[#f1f1f1] px-4 text-[#171520] ${
                  errors.email && touched.email
                    ? 'border border-solid border-red-600'
                    : 'border-none'
                }`}
              />
              <ErrorMessage
                name="email"
                component="p"
                className="absolute bottom-0 left-0 text-sm text-[#B00020]"
              />
            </div>
            <div className="relative flex w-full flex-col pb-5">
              <label
                className={`font-medium capitalize text-[#171520] ${
                  errors.password && touched.password
                    ? 'animate-input-label'
                    : 'animate-none'
                }`}
                htmlFor="password"
              >
                Password
              </label>
              <Field
                id="password"
                name="password"
                placeholder="*********"
                className={`h-14 w-full rounded-md bg-[#f1f1f1] px-4 text-[#171520] ${
                  errors.password && touched.password
                    ? 'border border-solid border-red-600'
                    : 'border-none'
                }`}
              />
              <ErrorMessage
                name="password"
                component="p"
                className="absolute bottom-0 left-0 text-sm text-[#B00020]"
              />
            </div>
            <div className="mt-8 flex items-center justify-between gap-2">
              <button
                type="submit"
                className="rounded bg-[#1B4B66] px-4 py-2 text-xl font-semibold uppercase text-white"
              >
                Login
              </button>
              <Link href={'/auth/register'}>
                <p className="text-sm">Create new account!</p>
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
