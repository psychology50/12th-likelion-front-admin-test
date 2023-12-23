import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  // Color
  palette: {
    primary: {
      main: "#045D8B",
      light: "#B1C3CD",
      dark: "#00365D"
    },
    error: {
      main: "#F45452"
    },
    offWhite: {
      main: "#FCFCFC"
    },
    label: {
      main: "#888888"
    },
    titleAct: {
      main: "#1E2222"
    },
    line: {
      main: "#D7D7D7"
    },
    category: {
    },
  },

  // Font
  typography: {
    disLg: {
      fontFamily: "Outfit, Arial, sans-serif",
      fontWeight: "600",
      fontSize: "48px",
      lineHeight: "56px"
    },
    disSm: {
      fontFamily: "Outfit, Arial, sans-serif",
      fontWeight: "700",
      fontSize: "24px",
      lineHeight: "24px"
    },
    bodyMd: {
      fontSize: "18px",
      lineHeight: "24px"
    },
    noto: {
      fontFamily: "Noto Sans KR, Arial, sans-serif",
      fontSize: "12px",
      lineHeight: "17.38px",
      fontWeight: "700",
    }
  },

  // Mui Comp
  components: {
    MuiContainer: {
      variants: [
        {
          props: {
            maxWidth: "md"
          },
          style: {
            padding: "0px !important",
            minWidth: "904px"
          }
        },
        {
          props: {
            maxWidth: "sm"
          },
          style: {
            padding: "0px !important",
            minWidth: "848px"
          }
        },

      ]
    },
    MuiIconButton: {

      variants: [
        {
          props: {
            variant: "arrow"
          },
          style: {
            width: "24px",
            height: "24px",
            padding: "0px"
          }
        },
        {
          props: {
            variant: "amount"
          },
          style: {
            width: "16px",
            height: "16px",
            padding: "0px"
          }
        },
        {
          props: {
            variant: "delete"
          },
          style: {
            width: "16px",
            height: "16px",
            padding: "16px"
          }
        },
        {
          props: {
            variant: "check"
          },
          style: {
            borderRadius: "10px",
            backgroundColor: "#045D8B",
            color: "#FCFCFC",
            width: "40px",
            height: "40px",
            padding: "0px",
            border: "2px",
            ":hover":{
              backgroundColor: "#045D8B",
              color: "#FCFCFC",
            },
            ":disabled":{
              backgroundColor: "#FCFCFC",
              color: "#045D8B",
              border: "2px solid"
            }
          },
          
        }
      ]
    },
    MuiInput: {
      styleOverrides: {
        root: {
          color: "#1E2222",
          fontFamily: "Noto Sans KR, Arial, sans-serif",
          fontSize: "16px",
          lineHeight: "23.17px",
          fontWeight: "400",
        },
      },
      variants: [
        {
          props: {
            variant: "alignRight"
          },
          style: {
            textAlign: "right",
            
          }
        }
      ]
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius: "10px",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: "#1E2222",
          fontFamily: "Noto Sans KR, Arial, sans-serif",
          fontSize: "16px",
          lineHeight: "23.17px",
          fontWeight: "400",
        },
        
        
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          margin: "auto",
          width: "100px"
        }
      }
    }
  }
});


export default theme