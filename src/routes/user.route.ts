import {
  createUser,
  getUsers,
  createProfile,
  getProfiles,
} from '../controllers/user.controller';
import express from 'express';
import validate from '../middleware/validate';
import { createProfileType, createUserType } from '../zod.schema/zod.user';

const route = express.Router();

route.get('/', getUsers);

route.get('/profile', getProfiles);

route.post('/', validate(createUserType), createUser);

route.post('/profile', validate(createProfileType), createProfile);

export default route;
