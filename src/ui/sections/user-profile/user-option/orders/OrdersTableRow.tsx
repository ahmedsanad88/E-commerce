import Link from 'next/link';
import React from 'react';
import { MdArrowForwardIos } from 'react-icons/md';

interface IOrdersTableRowProps {
  orderId: string;
  date: string;
  price: string;
  status: string;
}

const OrdersTableRow = ({
  orderId,
  date,
  price,
  status,
}: IOrdersTableRowProps) => {
  return (
    <tr className="border-b-2 border-black/10 bg-[#f1f1f1] hover:bg-gray-50">
      <td className="w-4 p-4">
        <div className="flex items-center">
          <input
            id="checkbox-table-1"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
          />
          <label htmlFor="checkbox-table-1" className="sr-only">
            checkbox
          </label>
        </div>
      </td>
      <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium">
        {orderId}
      </th>
      <td className="px-6 py-4">{new Date(date).toLocaleDateString()}</td>
      <td className="px-6 py-4">{`$${price}`}</td>
      <td
        className={`px-6 py-4 capitalize ${
          status.toLocaleLowerCase() === 'paid'
            ? 'text-green-600'
            : 'text-[#B00020]'
        }`}
      >
        {status}
      </td>
      <td className="px-6 py-4">
        <Link
          href={`/user-profile/my-orders/${orderId.replace('#', '')}`}
          className="text-2xl text-blue-600"
        >
          <MdArrowForwardIos />
        </Link>
      </td>
    </tr>
  );
};

export default OrdersTableRow;
