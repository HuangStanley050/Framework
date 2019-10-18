import { User } from "./models/User";

const user = new User({ name: "Megaman", age: 22 });

//console.log(user);
user.events.on("change", () => console.log("change"));
user.events.on("change", () => console.log("change again"));
user.events.trigger("change");
