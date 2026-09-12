export type User = {
  id: string;
  name: string;
  email: string;
  role: {
    id: number;
    name: string;
  };
  createdAt: Date;
  updatedAt: Date;
};

export type ProfileType = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  role: {
    id: number;
    name: string;
  };
  addresses: {
    id: string;
    address: string;
    country: string;
    city: string;
    governorate: string;
    postalCode: string | null;
  }[];
};
