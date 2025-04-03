import Image from "next/image";
import Link from "next/link";
import { OrderListProductsProps } from "../model/orders-type";

export const OrderListProducts = ({
  orderProducts,
}: OrderListProductsProps) => {
  const featureProductsCart = ["car", "total", "quantity"];

  return (
    <div className="overflow-y-auto max-h-[19vh]">
      <div className="flex flex-col gap-4">
        {orderProducts?.length ? (
          orderProducts.map((item) => (
            <div
              key={item.id}
              className="w-full relative rounded-md p-[12px] flex gap-5 bg-color-minimal-white"
            >
              <Image
                src={item.product.imageSrc}
                width={130}
                height={71}
                alt={item.product.model}
                className="rounded-md relative"
              />
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    {featureProductsCart.map((feature, index) => (
                      <th
                        key={index}
                        className="text-left text-black-opacity75 text-base font-normal capitalize"
                      >
                        {feature}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Link
                        className="text-lg font-bold uppercase"
                        href={`/product/${item.productId}`}
                      >
                        {item.product.model}
                      </Link>
                    </td>
                    <td className="text-lg font-bold w-[120px]">
                      ${item.price?.toLocaleString("en-US")}
                    </td>
                    <td className="text-lg font-bold  w-[40px]">
                      {item.quantity}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))
        ) : (
          <p className="text-center text-black-opacity75">
            No products in this order
          </p>
        )}
      </div>
    </div>
  );
};
