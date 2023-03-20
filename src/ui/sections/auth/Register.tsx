import type { FormikHelpers } from 'formik';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Lottie from 'lottie-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { RiEye2Line, RiEyeCloseFill } from 'react-icons/ri';
import * as Yup from 'yup';

import register from '@/public/assets/json/sign-up.json';

interface Values {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  birthDate: string;
  password: string;
  passwordConfirmation: string;
}

const RegisterSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('No first name provided.')
    .min(1, 'Too Short!')
    .max(50, 'Too Long!'),
  lastName: Yup.string()
    .required('No first name provided.')
    .min(1, 'Too Short!')
    .max(50, 'Too Long!'),
  email: Yup.string().required('No email provided.').nullable().email(),
  mobile: Yup.string()
    .required('No mobile provided.')
    .min(11, 'Invalid mobile number')
    .max(14, 'Invalid mobile number'),
  birthDate: Yup.date().nullable().min(new Date(1900, 0, 1)),
  password: Yup.string()
    .required('No password provided.')
    .min(8, 'Password must contains at least 8 characters.')
    .matches(
      /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/,
      'Invalid Password'
    ),
  passwordConfirmation: Yup.string()
    .required('No password provided.')
    .oneOf([Yup.ref('newPassword')], 'Passwords must match'),
});

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative flex w-full flex-col justify-end gap-4 overflow-hidden rounded-lg p-4 shadow-md md:w-[90%] md:flex-row xl:w-[1000px]">
      <div className="animated-bg absolute inset-0 left-[50%] top-[50%] z-0 translate-x-[-50%] translate-y-[-50%]"></div>
      <div className="mx-auto grid w-[40%] place-items-center">
        <Lottie animationData={register} loop={true} />
      </div>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          mobile: '',
          birthDate: '',
          password: '',
          passwordConfirmation: '',
        }}
        validateOnChange={false}
        validationSchema={RegisterSchema}
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
          <Form className="z-10 flex w-full flex-col gap-1 rounded-lg bg-white p-4 md:w-[60%]">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <div className="relative flex w-full flex-col pb-5">
                  <label
                    className={`font-medium capitalize text-[#171520] ${
                      errors.firstName && touched.firstName
                        ? 'animate-input-label'
                        : 'animate-none'
                    }`}
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <Field
                    id="firstName"
                    name="firstName"
                    placeholder="Ahmed"
                    className={`h-14 w-full rounded-md bg-[#f1f1f1] px-4 text-[#171520] ${
                      errors.firstName && touched.firstName
                        ? 'border border-solid border-red-600'
                        : 'border-none'
                    }`}
                  />
                  <ErrorMessage
                    name="firstName"
                    component="p"
                    className="absolute bottom-0 left-0 text-sm text-[#B00020]"
                  />
                </div>
                <div className="relative flex w-full flex-col pb-5">
                  <label
                    className={`font-medium capitalize text-[#171520] ${
                      errors.lastName && touched.lastName
                        ? 'animate-input-label'
                        : 'animate-none'
                    }`}
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                  <Field
                    id="lastName"
                    name="lastName"
                    placeholder="Hafez"
                    className={`h-14 w-full rounded-md bg-[#f1f1f1] px-4 text-[#171520] ${
                      errors.lastName && touched.lastName
                        ? 'border border-solid border-red-600'
                        : 'border-none'
                    }`}
                  />
                  <ErrorMessage
                    name="lastName"
                    component="p"
                    className="absolute bottom-0 left-0 text-sm text-[#B00020]"
                  />
                </div>
              </div>
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
                  placeholder="Johndoe@johndoe.com"
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
                    errors.mobile && touched.mobile
                      ? 'animate-input-label'
                      : 'animate-none'
                  }`}
                  htmlFor="mobile"
                >
                  Mobile Number
                </label>
                <Field
                  id="mobile"
                  name="mobile"
                  placeholder="010********"
                  className={`h-14 w-full rounded-md bg-[#f1f1f1] px-4 text-[#171520] ${
                    errors.mobile && touched.mobile
                      ? 'border border-solid border-red-600'
                      : 'border-none'
                  }`}
                />
                <ErrorMessage
                  component="p"
                  name="mobile"
                  className="absolute bottom-0 left-0 text-sm text-[#B00020]"
                />
              </div>

              <div className="relative flex w-full flex-col pb-5">
                <label
                  className={`font-medium capitalize text-[#171520] ${
                    errors.birthDate && touched.birthDate
                      ? 'animate-input-label'
                      : 'animate-none'
                  }`}
                  htmlFor="birthDate"
                >
                  Date of birth
                </label>
                <Field
                  id="birthDate"
                  type="date"
                  name="birthDate"
                  placeholder="DD/MM/YYYY"
                  className={`h-14 w-full rounded-md bg-[#f1f1f1] px-4 text-[#171520] ${
                    errors.birthDate && touched.birthDate
                      ? 'border border-solid border-red-600'
                      : 'border-none'
                  }`}
                />
                <ErrorMessage
                  component="p"
                  name="birthDate"
                  className="absolute bottom-0 left-0 text-sm text-[#B00020]"
                />
              </div>

              <div className="mb-10 w-full border-b-2 border-[#f1f1f1] pb-2 text-xl font-semibold">
                <h2>Change Password</h2>
              </div>

              {/* <div className="relative flex w-full flex-col pb-5">
                <label
                  className={`font-medium capitalize text-[#171520] ${
                    errors.currentPassword && touched.currentPassword
                      ? 'animate-input-label'
                      : 'animate-none'
                  }`}
                  htmlFor="currentPassword"
                >
                  Current Password
                </label>
                <Field
                  id="currentPassword"
                  type="password"
                  name="currentPassword"
                  placeholder="********"
                  className={`h-14 w-full rounded-md bg-[#f1f1f1] px-4 text-[#171520] ${
                    errors.currentPassword && touched.currentPassword
                      ? 'border border-solid border-red-600'
                      : 'border-none'
                  }`}
                />
                <ErrorMessage
                  component="p"
                  name="currentPassword"
                  className="absolute bottom-0 left-0 text-sm text-[#B00020]"
                />
              </div> */}
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
                  type={`${showPassword ? 'text' : 'password'}`}
                  name="password"
                  placeholder="******"
                  className={`h-14 w-full rounded-md bg-[#f1f1f1] px-4 text-[#171520] ${
                    errors.password && touched.password
                      ? 'border border-solid border-red-600'
                      : 'border-none'
                  }`}
                />
                <div
                  className="absolute right-0 cursor-pointer text-2xl text-black"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <RiEye2Line /> : <RiEyeCloseFill />}
                </div>
                <ErrorMessage
                  component="p"
                  name="newPassword"
                  className="absolute bottom-0 left-0 text-sm text-[#B00020]"
                />
              </div>
              <div className="relative flex w-full flex-col pb-5">
                <label
                  className={`font-medium capitalize text-[#171520] ${
                    errors.passwordConfirmation && touched.passwordConfirmation
                      ? 'animate-input-label'
                      : 'animate-none'
                  }`}
                  htmlFor="passwordConfirmation"
                >
                  Confirm Password
                </label>
                <Field
                  id="passwordConfirmation"
                  type="password"
                  name="passwordConfirmation"
                  placeholder="******"
                  className={`h-14 w-full rounded-md bg-[#f1f1f1] px-4 text-[#171520] ${
                    errors.passwordConfirmation && touched.passwordConfirmation
                      ? 'border border-solid border-red-600'
                      : 'border-none'
                  }`}
                />
                <ErrorMessage
                  component="p"
                  name="passwordConfirmation"
                  className="absolute bottom-0 left-0 text-sm text-[#B00020]"
                />
              </div>
            </div>

            <div className="my-6 flex items-center justify-between gap-2">
              <button
                type="submit"
                className="self-end rounded-md bg-[#1B4B66] px-4 py-2 text-white"
              >
                Register
              </button>
              <Link href={'/auth/login'}>
                <p className="text-sm">Have Account! Let&apos;s sign in</p>
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
