/* eslint-disable import/no-extraneous-dependencies */
import type { FormikHelpers } from 'formik';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Image from 'next/image';
import React, { useState } from 'react';
import { TbHandClick } from 'react-icons/tb';
import * as Yup from 'yup';

import chip from '@/public/assets/images/Chip.png';
import connection from '@/public/assets/images/Conection.png';
import master from '@/public/assets/images/mastercard.png';
import visa from '@/public/assets/images/visacard.png';

interface Values {
  cardNumber: string;
  cardHolder: string;
  expireMonth: string;
  expireYear: string;
}

const CardSchema = Yup.object().shape({
  cardHolder: Yup.string().required('Must provide cardholder name!'),
  cardNumber: Yup.string()
    .matches(/[0-9]{16}/g, 'Must used numbers only')
    .length(16, 'card number is less than 16 numbers')
    .required('Must provide card number!'),
  expireMonth: Yup.string().required('Must select expiry month'),
  expireYear: Yup.string().required('Must select expiry year'),
});

interface Cvv {
  cvv: string;
}

const CVVSchema = Yup.object().shape({
  cvv: Yup.string()
    .matches(/[0-9]{16}/g, 'Must used numbers only')
    .length(3, 'CVV should be 3 numbers only')
    .required('Must provide card CVV!'),
});

