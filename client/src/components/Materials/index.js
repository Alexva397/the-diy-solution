import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(2),
            width: '25ch',
        },
    },
    textfield: {
        width: "20px",
    },
    button: {
        marginTop: theme.spacing(3)
    },
    table: {
        marginTop: theme.spacing(3)
    }
}));

function Materials() {
    const classes = useStyles();

    return (
        <>
            <form className={classes.root} noValidate autoComplete="off">
                <div>
                    <TextField
                        id="standard-textarea"
                        label="Item Name"
                        placeholder="Placeholder"
                        multiline
                        className={classes.textfield}
                    />
                    <TextField
                        id="standard-textarea"
                        label="Budget Price"
                        placeholder="Placeholder"
                        multiline
                        className={classes.textfield}
                    />
                    <TextField
                        id="standard-textarea"
                        label="Purchase Price"
                        placeholder="Placeholder"
                        multiline
                        className={classes.textfield}
                    />
                    <Button
                        type="submit"
                        multiline
                        variant="outlined"
                        color="primary"
                        className={classes.button}
                    >
                        Add Item
                    </Button>
                </div>
            </form>

            <Table className={classes.table}>
                <Thead>
                    <Tr>
                        <Th>Item Name</Th>
                        <Th>Budget Price</Th>
                        <Th>Purchase Price</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>Paint</Td>
                        <Td>$150</Td>
                        <Td>$200</Td>
                    </Tr>
                    <Tr>
                        <Td>Cabinets</Td>
                        <Td>$500</Td>
                        <Td>$408</Td>
                    </Tr>
                </Tbody>
            </Table>
        </>
    );
}

export default Materials;