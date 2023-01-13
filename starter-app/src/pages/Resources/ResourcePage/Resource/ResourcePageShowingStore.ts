import {
    makeAutoObservable,
} from "mobx";
import {IResource} from "../../../../interfaces/resources";
import * as resourceApi from "../../../../api/modules/resources";


class ResourcePageShowingStore {
    resources: IResource = {id: 1, name:"", year:"", color:"",pantone_value:""};
    id: string | undefined = "";
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    setId = async (id: string | undefined ) => {
        this.id = id;
        await this.prefetchData();
    }

    setResource = (resource: IResource) => {
        this.resources = resource;
    }

    setIsLoading = (flag: boolean) => {
        this.isLoading = flag;
    }

    prefetchData = async () => {
        if (this.id) {
            try {
                this.setIsLoading(true);
                const res = await resourceApi.getResourceById(this.id)
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

export default ResourcePageShowingStore;