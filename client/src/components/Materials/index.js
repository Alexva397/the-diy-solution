import React, { useState } from 'react';
import { useParams } from "react-router-dom";
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
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(3),
    },
    saved: {
        color: 'rgb(15, 194, 15)',
    },
    loss: {
        color: 'rgb(255, 6, 6)'
    }
}));

function Materials({ key, materials }) {
    const classes = useStyles([]);
    const [formObject, setFormObject] = useState([]);

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    const { id } = useParams();
    function handleFormSubmit(event) {
        console.log(formObject)
        API.updateProject(id, {
            materials: {
                item: formObject.item,
                quantity: formObject.quantity,
                budgetPrice: formObject.budgetPrice,
                purchasePrice: formObject.purchasePrice
            }
        })
            .then(res => {

                console.log(res);
            })
            .catch(err => console.log(err));
    };
    console.log(formObject)

    function handleMaterialDelete(id, materialId) {
        console.log(materialId);
        API.removeMaterial(id, {
            _id: materialId
        })
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
                        label="Quantity"
                        name="quantity"
                        placeholder="Placeholder"
                        multiline
                        className={classes.textfield}
                        onChange={handleInputChange}
                        value={formObject.quantity}
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
                    <Button
                        disabled={!formObject.item && !formObject.quantity && !formObject.budgetPrice && !formObject.purchasePrice}
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
                        <Th>Quantity</Th>
                        <Th>Purchase Price</Th>
                        <Th>Budget Price</Th>
                        <Th>Saved</Th>
                        {/* Add after adding routes for materials */}
                        <Th></Th>
                    </Tr>
                </Thead>
                {materials.map(material => (
                    <Tbody>
                        <Tr>
                            <Td>{material.item}</Td>
                            <Td>{material.quantity}</Td>
                            <Td>${material.purchasePrice}</Td>
                            <Td>${material.budgetPrice}</Td>
                            <Td className={material.budgetPrice > material.purchasePrice ? classes.saved : classes.loss}>${material.budgetPrice - material.purchasePrice}</Td>
                            {/* Add after adding routes for materials */}
                            <Td>
                                <Button className="delete-material" variant="outlined" onClick={() => handleMaterialDelete(id, material._id)}>Remove</Button>
                            </Td>
                        </Tr>
                    </Tbody>
                ))}
            </Table>
        </>
    );
}

export default Materials;