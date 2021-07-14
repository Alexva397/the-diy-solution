import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import API from "../../utils/API";

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

function Materials(props) {
    const classes = useStyles([]);
    const [formObject, setFormObject] = useState({
        id: 1,
        item: "",
        budgetPrice: "",
        purchasePrice: "",
    });

    useEffect(() => {
        loadItems()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function loadItems(id) {
        API.getProject(id)
            .then(res => loadItems())
            .catch(err => console.log(err));
    };

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.item && formObject.budgetPrice && formObject.purchasePrice) {
            console.log(formObject);
            API.saveProject({
                id: 1,
                item: formObject.item,
                budgetPrice: formObject.budgetPrice,
                purchasePrice: formObject.purchasePrice
            })

                .then(() => setFormObject({
                    item: "",
                    budgetPrice: "",
                    purchasePrice: ""
                }))
                .then(() => loadItems())
                .catch(err => console.log(err));
        }
    }

    return (
        <>
            <form className={classes.root} noValidate autoComplete="off">
                <div>
                    <TextField
                        id="standard-textarea"
                        label="Item Name"
                        name="item"
                        placeholder="Placeholder"
                        multiline
                        className={classes.textfield}
                        onChange={handleInputChange}
                        value={formObject.item}

                    />
                    <TextField
                        id="standard-textarea"
                        label="Budget Price"
                        name="budgetPrice"
                        placeholder="Placeholder"
                        multiline
                        className={classes.textfield}
                        onChange={handleInputChange}
                        value={formObject.budgetPrice}
                    />
                    <TextField
                        id="standard-textarea"
                        label="Purchase Price"
                        name="purchasePrice"
                        placeholder="Placeholder"
                        multiline
                        className={classes.textfield}
                        onChange={handleInputChange}
                        value={formObject.purchasePrice}
                    />
                    <Button
                        disabled={!formObject.item && formObject.budgetPrice && formObject.purchasePrice}
                        onClick={handleFormSubmit}
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