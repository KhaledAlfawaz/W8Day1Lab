import { prisma } from '../config/db';
import { Request, Response } from 'express';

export const createUser = async (req: Request, res: Response) => {
  const user = req.body;
  try {
    const newUser = await prisma.user.create({
      data: user,
    });
    if (newUser) {
      res.json(newUser);
    } else {
      res
        .status(400)
        .json({ message: 'Something went wrong , please try again' });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        username: true,
        email: true,
      },
    });
    if (users) {
      res.json(users);
    } else {
      res.status(404).json({ message: 'no users found' });
    }
  } catch (error) {
    console.log(error);
  }
};

export const createProfile = async (req: Request, res: Response) => {
  const profile = req.body;
  try {
    const newProfile = await prisma.profile.create({
      data: profile,
    });
    if (newProfile) {
      res.json(newProfile);
    } else {
      res
        .status(400)
        .json({ message: 'Something went wrong , please try again' });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getProfiles = async (req: Request, res: Response) => {
  try {
    const users = await prisma.profile.findMany({
      select: {
        id: true,
        user: {
          select: {
            id: true,
            username: true,
            email: true,
            profile: true,
          },
        },
      },
    });
    if (users) {
      res.json(users);
    } else {
      res.status(404).json({ message: 'no users found' });
    }
  } catch (error) {
    console.log(error);
  }
};
