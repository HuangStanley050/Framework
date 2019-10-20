import { User } from "./models/User";

const user = User.buildUser({ id: 1, name: "Chun Li", age: 19 });

user.on("change", () => console.log(user));
user.fetch();
