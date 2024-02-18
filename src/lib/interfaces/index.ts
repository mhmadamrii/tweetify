export interface FilteredUser {
  id: string;
  name: string;
  email: string;
  isCompleted?: boolean;
  username: string;
  role: string;
  verified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface UserResponse {
  status: string;
  data: {
    user: FilteredUser;
  };
}

export interface UserLoginResponse {
  status: string;
  token: string;
}

export interface SaveUserActionProps {
  id: string;
  imageUrl?: string;
  name: string;
  username?: string;
  email?: string;
  bio: string;
  isCompleted: boolean;
  password?: string | undefined;
}
