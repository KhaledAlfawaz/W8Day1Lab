import { TypeOf, z } from 'zod';

const studentInClassroomsObj = z.object({
  id: z.string({
    required_error: 'id is required',
    invalid_type_error: 'id must be string',
  }),
  studentId: z.string({
    required_error: 'studentId is required',
    invalid_type_error: 'studentId must be string',
  }),
  classroomId: z.string({
    required_error: 'classroomId is required',
    invalid_type_error: 'classroomId must be string',
  }),
});

export const addStudentToClassroomType = z.object({
  body: studentInClassroomsObj.omit({ id: true }),
});


export type addStudentToClassroomTypeSchema = TypeOf<typeof addStudentToClassroomType>['body'];


