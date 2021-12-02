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

export default function Privacidade({ open, onClose }) {

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
                    Política de Privacidade
                </DialogTitle>
                <DialogContent dividers>
                    <DialogContentText
                        id="scroll-dialog-description"
                        tabIndex={-1}
                    >
                        <Typography variant="h5">
                            Política de Privacidade
                        </Typography>

                        <Typography variant='span'>
                            A sua privacidade é importante para nós. É política do Bora Viajar
                            respeitar a sua privacidade em relação a qualquer informação sua que
                            possamos coletar no site Bora Viajar, e outros sites que possuímos e
                            operamos.

                        </Typography>
                        <br /><br />
                        <Typography variant='span'>
                            Solicitamos informações pessoais apenas quando necessário. Por meios
                            justos e legais, com o seu conhecimento e consentimento.

                        </Typography>
                        <br /><br />
                        <Typography variant='span'>
                            Quando armazenamos dados, protegemos dentro de meios comercialmente
                            aceitáveis​​para evitar perdas e roubos, bem como acesso, divulgação,
                            cópia, uso ou modificação não autorizados.
                        </Typography>
                        <br /><br />
                        <Typography variant='span'>
                            Não compartilhamos informações de identificação pessoal publicamente
                            ou com terceiros, exceto quando exigido por lei.

                        </Typography>
                        <br /><br />
                        <Typography variant='p'>
                            O nosso site pode ter links para sites externos que não são operados
                            por nós. Esteja ciente de que não temos controle sobre o conteúdo e
                            práticas desses sites e não nos responsabilizamos por esse conteúdo.

                        </Typography>
                        <br /><br />
                        <Typography variant='p'>
                            O uso continuado de nosso site será considerado como aceitação de nossas
                            práticas em torno de privacidade e informações pessoais.
                        </Typography>

                        <Toolbar />
                        <Typography variant="h5">
                            Política de Cookies Bora Viajar
                        </Typography>
                        <Typography variant="h6">
                            O que são cookies?
                        </Typography>
                        <Typography variant='span'>
                            Como é prática comum em quase todos os sites profissionais, este site usa cookies,
                            que são pequenos arquivos baixados no seu computador, para melhorar sua experiência.
                        </Typography>
                        <br /><br />
                        <Typography variant='span'>
                            Este site usa o Google Analytics, que é uma das soluções de análise mais difundidas e
                            confiáveis ​​da Web, para nos ajudar a entender como você usa o site e como podemos melhorar
                            sua experiência. Esses cookies podem rastrear itens como quanto tempo você gasta no site
                            e as páginas visitadas, para que possamos continuar produzindo um conteúdo melhor para nossos
                            usuários.
                        </Typography>
                        <br /><br />
                        <Typography variant="h6">
                            Mais informações
                        </Typography>
                        <Typography variant='span'>
                            Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você
                            não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso
                            interaja com um dos recursos que você usa em nosso site. Esta política é efetiva a partir de
                            Novembro/2021.
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