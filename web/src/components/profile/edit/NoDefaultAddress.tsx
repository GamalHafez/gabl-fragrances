import { MapPin } from "lucide-react";

export const NoDefaultAddress = () => {
  return (
    <form className="flex flex-col items-center justify-center gap-2 text-center">
      <MapPin className="h-5 w-5 text-gray-500" />

      <h3>No default address yet</h3>
      <p>Add your shipping address to make checkout faster</p>

      <button className="cursor-pointer" onClick={() => {}}>
        + Add Default Address
      </button>
    </form>
  );
};
