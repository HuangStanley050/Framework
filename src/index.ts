import { UserCollection } from "./models/UserCollection";

const collection = new UserCollection("http://localhost:3000/users");
collection.on("change", () => console.log(collection));
collection.fetch();
