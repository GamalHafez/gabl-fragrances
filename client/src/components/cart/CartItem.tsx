type CartItemProps = {
  name: string;
};
export const CartItem = ({ name }: CartItemProps) => {
  return (
    <div>
      <p className="text-black">{name}</p>
    </div>
  );
};
