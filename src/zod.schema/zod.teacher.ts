import { TypeOf, z } from 'zod';

const teacherObj = z.object({
  id: z.string({
    required_error: 'id is required',
    invalid_type_error: 'id must be string',
  }),
  name: z.string({
    required_error: 'name is required',
    invalid_type_error: 'name must be string',
  }),
});

export const createTeacherType = z.object({
  body: teacherObj.omit({ id: true }),
});

export const getTeacherByIdType = z.object({
  body: teacherObj.pick({ id: true }),
});

export type createTeacherTypeSchema = TypeOf<typeof createTeacherType>['body'];
export type getTeacherByIdTypeSchema = TypeOf<
  typeof getTeacherByIdType
>['body'];
