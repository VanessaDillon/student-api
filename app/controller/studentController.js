const StudentDao = require("../dao/studentDao");
const ControllerCommon = require("./common/controllerCommon");
// const Student = require("../model/student");

class StudentController {

    constructor() {
        this.studentDao = new StudentDao();
        this.common = new ControllerCommon();
    }

    findAll(res) {
        this.studentDao.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    }
}

module.exports = StudentController;