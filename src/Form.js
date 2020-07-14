import React, { useContext, Fragment } from "react";
import { Button, TextField } from "@material-ui/core";
import { DetailsContext } from "./Context";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

export function Form({onSubmit, onCancel}) {
    const {
        handleChange,
        filedError,
        isError,
        fields
    } = useContext(DetailsContext);
    const isEmpty =
        fields.name.length > 0 &&
        fields.gender.length > 0 &&
        fields.email.length > 0;

    return (
        <Fragment>
            <Grid container spacing={2} noValidate>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="First Name"
                        name="firstName"
                        placeholder="Your first name"
                        defaultValue={fields.name}
                        onChange={handleChange("name")}
                        margin="normal"
                        error={filedError.name !== ""}
                        helperText={filedError.name !== "" ? `${filedError.name}` : ""}
                        required
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Age"
                        name="age"
                        placeholder="Your age"
                        defaultValue={fields.age}
                        onChange={handleChange("age")}
                        margin="normal"
                        error={filedError.age !== ""}
                        helperText={filedError.age !== "" ? `${filedError.age}` : ""}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        placeholder="Your email address"
                        type="email"
                        defaultValue={fields.email}
                        onChange={handleChange("email")}
                        margin="normal"
                        error={filedError.email !== ""}
                        helperText={filedError.email !== "" ? `${filedError.email}` : ""}
                        required
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth required margin="normal">
                        <InputLabel htmlFor="gender">Gender</InputLabel>
                        <Select value={fields.gender} onChange={handleChange("gender")}>
                            <MenuItem value={"Male"}>Male</MenuItem>
                            <MenuItem value={"Female"}>Female</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <div
                style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}
            >
                <Button
                    variant="text"
                    disabled={!isEmpty || isError}
                    color="primary"
                    onClick={onSubmit}
                >
                    Add
                </Button>
                <Button color="secondary" onClick={onCancel}>
                    Cancel
                </Button>
            </div>
        </Fragment>
    );
}
