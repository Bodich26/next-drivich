type LoginRequest = {
  email: string;
  password: string;
};

type LoginResponse = {
  message: string;
  error?: string;
  success: boolean;
  user: {
    id: string;
    email: string;
    firstName: string;
  };
  token: string;
};

type RegisterRequest = {
  firstName: string;
  email: string;
  password: string;
};

type RegisterResponse = {
  message: string;
  error?: string;
  success: boolean;
  user: {
    id: string;
    email: string;
    firstName: string;
  };
  token: string;
};

export type { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse };
