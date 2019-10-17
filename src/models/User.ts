import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";
interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}

export class User {
  events: Eventing = new Eventing();

  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    this.data = { ...this.data, ...update };
  }

  fetch(): void {
    axios.get(`http://localhost:3000/users/${this.get("id")}`).then(
      (res: AxiosResponse): void => {
        this.set(res.data);
      }
    );
  }
  save(): void {
    const id = this.get("id");
    //axios.post(``).then((res:AxiosResponse)=>{})
    if (id) {
      //put
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      //post
      axios.post(`http://localhost:3000/users`, this.data);
    }
  }
}
