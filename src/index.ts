import { User } from "./models/User";

const user = new User({ id: 2, name: "Bison", age: 44 });

user.on("save", () => console.log(user));
user.save();
