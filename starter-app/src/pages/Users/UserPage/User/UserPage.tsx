import React, {ReactElement, FC, useEffect} from "react";
import {
    CircularProgress,
    Container,
    Grid,
} from '@mui/material'
import { useParams } from "react-router-dom";
import UserCard from "../../components";
import { observer } from "mobx-react-lite";
import UserPageShowingStore from "./UserPageShowingStore";

const store = new UserPageShowingStore();

const UserPage: FC<any> = (): ReactElement => {
    const { id } = useParams();
    useEffect(() => {
        if (id) {
            store.setId(id);
        }
    },[id])

    return (
        <Container>
            <Grid container  justifyContent="center" alignItems="center">
                {store.isLoading ? (<CircularProgress />) : (
                    <UserCard {...store.users} relocation='/users/'></UserCard>
                )}
            </Grid>
        </Container>
    );
};
export default observer(UserPage);