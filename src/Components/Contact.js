import styles from './Contact.module.css'


function Contact(){
    return(
        <div id='Contact' className={styles.contact}>
            <h1>Contato</h1>

            <p>
            Oferecemos serviço completo de refeições para qualquer evento, grande ou pequeno. Entendemos suas necessidades e iremos atender a comida para satisfazer os maiores critérios de todos, tanto de aparência quanto de sabor.<br/> 
            Não hesite em nos contatar.
            </p>

            <h4></h4>

            <p>
            Também pode contactar-nos pelo telefone (21) 15879-5878 ou email pratic@prats.com, ou pode enviar-nos uma mensagem aqui:
            </p>

            <form action= "https://api.sheetmonkey.io/form/iC42maAKNmM2p1Lc4DPxbu"  method="post">
                <input type='text' placeholder='Nome' name="Name" required/>
                <input type='number' placeholder='Quantas pessoas' name="Quantas pessoas" required/>
                <input type='date' placeholder='Nome' name="Data" required/>
                <input type='text' placeholder='Messagem \ Requisitos especiais'/>
                <input type='text' placeholder='Telefone' name="Telefone" required/>
                <input type="hidden" name="Created" value="x-sheetmonkey-current-date-time" />
                <button type='submit'>Enviar Mensagem</button>
            </form>
            </div>
    )
}

export default Contact