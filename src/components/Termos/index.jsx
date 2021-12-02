import {
    Button,
    Typography,
    Toolbar,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@mui/material/';

export default function Termos({ open, onClose }) {
    return (
        <div>
            <Dialog
                open={open}
                onClose={onClose}
                scroll='paper'
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">
                    Termos de Uso
                </DialogTitle>
                <DialogContent dividers>
                    <DialogContentText
                        id="scroll-dialog-description"

                        tabIndex={-1}
                    >
                        <Typography variant="h5">
                            Termos
                        </Typography>

                        <Typography variant='span'>
                            Ao acessar o site Bora Viajar, você concorda em cumprir estes termos de serviço.
                            Caso não concordar com algum desses termos, não use ou acesse este site. Os materiais
                            aqui contidos são protegidos pelas leis de direitos autorais.
                        </Typography>
                        <Toolbar />
                        <Typography variant="h6">
                            Isenção de responsabilidade
                        </Typography>
                        <Typography variant='span'>
                            O Bora Viajar não oferece garantias, de qualquer tipo, sobre o conteúdo deste site
                        </Typography>
                        <br /><br />
                        <Typography variant='span'>
                            O Bora Viajar também não garante a precisão, resultados prováveis ​​ou confiabilidade
                            do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em
                            sites vinculados a este site.
                        </Typography>
                        <br /><br />
                        <Typography variant='span'>
                            Os materiais exibidos no site da Bora Viajar podem incluir erros técnicos, tipográficos
                            ou fotográficos. Bora Viajar não garante que qualquer material em seu site seja preciso,
                            completo ou atual. Bora Viajar pode fazer alterações nos materiais contidos em seu site
                            a qualquer momento, sem aviso prévio. No entanto, Bora Viajar não se compromete a atualizar
                            os materiais.
                        </Typography>
                        <br /><br />
                        <Typography variant='span'>
                            O Bora Viajar não analisou todos os sites vinculados ao seu site e não é responsável pelo
                            conteúdo de nenhum site vinculado. O uso de qualquer site vinculado é por conta e risco
                            do usuário.
                        </Typography>
                        <br /><br />

                        <Typography variant="h6">
                            Mais Informações
                        </Typography>
                        <Typography variant='span'>
                            O Bora Viajar pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio.
                        </Typography>

                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose}>Fechar</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}