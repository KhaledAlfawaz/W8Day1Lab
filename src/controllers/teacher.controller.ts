import { prisma } from '../config/db';
import { Request, Response } from 'express';

export const createTeacher = async (req: Request, res: Response) => {
  const teacher = req.body;
  try {
    const newTeacher = await prisma.teacher.create({
      data: teacher,
    });
    if (newTeacher) {
      res.json(newTeacher);
    } else {
      res
        .status(400)
        .json({ message: 'Something went wrong , please try again' });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getTeachers = async (req: Request, res: Response) => {
  try {
    const Teachers = await prisma.teacher.findMany({
      include: {
        classrooms: {
          select: {
            name: true,
            students: {
              select: {
                student: true,
              },
            },
          },
        },
      },
    });
    if (Teachers) {
      res.json(Teachers);
    } else {
      res.status(404).json({ message: 'no teachers found' });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getTeacherById = async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    const teacher = await prisma.teacher.findFirst({
      where: {
        id: id,
      },
    });
    if (teacher) {
      res.json(teacher);
    } else {
      res.status(404).json({ message: 'no teacher found' });
    }
  } catch (error) {
    console.log(error);
  }
};
