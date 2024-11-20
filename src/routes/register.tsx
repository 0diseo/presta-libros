import {Alert, Button, Collapse, Link, Stack, TextField} from "@mui/material";
import React, {ChangeEvent, ReactElement, useState} from "react";
import axios, {AxiosResponse} from "axios";

const RegisterForm = (): ReactElement   => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [dateOfBirth, setDateOfBirth] = useState(" ")

    const [open, setOpen] = useState(false);
    const [alertText, setAlertText] = useState("");



    type CreateUser = {
        name: string,
        last_name: string,
        email: string,
        date_of_birth: string,
        password: string,
        password_confirmation: string,

    }

    const userData = () :CreateUser  => {
        return {
            "name": firstName,
            "last_name": lastName,
            "email": email,
            "date_of_birth": dateOfBirth,
            "password": password,
            "password_confirmation": passwordConfirmation
        }
    }

    async function handleSubmit(event: React.FormEvent<HTMLInputElement>) : Promise<void> {
        event.preventDefault();
        try {
            let res :AxiosResponse = await axios.post('api/users', userData())
            console.log(res)
            // Here the response can be properly handled
        } catch (err) {
            setAlertText(err.response.data.detail)
            setOpen(true);
        }
    }

    return (
        <>
            <Collapse in={open}>
                <Alert severity="error" onClose={(): void  => {setOpen(false)}}> {alertText} </Alert>
            </Collapse>

            <h1>Registrar</h1>
            <form onSubmit={handleSubmit} action={<Link to="/login"/>}>
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                    <TextField
                        error
                        type="text"
                        variant="outlined"
                        color="secondary"
                        label="Nombre"
                        onChange={(e: ChangeEvent<HTMLInputElement>): void  => setFirstName(e.target.value)}
                        value={firstName}
                        fullWidth
                        required
                        helperText="Incorrect entry."
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Apeido"
                        onChange={(e: ChangeEvent<HTMLInputElement>): void => setLastName(e.target.value)}
                        value={lastName}
                        fullWidth
                        required
                    />
                </Stack>
                    <TextField
                        type="email"
                        variant='outlined'
                        color='secondary'
                        label="Email"
                        onChange={(e: ChangeEvent<HTMLInputElement>): void => setEmail(e.target.value)}
                        value={email}
                        fullWidth
                        required
                        sx={{mb: 4}}
                    />
                    <TextField
                        type="password"
                        color='secondary'
                        label="contrasena"
                        onChange={(e: ChangeEvent<HTMLInputElement>): void => setPassword(e.target.value)}
                        value={password}
                        required
                        fullWidth
                        sx={{mb: 4}}
                    />
                    <TextField
                        type="password"
                        color='secondary'
                        label="confirmar contrasena"
                        onChange={(e: ChangeEvent<HTMLInputElement>): void => setPasswordConfirmation(e.target.value)}
                        value={passwordConfirmation}
                        required
                        fullWidth
                        sx={{mb: 4}}
                    />
                    <TextField
                        type="date"
                        variant='outlined'
                        color='secondary'
                        label="fecha de nacimiento"
                        onChange={(e: ChangeEvent<HTMLInputElement>): void => setDateOfBirth(e.target.value)}
                        value={dateOfBirth}
                        fullWidth
                        required
                        sx={{mb: 4}}
                    />
                    <Button variant="outlined" color="secondary" type="submit">Registrar</Button>
            </form>
            <small>ya tienes una cuenta? <Link to="/login">Login Here</Link></small>
        </>
    )
}

export default RegisterForm;