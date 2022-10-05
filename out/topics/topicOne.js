var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//? sadece burada ki değerleri kabul eder 
var Country;
(function (Country) {
    Country[Country["Amasya"] = 0] = "Amasya";
    Country[Country["\u0130stanbul"] = 1] = "\u0130stanbul";
})(Country || (Country = {}));
;
;
;
var AClass = /** @class */ (function () {
    // Bu classı çağirdiğimiz an yaptığı iş
    function AClass(student) {
        this.student = student;
    }
    ;
    Object.defineProperty(AClass.prototype, "learner", {
        // buda bizim gönderdiğimiz değerleri get eden nitelik
        get: function () {
            return this.student;
        },
        enumerable: false,
        configurable: true
    });
    return AClass;
}());
;
var a = new AClass({ name: "ayşe", study: ["English"], year: 2000, country: Country.Amasya });
console.log(a.learner);
var BClass = /** @class */ (function (_super) {
    __extends(BClass, _super);
    function BClass(student) {
        return _super.call(this, student) || this;
    }
    return BClass;
}(AClass));
var b = new BClass({ name: "fatma", study: ["English"], year: 1900, country: Country.İstanbul });
console.log(b.learner);
//# sourceMappingURL=topicOne.js.map