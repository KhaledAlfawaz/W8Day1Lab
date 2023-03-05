import {
  addStudentToClassroom,
  getStudentsAndClassrooms,
  deleteStudentInClassroom,
} from '../controllers/studentsInClassrooms.controller';
import express from 'express';
import validate from '../middleware/validate';
import { addStudentToClassroomType } from '../zod.schema/zod.studentsInClassrooms';

const route = express.Router();

route.get('/', getStudentsAndClassrooms);

route.post('/', validate(addStudentToClassroomType), addStudentToClassroom);

route.delete('/', deleteStudentInClassroom);

export default route;
