import { makeAutoObservable } from "mobx";
import { login, register } from "../api/modules/authentication";

class AuthStore{

    token = '';
    id = '';

    constructor() {
        makeAutoObservable(this);
    }

    async loginUser(email: string, password: string) {
        const res = await login({ email, password });
        this.token = res.token;
    }

    async registerUser(email: string, password: string) {
        const res = await register({ email, password });
        this.token = res.token;
        this.id = res.id;
    }

    logout() {
        this.token = '';
        this.id = '';
    }
}

export default AuthStore;