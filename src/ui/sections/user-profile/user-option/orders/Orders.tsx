import React, { useState } from 'react';

import OrdersTable from './OrdersTable';

const Orders = () => {
  const [ordersType, setOrdersType] = useState<
    'completed' | 'processing' | 'cancelled'
  >('completed');

  const selectedStyle = (option: typeof ordersType): string => {
    return ordersType === option
      ? 'bg-[#1B4B66] text-white'
      : 'bg-transparent text-[#626262]';
  };

  return (
    <div className="w-full">
      <div className="mb-8 flex w-full flex-col items-center justify-between sm:flex-row">
        <h2 className="text-center text-[34px] font-semibold text-[#1B4B66]">
          My Orders
        </h2>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for order"
          className="h-14 w-[300px] rounded-md bg-[#f1f1f1] px-4 text-[#171520]"
        />
      </div>
      <div className="w-full">
        <div className="mb-6 flex h-[68px] w-full items-center gap-4 overflow-x-auto rounded bg-[#f1f1f1] px-4 py-2">
          <button
            className={`h-full min-w-fit rounded px-[18px] font-medium ${selectedStyle(
              'completed'
            )}`}
            onClick={() => setOrdersType('completed')}
          >
            Completed
          </button>
          <button
            className={`h-full min-w-fit rounded px-[18px] font-medium ${selectedStyle(
              'processing'
            )}`}
            onClick={() => setOrdersType('processing')}
          >
            Processing
          </button>
          <button
            className={`h-full min-w-fit rounded px-[18px] font-medium ${selectedStyle(
              'cancelled'
            )}`}
            onClick={() => setOrdersType('cancelled')}
          >
            Cancelled
          </button>
        </div>

        {/* <div className="grid grid-cols-5 gap-2 border-b-2 border-black/10 pb-2 text-center text-[#626262]">
          <h2>Order ID</h2>
          <h2>Date</h2>
          <h2>Price</h2>
          <h2>Status</h2>
        </div> */}
        <OrdersTable />
      </div>
    </div>
  );
};

export default Orders;
