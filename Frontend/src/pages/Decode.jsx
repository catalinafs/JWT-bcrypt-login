// React
import { useState } from "react";

// Hooks, Clients, Global States, etc.
import useToast from "../hooks/useToast";
import axios from "axios";

// Custom Components
import Layout from "../components/ui/Layout";

// Material UI
import { Button, Container, Stack, TextField, Typography } from "@mui/material";

// Colors, Imgs, Icons, etc.
import colors from "../utils/colors";

const initForm = {
    token: '',
};

const Decode = () => {
    const [form, setForm] = useState(initForm);
    const [info, setInfo] = useState('');

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
            const response = await axios.post('http://localhost:3489/decode', form);

            setInfo(response.data.user);

            // Success Alert
            useToast({
                text: 'Token correcto',
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

    return (
        <Layout>
            <Container maxWidth="xs">
                {
                    info === '' ?
                        ''
                        : (
                            <Stack marginTop='40px' spacing='10px'>
                                <Typography variant="h4" color={colors.primary}>
                                    User Info
                                </Typography>
                                <Stack
                                    borderRadius='10px'
                                    padding={{xs: '15px', md:'20px 20px 20px 35px'}}
                                    // overflow='hidden'
                                    // textOverflow="ellipsis"
                                    sx={{
                                        backgroundColor: colors.nav,
                                        borderColor: colors.secondary,
                                        borderStyle: 'solid',
                                    }}
                                >
                                    <Stack direction='row' spacing='45px'>
                                        <Typography
                                            variant="h5"
                                            fontSize={{xs: '15px', md: '18px'}}
                                            color={colors.primary}
                                        >
                                            Name:
                                        </Typography>
                                        <Typography
                                            variant="h5"
                                            fontSize={{xs: '15px', md: '18px'}}
                                            fontWeight={300}
                                            color={colors.primary}
                                        >
                                            {info.name}
                                        </Typography>
                                    </Stack>
                                    <Stack direction='row' spacing={{xs: '20px',md: '15px'}}>
                                        <Typography
                                            variant="h5"
                                            fontSize={{xs: '15px', md: '18px'}}
                                            color={colors.primary}
                                        >
                                            Lastname:
                                        </Typography>
                                        <Typography
                                            variant="h5"
                                            fontSize={{xs: '15px', md: '18px'}}
                                            fontWeight={300}
                                            color={colors.primary}
                                        >
                                            {info.lastname}
                                        </Typography>
                                    </Stack>
                                    <Stack direction='row' spacing='45px'>
                                        <Typography
                                            variant="h5"
                                            fontSize={{xs: '15px', md: '18px'}}
                                            color={colors.primary}
                                        >
                                            Phone:
                                        </Typography>
                                        <Typography
                                            variant="h5"
                                            fontSize={{xs: '15px', md: '18px'}}
                                            fontWeight={300}
                                            color={colors.primary}
                                        >
                                            {info.phone}
                                        </Typography>
                                    </Stack>
                                    <Stack direction='row' spacing='50px'>
                                        <Typography
                                            variant="h5"
                                            fontSize={{xs: '15px', md: '18px'}}
                                            color={colors.primary}
                                        >
                                            Email:
                                        </Typography>
                                        <Typography
                                            variant="h5"
                                            fontSize={{xs: '15px', md: '18px'}}
                                            fontWeight={300}
                                            color={colors.primary}
                                        >
                                            {info.email}
                                        </Typography>
                                    </Stack>
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
                            {/* Token input */}
                            <TextField
                                id="token"
                                label="Token"
                                name='token'
                                placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQ2"
                                value={form?.token}
                                onChange={handleOnChange}
                            />
                        </Stack>

                        {/* Decode Button */}
                        <Button variant='contained' type='submit' onClick={handleSubmit}>
                            Decode
                        </Button>
                    </Stack>
                </Stack>
            </Container>
        </Layout>
    );
}

export default Decode;
