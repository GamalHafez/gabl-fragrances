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
