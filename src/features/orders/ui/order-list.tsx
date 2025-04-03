import { OrderProps } from "../model/orders-type";
import { OrderItems } from "./order-items";

export const OrderList = ({ orders }: OrderProps) => {
  return (
    <>
      <div className="flex-1 min-h-0 overflow-y-auto ">
        <div className="flex flex-wrap gap-4 p-4">
          {orders?.length > 0 ? (
            orders.map((order) => {
              return <OrderItems key={order.id} order={order} />;
            })
          ) : (
            <div className="w-full bg-color-white rounded-md text-center p-4 hover-shadow-block">
              <h1 className="text-xl font-bold mb-1">No orders</h1>
              <p>Oops, looks like you don&apos;t have any orders</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
