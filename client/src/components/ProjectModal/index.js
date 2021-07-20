import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from "@material-ui/core/TextField";
import API from '../../utils/API';
import { userContext } from "../../Context";


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  return {
    margin: 'auto',
    width: '30%',
    top: '30%'
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'relative',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  textfield: {
    width: "100%"
}
}));

export default function ProjectModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const { userObject, isAuthenticated } = useContext(userContext);


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    // window.location.reload();
  };

  const [formObject, setFormObject] = useState([]);

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleFormSubmit(event) {

        console.log(formObject)
        console.log(userObject)
        API.saveProject({
            title: formObject.title,
            description: formObject.description,
            budget: formObject.budget,
            userId: userObject._id
        })
            .then(res => {
                handleClose();
                console.log(res);
            })
            .catch(err => console.log(err));
    };
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Time to make something big.</h2>
                    <TextField
                        id="standard-textarea"
                        label="Project Name"
                        name="title"
                        className={classes.textfield}
                        multiline
                        onChange={handleInputChange}
                        value={formObject.title}
                    />
                    <br/>
                    <TextField
                        id="standard-textarea"
                        label="Project Description"
                        name="description"
                        className={classes.textfield}
                        multiline
                        onChange={handleInputChange}
                        value={formObject.description}
                    />
                    <br/>
                    <TextField
                        id="standard-textarea"
                        label="Project Budget"
                        name="budget"
                        className={classes.textfield}
                        multiline
                        onChange={handleInputChange}
                        value={formObject.budget}
                    />
                    <br/>
        <button class="create-button" onClick={handleFormSubmit}>Create Project</button>
    </div>
  );

  return (
    <div>
      <button class="add-project" onClick={handleOpen}>
                <span>+</span> Create a New Project
            </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}