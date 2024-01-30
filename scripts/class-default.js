export default class {
    constructor(name) {
        this.name = name;
    }

    hiSay(name) {
        console.info(`Hi ${name}, my name is ${this.name}`);
    }
}