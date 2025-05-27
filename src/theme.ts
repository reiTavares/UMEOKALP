import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Paleta de cores com foco em tons pastéis e acolhedores
const babyPinkPalette = {
  primary: {
    main: '#FADADD', // Rosa bebê suave (Baby Pink)
    light: '#FFE4E1', // Misty Rose (mais claro)
    dark: '#F8C8DC', // Rosa um pouco mais escuro para contraste
    contrastText: '#5D4037', // Marrom suave para texto sobre rosa
  },
  secondary: {
    main: '#A0D2DB', // Azul pastel suave (Powder Blue)
    light: '#B2EBF2', // Cyan claro
    dark: '#80CBC4', // Teal claro
    contrastText: '#FFFFFF',
  },
  background: {
    default: '#FAF7F7', // Um off-white muito suave, quase branco
    paper: '#FFFFFF',
  },
  text: {
    primary: '#4E4E4E', // Cinza escuro para boa legibilidade
    secondary: '#757575', // Cinza médio
    disabled: '#BDBDBD',
  },
  error: {
    main: '#FF6B6B', // Vermelho suave para erros
  },
  warning: {
    main: '#FFAF42', // Laranja suave para avisos
  },
  info: {
    main: '#5C9EAD', // Azul acinzentado para informações
  },
  success: {
    main: '#79D70F', // Verde suave para sucesso
  },
};

let theme = createTheme({
  palette: babyPinkPalette,
  typography: {
    fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
      fontSize: '2.8rem', // Ajustado para mobile-first
      color: babyPinkPalette.text.primary,
    },
    h2: {
      fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
      fontSize: '2.2rem',
      color: babyPinkPalette.text.primary,
    },
    h3: {
      fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
      fontSize: '1.8rem',
      color: babyPinkPalette.text.primary,
    },
    h4: {
      fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
      fontSize: '1.5rem',
      color: babyPinkPalette.text.primary,
    },
    subtitle1: {
      fontSize: '1.1rem',
      fontWeight: 400,
      color: babyPinkPalette.text.secondary,
      lineHeight: 1.6,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.7,
      color: babyPinkPalette.text.primary,
    },
    button: {
      textTransform: 'none', // Botões com texto normal, não maiúsculas
      fontWeight: 600,
      fontSize: '0.95rem',
    },
  },
  shape: {
    borderRadius: 12, // Bordas suavemente arredondadas
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '10px 24px',
        },
        containedPrimary: {
          color: babyPinkPalette.primary.contrastText, // Garante contraste no botão primário
          '&:hover': {
            backgroundColor: babyPinkPalette.primary.dark,
          }
        },
        containedSecondary: {
          color: babyPinkPalette.secondary.contrastText,
           '&:hover': {
            backgroundColor: babyPinkPalette.secondary.dark,
          }
        }
      },
      defaultProps: {
        disableElevation: true, // Botões mais "flat"
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)', // Sombra sutil
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.08)',
          }
        }
      }
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        InputLabelProps: {
          shrink: true,
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: babyPinkPalette.background.paper,
          color: babyPinkPalette.text.primary,
          boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.06), 0px 4px 5px 0px rgba(0,0,0,0.04), 0px 1px 10px 0px rgba(0,0,0,0.03)' // Sombra sutil para o header
        }
      }
    }
  }
});

theme = responsiveFontSizes(theme);

export default theme;
