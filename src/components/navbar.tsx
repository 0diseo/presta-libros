import { Stack, Link, Toolbar, Typography, Container, AppBar, Button, Drawer, Box} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {useState} from "react";

const pages = [
    { name: "Libros", id: "libors" },
    { name: "E-Libros", id: "elibros" },
    { name: "Proyecto", id: "proyect" },
];

const Nav = () => {
    const [open, setOpen] = useState(false);
    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    return (
        <>
            <Button
                variant="text"
                onClick={toggleDrawer(true)}
                sx={{ color: "white", display: { xs: "flex", sm: "none" } }}
            >
                <MenuIcon />
            </Button>
            <Drawer
                open={open}
                onClose={toggleDrawer(false)}
                anchor="right"
                sx={{
                    display: { xs: "inherit", sm: "none" },
                    "& .MuiDrawer-paper": {
                        height: "100%",
                        width: "100%",
                    },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        p: 2,
                    }}
                >
                    <Button onClick={toggleDrawer(false)}>
                        <CloseIcon />
                    </Button>
                </Box>
                <NavList />
            </Drawer>
            <NavList
                sx={{
                    display: { xs: "none", sm: "inherit" },
                }}
            />
        </>
    );
};

const NavList = ({ ...props }) => {
    return (
        <Stack
            overflow="auto"
            direction={{ xs: "column", sm: "row" }}
            gap={3}
            width={{ xs: "100%", sm: "initial" }}
            textAlign={{ xs: "center", sm: "initial" }}
            fontSize={{ xs: "22px", sm: "initial" }}
            {...props}
        >
            {pages.map(page => (
                <Link
                    key={page.id}
                    sx={{
                        color: { xs: "primary", sm: "white" },
                        textDecoration: "none",
                    }}
                >
                    {page.name}
                </Link>
            ))}
        </Stack>
    );
};

const Navbar  = ()=> {
    return (
        <>
            <AppBar>
                <Container>
                    <Toolbar>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            width="100%"
                        >
                            <Typography variant="h6">My App</Typography>
                            <Nav />
                        </Stack>
                    </Toolbar>
                </Container>
            </AppBar>
            <Toolbar />
        </>
    );
};
export default Navbar;