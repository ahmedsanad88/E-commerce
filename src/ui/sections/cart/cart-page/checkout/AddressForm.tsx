/* eslint-disable import/no-extraneous-dependencies */
import type { FormikHelpers } from 'formik';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

import { Egypt } from '@/data/cities';

type AllCities = keyof typeof Egypt;

interface Values {
  fullName: string;
  mobile: string;
  street: string;
  building: string;
  city: AllCities;
  state: string;
}

const AddressSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Must provide your name'),
  mobile: Yup.string()
    .min(11, 'Invalid mobile number')
    .max(14, 'Invalid mobile number')
    .required('Must provide your mobile'),
  street: Yup.string().required('Must provide your street'),
  building: Yup.string().required('Must provide your building'),
  city: Yup.string().required('Select your city'),
  state: Yup.string().required('Select your state'),
});

const AddressForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          fullName: '',
          mobile: '',
          street: '',
          building: '',
          city: 'Cairo',
          state: '',
        }}
        validationSchema={AddressSchema}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        {({ errors, touched, values }) => (
          <Form className="flex flex-col gap-1">
            <div className="flex flex-col items-center sm:flex-row sm:gap-6">
              <div className="relative flex w-full flex-col pb-5">
                <label
                  className={`font-medium capitalize text-[#171520] ${
                    errors.fullName && touched.fullName
                      ? 'animate-input-label'
                      : 'animate-none'
                  }`}
                  htmlFor="fullName"
                >
                  Full Name
                </label>
                <Field
                  id="fullName"
                  name="fullName"
                  placeholder="Ahmed Hafez"
                  className={`h-14 w-full rounded-md bg-[#f1f1f1] px-4 text-[#171520] ${
                    errors.fullName && touched.fullName
                      ? 'border border-solid border-red-600'
                      : 'border-none'
                  }`}
                />
                <ErrorMessage
                  name="fullName"
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
            </div>

            <div className="flex flex-col items-center sm:flex-row sm:gap-6">
              <div className="relative flex w-full flex-col pb-5">
                <label
                  className={`font-medium capitalize text-[#171520] ${
                    errors.street && touched.street
                      ? 'animate-input-label'
                      : 'animate-none'
                  }`}
                  htmlFor="street"
                >
                  Street Address
                </label>
                <Field
                  id="street"
                  name="street"
                  placeholder="13th Saad street"
                  className={`h-14 w-full rounded-md bg-[#f1f1f1] px-4 text-[#171520] ${
                    errors.street && touched.street
                      ? 'border border-solid border-red-600'
                      : 'border-none'
                  }`}
                />
                <ErrorMessage
                  component="p"
                  className="absolute bottom-0 left-0 text-sm text-[#B00020]"
                  name="street"
                />
              </div>
              <div className="relative flex w-full flex-col pb-5">
                <label
                  className={`font-medium capitalize text-[#171520] ${
                    errors.building && touched.building
                      ? 'animate-input-label'
                      : 'animate-none'
                  }`}
                  htmlFor="building"
                >
                  Building/Apt
                </label>
                <Field
                  id="building"
                  name="building"
                  placeholder="building 18/ flat 6"
                  className={`h-14 w-full rounded-md bg-[#f1f1f1] px-4 text-[#171520] ${
                    errors.building && touched.building
                      ? 'border border-solid border-red-600'
                      : 'border-none'
                  }`}
                />
                <ErrorMessage
                  component="p"
                  className="absolute bottom-0 left-0 text-sm text-[#B00020]"
                  name="building"
                />
              </div>
            </div>

            <div className="flex flex-col items-center sm:flex-row sm:gap-6">
              <div className="relative flex w-full flex-col pb-5">
                <label
                  className={`font-medium capitalize text-[#171520] ${
                    errors.city && touched.city
                      ? 'animate-input-label'
                      : 'animate-none'
                  }`}
                  htmlFor="city"
                >
                  City
                </label>
                <Field
                  component="select"
                  id="city"
                  name="city"
                  className={`h-14 w-full rounded-md bg-[#f1f1f1] px-4 text-[#171520] ${
                    errors.city && touched.city
                      ? 'border border-solid border-red-600'
                      : 'border-none'
                  }`}
                >
                  <option value="Cairo">Cairo</option>
                  {Object.keys(Egypt).map(
                    (city, idx) =>
                      city !== 'Cairo' && (
                        <option value={city} key={idx} defaultValue="Cairo">
                          {city.trim()}
                        </option>
                      )
                  )}
                </Field>
                <ErrorMessage
                  component="p"
                  className="absolute bottom-0 left-0 text-sm text-[#B00020]"
                  name="city"
                />
              </div>

              <div className="relative flex w-full flex-col pb-5">
                <label
                  className={`font-medium capitalize text-[#171520] ${
                    errors.state && touched.state
                      ? 'animate-input-label'
                      : 'animate-none'
                  }`}
                  htmlFor="state"
                >
                  State
                </label>
                <Field
                  component="select"
                  id="state"
                  name="state"
                  className={`h-14 w-full rounded-md bg-[#f1f1f1] px-4 text-[#171520] ${
                    errors.state && touched.state
                      ? 'border border-solid border-red-600'
                      : 'border-none'
                  }`}
                >
                  <option value="">Select your State</option>
                  {values.city &&
                    Object.keys(Egypt[values.city]).map((state, idx) => (
                      <option value={state.toLowerCase()} key={idx}>
                        {state.trim()}
                      </option>
                    ))}
                </Field>
                <ErrorMessage
                  component="p"
                  className="absolute bottom-0 left-0 text-sm text-[#B00020]"
                  name="state"
                />
              </div>
            </div>

            {/* <button type="submit" className="hidden">
              Save
            </button> */}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddressForm;
