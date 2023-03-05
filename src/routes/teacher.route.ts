import {
  createTeacher,
  getTeacherById,
  getTeachers,
} from '../controllers/teacher.controller';
import express from 'express';
import validate from '../middleware/validate';
import {
  createTeacherType,
  getTeacherByIdType,
} from '../zod.schema/zod.teacher';

const route = express.Router();

route.get('/', getTeachers);

route.get('/id', validate(getTeacherByIdType), getTeacherById);

route.post('/', validate(createTeacherType), createTeacher);

export default route;
