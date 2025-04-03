import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  cn,
} from "@/shared";
import { OrderListProducts } from "./order-list-products";
import { OrderItemProps } from "../model/orders-type";
import { useOrdersStatus } from "../model/use-orders-status";

export const OrderItems = ({ order }: OrderItemProps) => {
  const { colorStatus } = useOrdersStatus(order.status);

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full bg-color-white rounded-md p-4"
    >
      <AccordionItem value={String("default-value")}>
        <AccordionTrigger className="p-0 pb-1">
          <span className="font-bold text-lg w-full text-start">
            Order: #{order.id}
          </span>
          <span className="inline-flex items-center w-full justify-end mr-2">
            <span className="text-base text-black-opacity75 flex items-center gap-2">
              <b
                className={cn(
                  "block rounded-full w-4 h-4 opacity-60 ml-2 mr-2",
                  colorStatus
                )}
              ></b>
              {order.status.charAt(0).toUpperCase() +
                order.status.slice(1).toLowerCase()}
            </span>
          </span>
        </AccordionTrigger>
        <AccordionContent className="flex justify-between align-top py-4">
          <div className="basis-[50%]">
            <dl className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <dt className="text-base font-medium">First name:</dt>
                <dd className="text-base text-black-opacity75">
                  {order.firstName}
                </dd>
              </div>
              <div className="flex items-center gap-2">
                <dt className="text-base font-medium">Last name:</dt>
                <dd className="text-base text-black-opacity75">
                  {order.lastName}
                </dd>
              </div>
              <div className="flex items-center gap-2">
                <dt className="text-base font-medium">Phone number:</dt>
                <dd className="text-base text-black-opacity75">
                  {order.phoneNumber}
                </dd>
              </div>
              <div className="flex items-center gap-2">
                <dt className="text-base font-medium">Country:</dt>
                <dd className="text-base text-black-opacity75">
                  {order.country}
                </dd>
              </div>
              <div className="flex items-center gap-2">
                <dt className="text-base font-medium">City:</dt>
                <dd className="text-base text-black-opacity75">{order.city}</dd>
              </div>
              <div className="flex items-center gap-2">
                <dt className="text-base font-medium">Address:</dt>
                <dd className="text-base text-black-opacity75">
                  {order.address}
                </dd>
              </div>
              <div className="flex items-center gap-2">
                <dt className="text-base font-medium">Payment:</dt>
                <dd className="text-base text-black-opacity75">
                  {order.payment}
                </dd>
              </div>
            </dl>
          </div>
          <div className="basis-[60%]">
            <div className="overflow-y-auto">
              <div className="flex justify-between mb-4 font-medium text-base">
                <span>Total: ${order.totalPrice.toLocaleString("en-US")}</span>
                <span>
                  CreateAt: {order.createdAt.toString().split("T")[0]}
                </span>
              </div>
              <OrderListProducts orderProducts={order.orderItems} />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
