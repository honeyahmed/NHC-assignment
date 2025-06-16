
import { getProducts } from "@/services/getProducts";



export default async function Products() {

  const products = await getProducts();
  console.log(products);
  return (
    <>
    </>
  );
}
