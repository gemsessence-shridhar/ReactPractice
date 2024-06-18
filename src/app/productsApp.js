import ProductList from '@/components/ProductList';
import { products } from '@/data/products';

export default function Eshop() {
  return <ProductList products={products} />
}
