import React, {ReactElement, FC, useEffect} from "react";
import {
    CircularProgress,
    Container,
    Grid,
    Typography
} from '@mui/material'
import { useParams} from "react-router-dom";
import ResourceCard from "../../components";
import ResourcePageShowingStore from "./ResourcePageShowingStore";
import { observer } from "mobx-react-lite";

const store = new ResourcePageShowingStore();

const ResourcePage: FC<any> = (): ReactElement => {
    const { id } = useParams();
    useEffect(() => {
        if (id) {
            store.setId(id);
        }
    },[id])
    return (
        <Container>
            <Grid container justifyContent="center" alignItems="center" rowSpacing={5} sx = {{textAlign: "center"}}>
                <Grid item>
                    {store.isLoading ? (<CircularProgress />) : (
                        <ResourceCard {...store.resources} relocation='/unknown/'></ResourceCard>
                    )}
                </Grid>
                <Grid item xs={12}>
                    <Typography color="#22bb33">Tip: To view color press right mouse button on any resource.</Typography>
                </Grid>
            </Grid>
        </Container>
    );
};
export default observer(ResourcePage);