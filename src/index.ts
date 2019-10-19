import { User } from "./models/User";

const user = new User({ name: "Megaman", age: 22 });

//console.log(user);
user.on("change", () => console.log("user chaning"));
