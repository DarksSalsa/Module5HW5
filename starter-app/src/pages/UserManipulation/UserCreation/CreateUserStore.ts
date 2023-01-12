import { makeAutoObservable } from "mobx";
import { ICreateUserRequest } from "../../../interfaces/UserInterfaces/Requests/createUserRequest";
import { ICreateUserResponse } from "../../../interfaces/UserInterfaces/Responses/createUserResponse";
import * as userApi from "../../../api/modules/users";

class CreateUserStore{
    user: ICreateUserResponse = {id: '', name: '', job: '', createdAt:''};
    inputs: ICreateUserRequest = { name: '', job: '' };

    constructor() {
        makeAutoObservable(this);
    }

    changeUserName = (value: string) => {
        this.inputs.name = value;
    }

    changeUserJob = (value: string) => {
        this.inputs.job = value;
    }

    resetUser = () => {
        this.user  = {id: '', name: '', job: '', createdAt:''};
        this.inputs = { name: '', job: '' };
    }

    getDataForCreate = async () => {
        try {
            const res = await userApi.createObject(this.inputs);
            this.user = res;
        } catch (e) {
            if (e instanceof Error) {
                console.error(e.message)
            }
        }
    }

}

export default CreateUserStore;