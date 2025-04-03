import { Order, OrderItem, Product } from "@prisma/client";

// Тип заказа с товарами
type OrderWithProducts = Order & {
  orderItems: OrderItemWithProduct[];
};

// Тип массива заказов
type OrderProps = {
  orders: OrderWithProducts[];
};

// Тип заказанного товара с продуктом
type OrderItemWithProduct = OrderItem & {
  product: Product;
};

// Тип для отдельного заказа
type OrderItemProps = {
  order: OrderWithProducts;
};

// Тип для списка товаров в заказе
type OrderListProductsProps = {
  orderProducts: OrderItemWithProduct[];
};

export type {
  OrderWithProducts,
  OrderProps,
  OrderItemWithProduct,
  OrderItemProps,
  OrderListProductsProps,
};