const CreditCard = () => {
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  return (
    <div className="relative my-2 grid place-items-center">
      <div className="card-container mx-auto h-[350px] w-full md:aspect-video md:min-h-[420px] md:w-[80%] lg:w-[70%] xl:w-[90%] 2xl:w-[70%]">
        <div
          className={`card-3d relative h-full w-full rounded-2xl duration-1000 ${
            isCardFlipped ? 'rotate-card' : ''
          }`}
        >
          <div className="credit-card backface-hide absolute inset-0 flex h-full w-full flex-col gap-8 overflow-hidden rounded-2xl p-6">
            <div className="relative flex items-center justify-end gap-4">
              <Image
                src={master}
                alt="master card"
                placeholder="blur"
                width={50}
                height={50}
                className="h-[50px] w-[50px] object-contain"
              />
              <Image
                src={visa}
                alt="visa card"
                placeholder="blur"
                width={50}
                height={50}
                className="h-[50px] w-[50px] object-contain"
              />
              <div
                className="absolute top-0 left-4 z-10 flex cursor-pointer flex-col items-center gap-2 sm:hidden"
                onClick={() => setIsCardFlipped((prev) => !prev)}
              >
                <TbHandClick className="text-2xl text-white" />
                <p className="text-xs font-medium text-white">Click Me!</p>
              </div>
            </div>
            <div className="flex flex-1 gap-6">
              <div className="relative mt-[-82px] hidden w-fit items-center gap-6 sm:flex">
                <Image
                  src={chip}
                  alt="chip"
                  placeholder="blur"
                  width={80}
                  height={58}
                  className="h-[58px] w-[80px] object-cover"
                />
                <Image
                  src={connection}
                  alt="connection icon"
                  placeholder="blur"
                  width={40}
                  height={50}
                  className="h-auto w-[40px] object-cover"
                />
                <div
                  className="absolute top-4 left-4 z-10 flex cursor-pointer flex-col items-center"
                  onClick={() => setIsCardFlipped((prev) => !prev)}
                >
                  <TbHandClick className="text-3xl text-white" />
                  <p className="text-xs font-medium text-white">Click Me!</p>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-center">
                <Formik
                  initialValues={{
                    cardNumber: '',
                    cardHolder: '',
                    expireMonth: '',
                    expireYear: '',
                  }}
                  validationSchema={CardSchema}
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
                    <Form className="flex w-full flex-col gap-1">
                      <div className="relative flex w-full flex-col pb-5">
                        <Field
                          id="cardNumber"
                          name="cardNumber"
                          placeholder="**** **** **** 0000"
                          className={`mx-auto h-10 w-full min-w-[100px] rounded-md border-2 bg-transparent px-4 text-center text-[25px] font-semibold tracking-widest text-[#F5bd02] placeholder:text-gray-600 focus:border-[#dad3af] focus:outline-none focus:ring-transparent sm:h-14 lg:text-[30px] 2xl:text-[40px] ${
                            errors.cardNumber && touched.cardNumber
                              ? 'animate-input-label border-solid border-red-600'
                              : 'animate-none border-[#F5bd02]'
                          }`}
                        />
                        <ErrorMessage
                          name="cardNumber"
                          component="p"
                          className="absolute bottom-0 left-0 w-full text-center text-sm text-[#f86666]"
                        />
                      </div>

                      <div className="relative flex flex-col items-center justify-end gap-4 sm:flex-row">
                        <div className="relative flex flex-col sm:pb-5">
                          <Field
                            component="select"
                            id="expireMonth"
                            name="expireMonth"
                            className={`mx-auto h-10 w-fit min-w-[50px] rounded-md border-2 bg-transparent px-4 text-center text-xl font-semibold tracking-widest text-[#F5bd02] focus:border-[#dad3af] focus:outline-none focus:ring-transparent sm:h-14 ${
                              errors.expireMonth && touched.expireMonth
                                ? 'animate-input-label border-solid border-red-600'
                                : 'animate-none border-[#F5bd02]'
                            }`}
                          >
                            <option value="" disabled>
                              Month
                            </option>
                            {[
                              'January',
                              'February',
                              'March',
                              'April',
                              'May',
                              'June',
                              'July',
                              'August',
                              'September',
                              'October',
                              'November',
                              'December',
                            ].map((m, i) => (
                              <option value={m} key={i}>
                                {m}
                              </option>
                            ))}
                          </Field>
                          <ErrorMessage
                            component="p"
                            className="absolute bottom-0 left-0 w-full text-center text-sm text-[#f86666]"
                            name="expireMonth"
                          />
                        </div>

                        <div className="flex flex-col pb-5">
                          <Field
                            component="select"
                            id="expireYear"
                            name="expireYear"
                            className={`mx-auto h-10 w-fit min-w-[50px] rounded-md border-2 bg-transparent px-4 text-center text-xl font-semibold tracking-widest text-[#F5bd02] focus:border-[#dad3af] focus:outline-none focus:ring-transparent sm:h-14 ${
                              errors.expireYear && touched.expireYear
                                ? 'animate-input-label border-solid border-red-600'
                                : 'animate-none border-[#F5bd02]'
                            }`}
                          >
                            <option value="" disabled>
                              Year
                            </option>
                            {[
                              2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030,
                              2031, 2032, 2033, 2035,
                            ].map((y, i) => (
                              <option value={y} key={i}>
                                {y}
                              </option>
                            ))}
                          </Field>
                          <ErrorMessage
                            component="p"
                            className="absolute top-[-22px] right-0 w-full text-right text-sm text-[#f86666]"
                            name="expireYear"
                          />
                        </div>
                      </div>

                      <div className="relative flex w-full flex-col pb-5">
                        <Field
                          id="cardHolder"
                          name="cardHolder"
                          placeholder="Ahmed Ibrahim"
                          className={`mx-auto h-10 w-fit min-w-[100px] rounded-md border-2 bg-transparent px-4 text-center text-base font-semibold tracking-widest text-[#F5bd02] placeholder:text-gray-600 focus:border-[#dad3af] focus:outline-none focus:ring-transparent sm:h-14 md:text-3xl ${
                            errors.cardHolder && touched.cardHolder
                              ? 'animate-input-label border-solid border-red-600'
                              : 'animate-none border-[#F5bd02]'
                          }`}
                        />
                        <ErrorMessage
                          name="cardHolder"
                          component="p"
                          className="absolute bottom-0 left-0 w-full text-center text-sm text-[#f86666]"
                        />
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
          {/* backface of card */}
          <div
            className={`credit-card backface-hide normal-rotate absolute inset-0 h-full w-full rounded-2xl p-6 shadow-md`}
          >
            <Formik
              initialValues={{
                cvv: '',
              }}
              validationSchema={CVVSchema}
              onSubmit={(
                values: Cvv,
                { setSubmitting }: FormikHelpers<Cvv>
              ) => {
                setTimeout(() => {
                  // eslint-disable-next-line no-alert
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 500);
              }}
            >
              {({ errors, touched }) => (
                <Form className="flex w-full flex-col gap-1">
                  <div className="relative h-[100px] w-full rounded-md bg-gradient-to-b from-gray-900 via-gray-800 to-black">
                    <div
                      className="absolute top-[50%] left-4 z-10 flex translate-y-[-50%] cursor-pointer flex-col items-center gap-2"
                      onClick={() => setIsCardFlipped((prev) => !prev)}
                    >
                      <TbHandClick className="text-2xl text-white" />
                      <p className="text-xs font-medium text-white">
                        Click Me!
                      </p>
                    </div>
                  </div>
                  <div className="relative mt-4 flex h-full w-full flex-col items-end justify-center pb-5">
                    <label
                      className={`text-right font-medium capitalize text-white ${
                        errors.cvv && touched.cvv
                          ? 'animate-input-label'
                          : 'animate-none'
                      }`}
                      htmlFor="cvv"
                    >
                      CVV
                    </label>
                    <Field
                      id="cvv"
                      type="password"
                      name="cvv"
                      placeholder="* * *"
                      className={`ml-auto h-14 w-[120px] rounded-md border-2 bg-transparent px-4 text-center text-3xl font-semibold tracking-widest text-[#F5bd02] focus:border-[#dad3af] focus:outline-none focus:ring-transparent ${
                        errors.cvv && touched.cvv
                          ? 'animate-input-label border-solid border-red-600'
                          : 'animate-none border-[#F5bd02]'
                      }`}
                    />
                    <ErrorMessage
                      name="cvv"
                      component="p"
                      className="absolute bottom-0 right-0 w-full text-right text-sm text-[#f86666]"
                    />
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
