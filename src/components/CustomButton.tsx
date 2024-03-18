import { Icon } from '@mui/material';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
  primary: {
    background: '#FFC300',
    color: '#001D3D',
    borderRadius: '70px', 
    padding: '10px 20px',
    minWidth: '100px',
    fontSize: '14px',
    '&:hover': {
      background: '#FFC300',
      boxShadow: '0px 0px 5px 0px #FFFFFF',
    },
    '&:focus': {
      background: '#FFC300',
      boxShadow: '0px 0px 5px 0px #FFFFFF',
    },
    '&:disabled': {
      background: '#FFC300',
      color: '#001D3D',
    },
  },

  secondary: {
    background: 'transparent',
    color: '#001D3D',
    borderRadius: '70px', 
    border: '2px solid #001D3D',
    padding: '10px 20px',
    minWidth: '100px',
    fontSize: '14px',
    '&:hover': {
      background: 'transparent',
      boxShadow: '0px 0px 5px 0px #FFFFFF',
    },
    '&:focus': {
      background: 'transparent',
      boxShadow: '0px 0px 5px 0px #FFFFFF',
    },
    '&:disabled': {
      background: 'transparent',
      color: '#A4A9D1',
    },
  },
}));

const CustomButton = (props: any) => {
  const {
    label,
    disabled,
    onClick,
    className,
    startIcon,
    href,
    endIcon,
    style,
    component,
  } = props;
  const classes = useStyles();

  const typeButton =
    className === 'primary'
      ? classes.primary
      : className === 'secondary'
      ? classes.secondary
      : null;

  return (
    <Button
      {...props}
      className={clsx(typeButton)}
      style={{
        ...style,
      }}
      disabled={disabled}
      disableElevation
      disableRipple={false}
      variant={className === 'primary' ? 'contained' : 'outlined'} // Usamos 'outlined' para el botón secundario
      onClick={onClick}
      href={href}
      component={component}
      startIcon={startIcon && <Icon>{startIcon}</Icon>}
      endIcon={endIcon && <Icon>{endIcon}</Icon>}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
