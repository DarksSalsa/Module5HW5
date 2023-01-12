import React, {ReactElement, FC, useEffect, useState} from "react";
import {
    CircularProgress,
    Container,
    Grid,
} from '@mui/material'
import * as userApi from "../../../../api/modules/users"
import {IUser} from "../../../../interfaces/users";
import { useParams } from "react-router-dom";
import UserCard from "../../components";

const UserPage: FC<any> = (): ReactElement => {
    const [user, setUser] = useState<IUser | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            const getUser = async () => {
                try {
                    setIsLoading(true)
                    const res = await userApi.getById(id)
                    setUser(res.data)
                } catch (e) {
                    if (e instanceof Error) {
                        console.error(e.message)
                    }
                }
                setIsLoading(false)
            }
            getUser()
        }
    }, [id])

    return (
        <Container>
            <Grid container  justifyContent="center" alignItems="center">
                {isLoading ? (<CircularProgress />) : (
                    <UserCard {...user} relocation='/users/'></UserCard>
                )}
            </Grid>
        </Container>
    );
};
export default UserPage;