export type AllCartsType = {
  carts: CartType[];
  total: number;
  skip: number;
  limit: number;
};

export type CartType = {
  id: string;
  products: ProductType[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
};

export type ProductType = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedPrice: number;
  thumbnail: string;
};

export type AllUsersType = {
  users: UserType[];
  total: number;
  skip: number;
  limit: number;
};

export type UserType = {
  id: string;
  firstName: string;
  lastName: string;
  image?: string;
  email: string;
  phone: string;
  age: number;
  gender?: string;
  username: string;
  password: string;
  ip?: string;
  birthDate?: string;
};

export type AllProductsType = {
  products: ProductsType[];
  total: number;
  skip: number;
  limit: number;
};

type ProductsType = {
  id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage?: number;
  rating?: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail?: string | null;
  images: (string | null)[];
};

export default ProductsType;
