const Student = require('../model/student');
const daoCommon = require('./common/daoCommon');

class StudentDao {
    constructor() {
        this.common = new daoCommon();
    }
    findAll() {
        let sqlRequest = "SELECT * FROM student ORDER BY lastName ASC";
        return this.common.findAll(sqlRequest).then(rows => {
            let students = [];
            for (const row of rows) {
                students.push(new Student(
                        row.id,
                        row.firstName,
                        row.lastName,
                        row.dob,
                        row.phone,
                        row.email
                    )
                );
            }
            return students;
        });
    }
}

module.exports = StudentDao;