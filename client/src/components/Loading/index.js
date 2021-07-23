import { Grid, Paper } from "@material-ui/core";
import DIYLogo from "../../assets/images/cropped-tools.png";



function Loading() {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
            >
            <Grid item xs={3}>
                <Paper>
                    <img src={DIYLogo} alt="The DIY Solution" />
                    <h1>Loading...</h1>
                </Paper>  
            </Grid>            
        </Grid> 
    );
}

export default Loading;