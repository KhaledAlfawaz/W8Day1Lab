import { prisma } from '../config/db';
import { Request, Response } from 'express';

// add student to a classroom
export const addStudentToClassroom = async (req: Request, res: Response) => {
  const student = req.body;
  const checkStdId = await prisma.student.findFirst({
    where: {
      id: student.studentId,
    },
  });
  const checkClassId = await prisma.classroom.findFirst({
    where: {
      id: student.classroomId,
    },
  });
  try {
    // check if studentId exists in student table and classroomId exists in classroom table
    if (checkStdId && checkClassId) {
      const newStudent = await prisma.studentsInClassrooms.create({
        data: student,
      });
      if (newStudent) {
        res.json(newStudent);
      } else {
        res
          .status(400)
          .json({ message: 'Something went wrong , please try again' });
      }
    } else {
      res.json({ message: 'studentId or classroomId not found' });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getStudentsAndClassrooms = async (req: Request, res: Response) => {
  try {
    const StudentsAndClassrooms = await prisma.studentsInClassrooms.findMany({
      select: {
        id: true,
        classroom: true,
        student: true,
      },
    });
    if (StudentsAndClassrooms) {
      res.json(StudentsAndClassrooms);
    } else {
      res
        .status(404)
        .json({ message: 'Sorry StudentsAndClassrooms not found' });
    }
  } catch (error) {
    console.log(error);
  }
};

// delete student from a classroom
export const deleteStudentInClassroom = async (req: Request, res: Response) => {
  const { id } = req.body;
  const checkId = await prisma.studentsInClassrooms.findFirst({
    where: {
      id: id,
    },
  });
  try {
    if (checkId) {
      const StudentsAndClassrooms = await prisma.studentsInClassrooms.delete({
        where: {
          id: id,
        },
      });
      if (StudentsAndClassrooms) {
        res.json(
          `Student with id:${StudentsAndClassrooms.studentId} has been deleted`
        );
      } else {
        res
          .status(404)
          .json({ message: 'Sorry StudentsAndClassrooms not found' });
      }
    } else {
      res.json({ message: 'id not found' });
    }
  } catch (error) {
    console.log(error);
  }
};
