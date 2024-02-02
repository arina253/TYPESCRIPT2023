"use strict";
let employeeQ = {
    firstName: "arina",
    lastName: "joshi",
    age: 34,
    employeeId: 12,
    role: "Developer"
};
let Calc = {
    addE(x, y) {
        return x + y;
    },
    subE(x, y) {
        return x - y;
    }
};
let addF = (x, y) => x + y;
class SBIA {
    save() {
        return 100;
    }
    loan() {
        return 200;
    }
    branchName() {
        return " nagpur";
    }
}
class PNB {
    save() {
        return 300;
    }
    loan() {
        return 500;
    }
    branchName() {
        return "pune";
    }
}
let a111 = new SBIA();
let a112 = new PNB();
