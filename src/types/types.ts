export type User = {
  name: string;
  email: string;
  photo: string;
  gender: string;
  dob: string;
  role: string;
  _id: string;
};

export type Product = {
  name: string;
  price: number;
  stock: number;
  category: string;
  photo: string;
  _id: string;
};
export type ShippingInfo = {
  address: string;
  pinCode: string;
  state: string;
  country: string;
  city: string;
};

export type CartItem = {
  productId: string;
  photo: string;
  price: number;
  name: string;
  quantity: number;
  stock: number;
};
export type OrderItem = Omit<CartItem, "stock"> & { _id: string };

export type Order = {
  orderItems: OrderItem[];
  shippingInfo: ShippingInfo;
  subtotal: number;
  shippingCharges: number;
  discount: number;
  total: number;
  tax: number;
  status: string;
  _id: string;
  user: {
    name: string;
    _id: string;
  };
};

type CountAndChange = {
  revenue: number;
  product: number;
  user: number;
  order: number;
};
type LatestTransaction = {
  _id: string;
  amount: number;
  discount: number;
  quantity: number;
  status: string;
};
export type Stats = {
  changedPercent: CountAndChange;
  counts: CountAndChange;
  chart: {
    order: number[];
    revenue: number[];
  };
  categoryCount: Record<string, number>[];
  userRatio: {
    male: number;
    female: number;
  };
  modifiedLatestTransaction: LatestTransaction[];
};
type RevenueDistribution = {
  netMargin: number;
  totalDiscount: number;
  totalProductionCost: number;
  totalBurnt: number;
  totalMarketingCost: number;
};
type OrderFullfillment = {
  processing: number;
  shipped: number;
  delivered: number;
};
type UserAgeGroup = {
  teen: number;
  adult: number;
  old: number;
};
export type Pie = {
  orderFullfillment: OrderFullfillment;
  productCategoriesRatio: Record<string, number>[];
  stockAvialability: {
    inStock: number;
    outOfStock: number;
  };
  revenueDistribution: RevenueDistribution;
  adminsAndUsersCount: {
    admin: number;
    user: number;
  };
  usersAgeGroup: UserAgeGroup;
};
export type Bar = {
  users: number[];
  products: number[];
  orders: number[];
};
export type Line = {
  users: number[];
  products: number[];
  discount: number[];
  revenue: number[];
};