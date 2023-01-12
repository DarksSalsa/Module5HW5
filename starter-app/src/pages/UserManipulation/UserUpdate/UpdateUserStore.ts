import { makeAutoObservable } from "mobx";
import { IUpdateUserRequest } from "../../../interfaces/UserInterfaces/Requests/updateUserRequest";
import { IUpdateUserResponse } from "../../../interfaces/UserInterfaces/Responses/updateUserResponse";
import * as userApi from "../../../api/modules/users";

class UpdateUserStore{
    user: IUpdateUserResponse = {name: '', job: '', updatedAt:''};
    inputs: IUpdateUserRequest = { name: '', job: '' };
    id = "";

    constructor() {
        makeAutoObservable(this);
    }

    changeUserId = (value: string) => {
        this.id = value;
    }

    changeUserName = (value: string) => {
        this.inputs.name = value;
    }

    changeUserJob = (value: string) => {
        this.inputs.job = value;
    }

    resetUser = () => {
        this.user  = {name: '', job: '', updatedAt:''};
        this.inputs = { name: '', job: '' };
        this.id = "";
    }

    getDataForUpdate = async () => {
        try {
            const res = await userApi.updateObjectById(this.id, this.inputs);
            this.user = res;
        } catch (e) {
            if (e instanceof Error) {
                console.error(e.message)
            }
        }
    }

}

export default UpdateUserStore;