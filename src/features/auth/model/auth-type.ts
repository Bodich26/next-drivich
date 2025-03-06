type LoginRequest = {
  email: string;
  password: string;
};

type LoginResponse = {
  user: {
    id: string;
    email: string;
    name: string;
  };
  token: string;
};

type RegisterRequest = {
  name: string;
  email: string;
  password: string;
};

type RegisterResponse = {
  user: {
    id: string;
    email: string;
    name: string;
  };
  token: string;
};

export type { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse };
