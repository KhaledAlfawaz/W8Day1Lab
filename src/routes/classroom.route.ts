import {
  createClassroom,
  getClassroomById,
  getClassrooms,
} from '../controllers/classroom.controller';
import express from 'express';
import validate from '../middleware/validate';
import {
  createClassroomType,
  getClassroomByIdType,
} from '../zod.schema/zod.classroom';

const route = express.Router();

route.get('/', getClassrooms);

route.get('/id', validate(getClassroomByIdType), getClassroomById);

route.post('/', validate(createClassroomType), createClassroom);

export default route;
