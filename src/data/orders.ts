export interface IOrders {
  orderId: string;
  date: string;
  price: string;
  status: string;
}

export const orders: IOrders[] = [
  {
    orderId: '#874522648',
    date: 'September 5, 2020',
    price: '218.50',
    status: 'paid',
  },
  {
    orderId: '#874522649',
    date: 'September 5, 2020',
    price: '218.50',
    status: 'paid',
  },
  {
    orderId: '#874522650',
    date: 'September 5, 2020',
    price: '218.50',
    status: 'unpaid',
  },
  {
    orderId: '#874522651',
    date: 'September 5, 2020',
    price: '218.50',
    status: 'paid',
  },
];
