// React
import { useState } from "react";

// Hooks, Clients, Global States, etc.
import useToast from "../hooks/useToast";
import axios from "axios";

// Custom Components
import Layout from "../components/ui/Layout";

// Material UI
import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

// Colors, Imgs, Icons, etc.
import colors from "../utils/colors";

const initForm = {
    email: '',
    password: '',
};

const Encode = () => {
    const [form, setForm] = useState(initForm);
    const [token, setToken] = useState('');

    const cutText = (cadena, longitudMaxima) => {
        return cadena.length > longitudMaxima
            ? cadena.substring(0, longitudMaxima)
            : cadena;
    }

    const handleOnChange = ({ target }) => {
        const { value, name } = target;

        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3489/encode', form);

            setToken(response.data.token);

            // Success Alert
            useToast({
                text: 'Credenciales correctas',
                icon: 'success',
            });
        } catch (err) {
            // Error Alert
            useToast({
                text: err.response.data.msg,
                icon: 'error',
            });
        }
    }

    const copyToClipboard = async (text) => {
        try {
            await navigator.clipboard.writeText(text);

            // Success Alert
            useToast({
                text: 'Copiado al Portapapeles',
                icon: 'success',
            });
        } catch (err) {
            // Error Alert
            useToast({
                text: 'Error al copiar al portapapeles',
                icon: 'error',
            });
        }
    };

    return (
        <Layout>
            <Container maxWidth="xs">
                {
                    token === '' ?
                        ''
                        : (
                            <Stack marginTop='40px' spacing='10px'>
                                <Typography variant="h4" color={colors.primary}>
                                    Token
                                </Typography>
                                <Stack
                                    borderRadius='10px'
                                    padding='10px'
                                    overflow='hidden'
                                    textOverflow="ellipsis"
                                    position='relative'
                                    alignItems='stretch'
                                    sx={{
                                        backgroundColor: colors.nav,
                                        borderColor: colors.secondary,
                                        borderStyle: 'solid',
                                    }}
                                    component='button'
                                    onClick={() => copyToClipboard(token)}
                                >
                                    <Typography
                                        variant="h5"
                                        fontSize='18px'
                                        color={colors.primary}
                                    >
                                        {cutText(token, 44)}
                                    </Typography>
                                    <ContentCopyIcon
                                        sx={{
                                            marginTop: '-10px',
                                            fontSize: '20px',
                                            width: '10%',
                                            height: '100%',
                                            position: 'absolute',
                                            right: '0px',
                                            color: colors.primary,
                                            backgroundColor: '#252525',
                                            padding: '0px 10px',
                                            cursor: 'pointer'
                                        }}
                                    />
                                </Stack>
                            </Stack>
                        )
                }

                <Stack
                    marginTop={{ xs: '30px', md: '40px' }}
                    padding={{ xs: '30px 20px', md: '40px' }}
                    width={{ xs: '100%', sm: 'auto' }}
                    alignItems='center'
                    sx={{
                        backgroundColor: colors.nav,
                        borderRadius: '20px',
                    }}
                >
                    {/* Form */}
                    <Stack
                        component='form'
                        role='form'
                        width={{ xs: '100%', sm: '325px' }}
                        spacing='28px'
                    >
                        <Stack spacing='18px'>
                            {/* Email input */}
                            <TextField
                                id="email"
                                label="Email"
                                name='email'
                                placeholder="catalinaforerosuarez@gmail.com"
                                value={form?.email}
                                onChange={handleOnChange}
                            />

                            {/* Password input */}
                            <TextField
                                id="password"
                                label="Password"
                                name='password'
                                placeholder="p4assw0rd"
                                value={form?.password}
                                onChange={handleOnChange}
                            />
                        </Stack>

                        {/* Encode Button */}
                        <Button variant='contained' type='submit' onClick={handleSubmit}>
                            Encode
                        </Button>
                    </Stack>
                </Stack>
            </Container>
        </Layout>
    );
}

export default Encode;
