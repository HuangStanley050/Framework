import axios, { AxiosPromise } from "axios";
import { UserProps } from "./User";

export class Sync {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: UserProps): void {
    const { id } = data;
    //axios.post(``).then((res:AxiosResponse)=>{})
    if (id) {
      //put
      axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      //post
      axios.post(this.rootUrl, data);
    }
  }
}
