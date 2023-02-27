import type { FormikHelpers } from 'formik';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import {
  MdExitToApp,
  MdOutlineCloudUpload,
  MdOutlineDeleteForever,
} from 'react-icons/md';
import { RiEye2Line, RiEyeCloseFill } from 'react-icons/ri';
import * as Yup from 'yup';

interface Values {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  birthDate: string;
  currentPassword: string;
  newPassword: string;
  passwordConfirmation: string;
}

const UserInfoSchema = Yup.object().shape({
  firstName: Yup.string().min(1, 'Too Short!').max(50, 'Too Long!'),
  lastName: Yup.string().min(1, 'Too Short!').max(50, 'Too Long!'),
  email: Yup.string().nullable().email(),
  mobile: Yup.string()
    .min(11, 'Invalid mobile number')
    .max(14, 'Invalid mobile number'),
  birthDate: Yup.date().nullable().min(new Date(1900, 0, 1)),
  currentPassword: Yup.string().equals(['Abc12345'], 'Password not matched'),
  newPassword: Yup.string()
    .min(8, 'Password must contains at least 8 characters.')
    .matches(
      /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/,
      'Invalid Password'
    ),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref('newPassword'), undefined],
    'Passwords must match'
  ),
});

const PersonalInfo = () => {
  const [imgData, setImgData] = useState<string | ArrayBuffer | null>();
  const inputRef = useRef<HTMLInputElement>(null);

  const [showPassword, setShowPassword] = useState(false);

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  return (
    <div className="w-full">
      <div className="mb-8 flex w-full flex-col items-center justify-between sm:flex-row ">
        <h2 className="text-center text-[34px] font-semibold text-[#1B4B66]">
          User Information
        </h2>
        <button className="flex items-center gap-4 rounded-md border-2 border-[#1B4B66] px-4 py-2 text-[#1B4B66]">
          <MdExitToApp />
          <p>Logout</p>
        </button>
      </div>
      <div className="mb-10 w-full border-b-2 border-[#f1f1f1] pb-2 text-xl font-semibold">
        <h2>Personal Information</h2>
      </div>
      <div className="mb-10 flex flex-col items-center gap-4 sm:flex-row sm:items-end">
        <div className="h-[80px] w-[80px] overflow-hidden rounded-full bg-gradient-to-br from-[#1B4B66] via-[#639599] to-[#FF8C4B] shadow">
          {imgData?.constructor === String && (
            <Image
              src={imgData}
              alt="profile"
              width={80}
              height={80}
              className="h-[80px] w-auto object-cover object-center"
            />
          )}
        </div>
        <input
          ref={inputRef}
          type="file"
          name="image"
          className="hidden"
          onChange={handleImage}
        />
        <button
          className="flex items-center gap-2 rounded-md border-2 border-transparent bg-[#1B4B66] px-4 py-2 font-medium text-white"
          onClick={() => inputRef?.current?.click()}
        >
          <MdOutlineCloudUpload className="text-2xl" />
          <p>Upload</p>
        </button>
        <button
          className="flex items-center gap-2 rounded-md border-2 border-[#B00020] px-4 py-2 font-medium text-[#B00020]"
          onClick={() => setImgData(null)}
        >
          <MdOutlineDeleteForever className="text-2xl" />
          <p>Delete</p>
        </button>
      </div>
      <div>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            mobile: '',
            birthDate: '',
            currentPassword: '',
            newPassword: '',
            passwordConfirmation: '',
          }}
          validationSchema={UserInfoSchema}
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
            <Form>
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

                <div className="relative flex w-full flex-col pb-5">
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
                </div>
                <div className="relative flex w-full flex-col pb-5">
                  <label
                    className={`font-medium capitalize text-[#171520] ${
                      errors.newPassword && touched.newPassword
                        ? 'animate-input-label'
                        : 'animate-none'
                    }`}
                    htmlFor="newPassword"
                  >
                    New Password
                  </label>
                  <Field
                    id="newPassword"
                    type={`${showPassword ? 'text' : 'password'}`}
                    name="newPassword"
                    placeholder="******"
                    className={`h-14 w-full rounded-md bg-[#f1f1f1] px-4 text-[#171520] ${
                      errors.newPassword && touched.newPassword
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
                      errors.passwordConfirmation &&
                      touched.passwordConfirmation
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
                      errors.passwordConfirmation &&
                      touched.passwordConfirmation
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

              <div className="my-6 flex w-full justify-end">
                <button
                  type="submit"
                  className="self-end rounded-md bg-[#1B4B66] px-4 py-2 text-white"
                >
                  Save Changes
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default PersonalInfo;
