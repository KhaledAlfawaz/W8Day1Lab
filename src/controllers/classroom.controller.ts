import { prisma } from '../config/db';
import { Request, Response } from 'express';

export const createClassroom = async (req:Request , res:Response) => {
    const classroom = req.body
    try {
        const newClassroom = await prisma.classroom.create({
            data:classroom,
        })
        if(newClassroom){
            res.json(newClassroom)
        } else {
            res.status(400).json({message:'Something went wrong , please try again'})
        }
    } catch (error) {
        console.log(error);
    }
}

export const getClassrooms = async (req:Request , res:Response) => {
    try {
        const classrooms = await prisma.classroom.findMany({
            include:{
                teacher:{
                    select:{
                        name:true
                    }
                },
                students:{
                    select:{
                        student:true,
                    }
                }
            }
        })
        if(classrooms){
            res.json(classrooms)
        } else {
            res.status(404).json({message:'no classrooms found'})
        }
    } catch (error) {
        console.log(error);
    }
}

export const getClassroomById = async (req:Request , res:Response) => {
    const {id} = req.body
    try {
        const classroom = await prisma.classroom.findFirst({
            where:{
                id:id
            }
        })
        if(classroom){
            res.json(classroom)
        } else {
            res.status(404).json({message:'no classroom found'})
        }
    } catch (error) {
        console.log(error);
    }
}