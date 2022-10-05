//? sadece burada ki değerleri kabul eder.
//? Bu şekilde index numaraları döner
enum Country {
    Amasya,
    İstanbul
};

//* Bu parent interface 
interface Person {
    name: string;
    year: number | string; //?  type ya sayı yada text;
    country: Country;
};


//* Bu Personun özelliklerini kalıtsal olarak alan child interface
interface Student extends Person {
    study: Array<string>
};

class AClass {
    //** */ bir get çaliştirabilmemiz için bize lazım olan değişken . 

    //! private oldugu için dişardan erişim yok

    private student: Student;

    //** */ Bu classı çağirdiğimiz an yaptığı iş
    constructor(student: Student) {
        this.student = student;
    };

    //* */ buda bizim gönderdiğimiz değerleri get eden nitelik
    get learner() {
        return this.student
    }

};

let a = new AClass({ name: "ayşe", study: ["English"], year: 2000, country: Country.Amasya });

console.log(a.learner);


//** Bir class başka bir class'i kalıtsal olarak kullanmak istiyorsa parent classın default değerlerini kullanmak için super() methodunu kullanmalı

class BClass extends AClass {

    constructor(student: Student) {
        super(student)
    }
}

let b = new BClass({ name: "fatma", study: ["English"], year: 1900, country: Country.İstanbul });

console.log(b.learner);
