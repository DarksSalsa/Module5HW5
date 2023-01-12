import React, {useContext} from "react";
import {
    Box,
    Grid,
    Typography,
    Button,
    TextField,
    Switch,
    FormGroup,
    FormControlLabel
} from '@mui/material'
import { AppStoreContext } from "../../App";
import AuthenticationStore from "./AuthenticationStore";
import { observer } from "mobx-react-lite";

const AuthPage = () => {
    const appStore = useContext(AppStoreContext);
    const store = new AuthenticationStore(appStore.authStore);
    const [checked, setChecked] = React.useState(true);

    return (
        <>
            <Box component="form" onSubmit={async (event) => {
                event.preventDefault();
                if (checked) 
                {
                    await store.login();   
                }
                else
                {
                    await store.register();    
                }
                }} autoComplete="off">
                <Grid
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                    rowSpacing={{ xs: 5 }}
                    sx = {{textAlign: "center"}}
                >
                    {!!!appStore.authStore.token && (
                        <>
                            <Grid item>
                                <FormGroup>
                                    <FormControlLabel control={<Switch checked={checked} onChange={() => setChecked(!checked)} />} label={checked? "Sign in": "Register"} />
                                </FormGroup>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography color="primary.main" variant="h1">{checked? "Sign in": "Register new user" }</Typography>
                            </Grid>
                            <Grid item>
                                <TextField autoFocus label="Email" name='email' onChange={(event) => store.changeEmail(event.target.value)} required variant="outlined"/>
                            </Grid>
                            <Grid item>
                                <TextField type="password" label="Password" name='password' onChange={(event) => store.changePassword(event.target.value)} required variant="outlined"/>
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="outlined" type="submit">
                                SUBMIT
                                </Button>
                            </Grid>
                        </>
                    )}
                    {!!store.error && (
                        <p style={{ color: 'red', fontSize: 14 }}>{store.error}</p>
                    )}
                    {!!appStore.authStore.token && (
                        <>
                            <Grid
                                container
                                direction="row"
                                justifyContent="space-around"
                                alignItems="center"
                                rowSpacing={{ xs: 5 }}
                                sx = {{textAlign: "center"}}
                            >
                                <Grid item lg={5} xs={12}>
                                   <Typography color="green" variant="h5">{`Token: ${appStore.authStore.token}`}</Typography>
                                </Grid>
                                {!!appStore.authStore.id && (
                                    <Grid item lg={5} xs={12}>
                                        <Typography color="green" variant="h5">{`Id: ${appStore.authStore.id}`}</Typography>
                                    </Grid>
                                )}
                            </Grid>
                        </>
                    )}
                </Grid>
            </Box>
        </>
    );
};

export default observer(AuthPage);