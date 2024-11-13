export interface Role {
  id: number;
  name: string;
  __entity: string;
}

export interface Status {
  id: number;
  name: string;
  __entity: string;
}

export interface UserMe {
  position: string;
  id: string;
  email: string;
  provider: string;
  firstName: string;
  lastName: string;
  role: Role;
  status: Status;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}
