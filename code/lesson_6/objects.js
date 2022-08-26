// WHAT THE HELL ARE OBJECTS?

let obj = {
  name: "My Object",
  upperCaseName: function () {
    console.log(this);
    return this.name.toUpperCase();
  },
};

let hash = {
  name: "Jan",
  birthday: "1976-01-16",
  height: 178,
  "hello-mum": "yip",
};

hash.name;
hash["name"];

console["log"](hash["name"]);

console.log(obj.upperCaseName());
