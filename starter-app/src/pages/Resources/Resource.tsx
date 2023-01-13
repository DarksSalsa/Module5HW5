import React, {ReactElement, FC} from "react";
import { Box, CircularProgress, Container, Grid, Pagination, Typography } from '@mui/material';
import ResourceCard from "./components";
import ResourceShowingStore from "./ResourceShowingStore";
import { observer } from "mobx-react-lite";

const store = new ResourceShowingStore();

const Resources: FC<any> = (): ReactElement => {
  return (
      <Container>
          <Grid container spacing={4} justifyContent="center" my={4}>
              {store.isLoading ? (
                  <CircularProgress />
              ) : (
                  <>
                      {store.resources?.map((item) => (
                          <Grid key={item.id} item lg={2} md={3} xs={6}>
                              <ResourceCard {...item} relocation={`/unknown/${item.id}`} />
                          </Grid>
                      ))}
                          <Grid item xs={12}>
                              <Typography color="#22bb33">Tip: To view color press right mouse button on any resource.</Typography>
                          </Grid>
                  </>
              )}
          </Grid>
          <Box
              sx={{
                  display: 'flex',
                  justifyContent: 'center'
              }}
          >
              <Pagination count={store.totalPages} page={store.currentPage} onChange={ (event, page)=> store.setCurrentPage(page)} />
          </Box>
      </Container>
  );
};

export default observer(Resources);