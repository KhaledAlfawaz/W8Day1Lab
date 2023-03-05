import { TypeOf, z } from 'zod';

const userObj = z.object({
  userId: z.string({
    required_error: 'userId is required',
    invalid_type_error: 'userId must be string',
  }),
  email: z.string({
    required_error: 'email is required',
    invalid_type_error: 'email must be string',
  }),
  username: z.string({
    required_error: 'name is required',
    invalid_type_error: 'name must be string',
  }),
  password: z.string({
    required_error: 'password is required',
    invalid_type_error: 'password must be string',
  }),
  img: z.string({
    required_error: 'img is required',
    invalid_type_error: 'img must be string',
  }),
});

export const createUserType = z.object({
  body: userObj.omit({ userId: true, img: true }),
});

export const createProfileType = z.object({
  body: userObj.pick({ userId: true, img: true }),
});

export type createUserTypeSchema = TypeOf<typeof createUserType>['body'];
export type createProfileTypeSchema = TypeOf<typeof createProfileType>['body'];
