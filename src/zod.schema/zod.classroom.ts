import { TypeOf, z } from 'zod';

const classroomObj = z.object({
  id: z.string({
    required_error: 'id is required',
    invalid_type_error: 'id must be string',
  }),
  name: z.string({
    required_error: 'name is required',
    invalid_type_error: 'name must be string',
  }),
  teacherId: z.string({
    required_error: 'teacherId is required',
    invalid_type_error: 'teacherId must be string',
  }),
});

export const createClassroomType = z.object({
  body: classroomObj.omit({ id: true }),
});

export const getClassroomByIdType = z.object({
  body: classroomObj.pick({ id: true }),
});

export type createClassroomTypeSchema = TypeOf<
  typeof createClassroomType
>['body'];
export type getClassroomByIdTypeSchema = TypeOf<
  typeof getClassroomByIdType
>['body'];
