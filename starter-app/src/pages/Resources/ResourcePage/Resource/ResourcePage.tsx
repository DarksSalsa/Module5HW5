import React, {ReactElement, FC, useEffect, useState} from "react";
import {
    CircularProgress,
    Container,
    Grid,
} from '@mui/material'
import * as resourceApi from "../../../../api/modules/resources"
import {IResource} from "../../../../interfaces/resources";
import { useParams} from "react-router-dom";
import ResourceCard from "../../components";

const ResourcePage: FC<any> = (): ReactElement => {
    const [resource, setResource] = useState<IResource | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            const getResource = async () => {
                try {
                    setIsLoading(true);
                    const res = await resourceApi.getResourceById(id);
                    setResource(res.data);
                } catch (e) {
                    if (e instanceof Error) {
                        console.error(e.message)
                    }
                }
                setIsLoading(false)
            }
            getResource()
        }
    }, [id])

    return (
        <Container>
            <Grid container justifyContent="center" alignItems="center">
                {isLoading ? (<CircularProgress />) : (
                    <ResourceCard {...resource} relocation='/unknown/'></ResourceCard>
                )}
            </Grid>
        </Container>
    );
};
export default ResourcePage;