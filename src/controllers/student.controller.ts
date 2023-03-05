import { prisma } from '../config/db';
import { Request, Response } from 'express';

export const createStudent = async (req: Request, res: Response) => {
  const student = req.body;
  try {
    const newStudent = await prisma.student.create({
      data: student,
    });
    if (newStudent) {
      res.json(newStudent);
    } else {
      res
        .status(400)
        .json({ message: 'Something went wrong , please try again' });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getStudents = async (req: Request, res: Response) => {
  try {
    const Students = await prisma.student.findMany({
      include: {
        classrooms: {
          select: {
            classroomId: true,
            classroom: true,
          },
        },
      },
    });
    if (Students) {
      res.json(Students);
    } else {
      res.status(404).json({ message: 'no students found' });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getStudentById = async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    const Student = await prisma.student.findFirst({
      where: {
        id: id,
      },
    });
    if (Student) {
      res.json(Student);
    } else {
      res.status(404).json({ message: 'no student found' });
    }
  } catch (error) {
    console.log(error);
  }
};
