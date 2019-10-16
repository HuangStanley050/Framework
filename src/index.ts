import { User } from "./models/User";

const user = new User({ name: "steve", age: 22 });
user.set({ name: "bob" });
console.log(user);
