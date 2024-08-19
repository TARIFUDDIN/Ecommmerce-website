/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { ReactElement, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Column } from "react-table";
import { Skeleton } from "../components/loader";
import TableHOC from "../components/admin/TableHOC";
import { useMyOrdersQuery } from "../redux/api/orderAPI";
import { CustomeError } from "../types/api-types";
import { UserReducerIntialState } from "../types/reducer-types";
type DataType = {
  _id: string;
  amount: number;
  quantity: number;
  discount: number;
  status: ReactElement;
  action: ReactElement;
};
const column: Column<DataType>[] = [
  {
    Header: "ID",
    accessor: "_id",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "DISCOUNT",
    accessor: "discount",
  },
  {
    Header: "AMOUNT",
    accessor: "amount",
  },
  {
    Header: "STATUS",
    accessor: "status",
  },
  {
    Header: "ACTION",
    accessor: "action",
  },
];
const Orders = () => {
  const { user } = useSelector(
    (state: { userReducer: UserReducerIntialState }) => state.userReducer
  );
  const { isLoading, data, isError, error } = useMyOrdersQuery(user?._id!);
  if (isError) {
    const err = error as CustomeError;
    toast.error(err.data.message);
  }

  useEffect(() => {
    if (data)
      setRows(
        data.orders.map((i) => ({
          _id: i._id,
          amount: i.total,
          discount: i.discount,
          quantity: i.orderItems.length,
          status: (
            <span
              className={
                i.status === "Processing"
                  ? "red"
                  : i.status === "Shipped"
                  ? "green"
                  : "purple"
              }
            >
              {i.status}
            </span>
          ),
          action: <Link to={`/admin/transaction/${i._id}`}> Manage </Link>,
        }))
      );
  }, [data]);
  const [rows, setRows] = useState<DataType[]>([
    {
      _id: "dwwdwdq",
      amount: 12,
      quantity: 30,
      discount: 400,
      status: <span className="red">Processing</span>,
      action: <Link to={`/order/qsdwf`}>View</Link>,
    },
  ]);
  const Table = TableHOC<DataType>(
    column,
    rows,
    "dasboard-product-box",
    "Orders",
    rows.length > 6
  )();
  return (
    <div className="container">
      <h1>My Orders</h1>
      {isLoading ? <Skeleton length={20} /> : Table}
    </div>
  );
};

export default Orders;