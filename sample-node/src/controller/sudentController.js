import student from '../model/studentSchema';

/**
 * @param req
 * @param res
 * return students
 */
 
const students = async (req, res) => {
    try {
        res.json(await student.find({}));
    } catch (err) {
        res.status(400).send(err);
    }

};

/**
 * @param req
 * @param res
 * post the student data 
 */

const addStudent = async (req, res) => {
    try {
        res.status(200).json(await student.create(req.body));
    } catch (err) {
        res.status(404).send(err);
    }
};

/**
 * 
 * @param req 
 * @param res
 * update the student data
 */
const updateStudent = async (req, res) => {
    try {
        res.status(200).json(await student.findOneAndUpdate({ stuId: req.params.id },req.body));
    } catch (err) {
        res.status(500).send(err);
    }
}

/**
 * 
 * @param req 
 * @param res 
 * delete the student data 
 */
const deleteStudent = async (req, res) => {
    try {
        res.status(200).json(await student.findOneAndRemove({ stuId: req.params.id }));
    } catch (err) {
        res.status(500).send(err);
    }
}

const studentMethods = {
    students,
    addStudent,
    updateStudent,
    deleteStudent,
};

export default studentMethods;