import {
    makeAutoObservable,
} from "mobx";
import {IUser} from "../../../../interfaces/users";
import * as userApi from "../../../../api/modules/users";


class UserPageShowingStore {
    users: IUser = {id:1, email:"", first_name:"", last_name:"", avatar:""};
    id: string | undefined = "";
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    setId = async (id: string | undefined ) => {
        this.id = id;
        await this.prefetchData();
    }

    setResource = (user: IUser) => {
        this.users = user;
    }

    setIsLoading = (flag: boolean) => {
        this.isLoading = flag;
    }

    prefetchData = async () => {
        if (this.id) {
            try {
                this.setIsLoading(true);
                const res = await userApi.getById(this.id)
                this.setResource(res.data);
            } catch (e) {
                if (e instanceof Error) {
                    console.error(e.message)
                }
            }
            this.setIsLoading(false);
        }
    };
}

export default UserPageShowingStore;