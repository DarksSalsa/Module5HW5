import { Card, CardActionArea, CardContent, Typography, Container, Grid } from "@mui/material";
import { FC, ReactElement } from "react";
import { useNavigate} from "react-router-dom";
import { ICreateUserResponse } from "../../../../interfaces/UserInterfaces/Responses/createUserResponse";
import { observer } from "mobx-react-lite";

const UserCreationCard: FC<ICreateUserResponse | any> = (props): ReactElement => {
    const navigate = useNavigate();

    return (
        <Container>
            <Grid container  justifyContent="center" alignItems="center">
                <Card sx={{ maxWidth: 250 }}>
                    <CardActionArea onClick={() => navigate("/users/")} >
                        <CardContent>
                            <Typography noWrap gutterBottom variant="h6" component="div">
                                {props.data.user.name} {props.data.user.job}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {props.data.user.id} {props.data.user.createdAt}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </Container>
    )
}

export default observer(UserCreationCard);