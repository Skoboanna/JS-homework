let objectOperations = (function () {
    let val;
    let operations = {
        showValue: function () {
            val ? console.log(val) : console.log("No value provided. Please set a value using setValue() function.");
        },

        setValue: function (x) {
            val = x;
        },

        reverseValue: function () {
            if (typeof val == "number") val *= (-1);
            if (typeof val == "string") val = val.split("").reverse().join("");
        },

    };
    return operations;
})();

objectOperations.setValue(5);
objectOperations.showValue();
objectOperations.setValue("adelajda");
objectOperations.reverseValue();
objectOperations.showValue();
objectOperations.setValue(5);
objectOperations.reverseValue();
objectOperations.showValue();
