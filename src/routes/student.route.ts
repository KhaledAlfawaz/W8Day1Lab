import {createStudent , getStudentById , getStudents} from '../controllers/student.controller'
import express from 'express';
import validate from '../middleware/validate'
import { createStudentType , getStudentByIdType} from '../zod.schema/zod.student'

const route = express.Router();

route.get('/' , getStudents);

route.get('/id' ,validate(getStudentByIdType), getStudentById);

route.post('/'  ,validate(createStudentType),createStudent);

export default route