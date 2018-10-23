import { Router } from 'express';
import studentMethods from "../controller/sudentController";

const route = new Router();

route.get('/students', studentMethods.students);

route.post('/add-student', studentMethods.addStudent);

route.put('/update-student/:id',studentMethods.updateStudent);

route.delete('/delete-student/:id', studentMethods.deleteStudent);


export default route;
