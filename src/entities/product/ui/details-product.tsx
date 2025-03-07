import { ProductType } from "../model/product-type";

type ProductDetailsProps = {
  product: ProductType;
};

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <div className="w-full rounded-md p-4 bg-color-white mt-8">
      <p className="text-lg">
        {`
          ${product.brand}: ${
          product.model
        } - is a high-performance car equipped with a
          powerful ${
            product.power
          } hp engine that accelerates from 0 to 100 km/h in just ${
          product.acceleration
        }
          seconds. It reaches a top speed of ${
            product.speed
          } km/h, with a reliable ${product.engineValue}L
          gasoline engine under the hood. This car combines performance, style,
          and innovation, delivering an incredible driving experience. Price — $${product.price.toLocaleString(
            "en-US"
          )}.`}
      </p>
    </div>
  );
};
