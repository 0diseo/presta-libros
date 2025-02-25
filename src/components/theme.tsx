import { createTheme, alpha, getContrastRatio } from '@mui/material/styles';

const violetBase = '#470787';
const violetMain = alpha(violetBase, 0.7);

const theme = createTheme({
    palette: {
        primary: {
            main: violetMain,
            light: alpha(violetBase, 0.5),
            dark: alpha(violetBase, 0.9),
            contrastText: getContrastRatio(violetMain, '#fff') > 4.5 ? '#fff' : '#111',
        },
    },
});

export default theme;