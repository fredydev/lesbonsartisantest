Array.prototype.getShortMessage = function() { return this.filter(message => message.length < 50)};


// Test
let polo = ["ahajdhdhdjhjhkkjkjdkjlkjfkhfksjffhdjfhdjkfhdjfhdjfhsjfghsfgsjfgsjfgshjfhsfjshfsjhfs","polo","frofu"];

console.log(polo.getShortMessage())