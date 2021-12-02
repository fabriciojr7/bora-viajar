import { Alert, Stack, Collapse, IconButton } from '@mui/material/';
import { MdClose } from "react-icons/md";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    alerta: {
        marginBottom: '20px'
    }
}))

export default function MyAlert({open, onClose, msg, type }) {
    const classes = useStyles()
    //const [open, setOpen] = useState(true);
    return (
        <Stack className={classes.alerta} sx={{ width: '100%' }} spacing={2}>
            <Collapse in={open}>
                <Alert
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={onClose}
                        >
                            <MdClose fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ mb: 2 }}
                    variant="filled"
                    severity={type}
                >
                    {msg}
                </Alert>
            </Collapse>

        </Stack>
    );
}