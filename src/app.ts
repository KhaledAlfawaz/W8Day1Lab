import express , {Request , Response , Application} from 'express'
import classroomRoutes from './routes/classroom.route'
import studentRoutes from './routes/student.route'
import teacherRoutes from './routes/teacher.route'
import userRoutes from './routes/user.route'

import studentInClassroomsRoutes from './routes/studentsInClassrooms.route'

import {connectDB}  from './config/db'


const app:Application = express()
const port:number = 3000

app.use(express.json())

connectDB()

app.use('/classroom' , classroomRoutes)
app.use('/student' , studentRoutes)
app.use('/teacher' , teacherRoutes)
app.use('/student-in-classrooms' , studentInClassroomsRoutes)
app.use('/user' , userRoutes)




app.listen(port , ()=> {
    console.log(`Express running on port:${port}`);
})