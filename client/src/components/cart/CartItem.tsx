type CartItemProps = {
  name: string;
};
export const CartItem = ({ name }: CartItemProps) => {
  return (
    <div>
      <p>{name}</p>
    </div>
  );
};
