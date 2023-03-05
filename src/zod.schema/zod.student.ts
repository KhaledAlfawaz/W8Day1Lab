import { TypeOf, z } from 'zod';

const studentObj = z.object({
  id: z.string({
    required_error: 'id is required',
    invalid_type_error: 'id must be string',
  }),
  name: z.string({
    required_error: 'name is required',
    invalid_type_error: 'name must be string',
  }),
  age: z
    .number({
      required_error: 'age is required',
      invalid_type_error: 'age must be number',
    })
    .min(7, 'min age is 7')
    .max(110, 'max age is 110'),
  major: z.string({
    required_error: 'major is required',
    invalid_type_error: 'major must be string',
  }),
});

export const createStudentType = z.object({
  body: studentObj.omit({ id: true }),
});

export const getStudentByIdType = z.object({
  body: studentObj.pick({ id: true }),
});

export type createStudentTypeSchema = TypeOf<typeof createStudentType>['body'];
export type getStudentByIdTypeSchema = TypeOf<
  typeof getStudentByIdType
>['body'];
