import { ItemCounter } from './shopping-cart/ItemCounter';

interface ItemInCart {
  productName: string;
  quantity: number;
}

const itemsInCart: ItemInCart[] = [
  { productName: "Nintendo Switch 2",
    quantity: 10
  },
  {
    productName: "PlayStation 5",
    quantity: 5
  },
  {
    productName: "Xbox Series X",
    quantity: 8
  },
  {
    productName: "Super Mario Bros",
    quantity: 12
  }
];

export function FirstStepsApp() {

  return (
    <>
      <h1>Carrito de compras!!!</h1>

      {
        itemsInCart.map(({ productName, quantity }) => (
          <ItemCounter 
            key={productName}
            name={productName}
            quantity={quantity}
          />
        ))}
{/* 
      <ItemCounter name="Nintendo Switch 2" quantity={10} />
      <ItemCounter name="PlayStation 5" quantity={5} />
      <ItemCounter name="Xbox Series X" quantity={3} />
      <ItemCounter name="Super Mario Bros" quantity={10} /> */}
      
      
    </>
  )
}
