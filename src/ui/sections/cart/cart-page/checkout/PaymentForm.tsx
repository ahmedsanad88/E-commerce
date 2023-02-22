import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import React, { useState } from 'react';

import amazonPay from '@/public/assets/images/amazon-pay.png';
import applePay from '@/public/assets/images/apple-pay.png';
import creditcard from '@/public/assets/images/cc.png';
import GooglePay from '@/public/assets/images/google-pay.png';
import payTm from '@/public/assets/images/pay-tm.png';
import phonePe from '@/public/assets/images/phonepe.png';
import upi from '@/public/assets/images/upi.png';

type Pay1 = 'upi' | 'credit/debit card' | 'apple pay' | 'amazon pay';
type Pay2 = 'google pay' | 'phone pe' | 'paytm';

const payMethods: {
  title: Pay1;
  Image: StaticImageData;
}[] = [
  {
    title: 'upi',
    Image: upi,
  },
  {
    title: 'credit/debit card',
    Image: creditcard,
  },
  {
    title: 'apple pay',
    Image: applePay,
  },
  {
    title: 'amazon pay',
    Image: amazonPay,
  },
];

const paymentInfo: {
  title: Pay2;
  image: StaticImageData;
}[] = [
  { title: 'google pay', image: GooglePay },
  { title: 'phone pe', image: phonePe },
  { title: 'paytm', image: payTm },
];

const PaymentForm = () => {
  const [selectedPayment, setSelectedPayment] = useState<Pay1>('upi');
  const [selectedPaymentType, setSelectedPaymentType] =
    useState<Pay2>('google pay');
  return (
    <div>
      <div className="flex flex-wrap gap-4">
        {payMethods.map((method, idx) => (
          <div
            key={idx}
            className={`flex min-w-[160px] flex-1 cursor-pointer flex-col gap-4 rounded-md border-2 border-solid p-4 ${
              selectedPayment === method.title.toLowerCase()
                ? 'border-transparent bg-[#639599]/20'
                : 'border-[#626262]/10'
            }`}
            onClick={() => setSelectedPayment(method.title)}
          >
            <div className="flex w-full items-center justify-end">
              <div className="grid h-[18px] w-[18px] place-items-center rounded-full border-2 border-solid border-[#626262]">
                {selectedPayment === method.title.toLowerCase() && (
                  <div className="h-[10px] w-[10px] rounded-full bg-[#1B4B66]"></div>
                )}
              </div>
            </div>
            <div className="grid place-items-center">
              <Image src={method.Image} alt={method.title} />
            </div>
            <h2 className="text-center font-medium capitalize text-[#171520]">
              {method.title}
            </h2>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-md border-2 border-solid border-[#1B4B66]">
        {paymentInfo.map((info, idex) => (
          <div
            className={`flex cursor-pointer items-center justify-between gap-2 p-2 ${
              selectedPaymentType === info.title && 'bg-[#639599]/20'
            }`}
            key={idex}
            onClick={() => setSelectedPaymentType(info.title)}
          >
            <div className="flex flex-col items-start justify-start gap-4">
              <div className="flex items-center justify-start gap-3">
                <div className="grid h-[86px] w-[86px] place-items-center rounded-md border-2 border-[#626262]/10 p-2">
                  <Image
                    src={info.image}
                    alt={info.title}
                    width={70}
                    height={70}
                  />
                </div>
                <h2 className="text-center font-medium capitalize text-[#171520]">
                  {info.title}
                </h2>
              </div>
              {selectedPaymentType === info.title && (
                <form>
                  <div className="flex flex-col gap-2">
                    <input
                      type="text"
                      id="payAccount"
                      name="payAccount"
                      placeholder={`${
                        info.title === 'google pay'
                          ? 'Enter You UPI account Id'
                          : 'Enter your ID'
                      }`}
                      className="h-10 w-full rounded-md border-2 border-[#639599]/80 px-2 sm:w-[287px]"
                    />
                    <p className="text-xs font-medium text-[#a7a7a7]">
                      {info.title === 'google pay'
                        ? 'Eg: 1234567890@ybl'
                        : 'Eg: 123456789'}
                    </p>
                    <label
                      htmlFor="saveInfo"
                      className="flex cursor-pointer items-center gap-4 text-sm font-medium text-[#626262]"
                    >
                      <input
                        type="checkbox"
                        name="saveInfo"
                        id="saveInfo"
                        className="h-[18px] w-[18px]"
                      />
                      {` `}Save this for future transactions
                    </label>
                  </div>
                </form>
              )}
            </div>
            <div className="grid h-[18px] w-[18px] place-items-center rounded-full border-2 border-solid border-[#626262]">
              {selectedPaymentType === info.title.toLowerCase() && (
                <div className="h-[10px] w-[10px] rounded-full bg-[#1B4B66]"></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentForm;
