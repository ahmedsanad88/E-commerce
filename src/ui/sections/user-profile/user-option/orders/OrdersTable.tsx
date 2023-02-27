import React from 'react';

import { orders } from '@/data/orders';

import OrdersTableRow from './OrdersTableRow';

const OrdersTable = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-left text-[#171520]">
        <thead className="border-b-2 border-black/10 bg-white pb-2 uppercase text-gray-700">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                />
                <label htmlFor="checkbox-all" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              Order ID
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Check Order
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, idx) => (
            <OrdersTableRow key={idx} {...order} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
