import { useState } from 'react'

import styles from './Formulario.module.css'

const Formulario = () => {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);

    const resultado = () => {
        if (!altura || !peso) {
            return(<p className={styles.mensagem}>Insira o seu peso e altura!</p>);
        }

        const quadrado = altura * altura;
        const total = peso / quadrado;
        const imc = total.toFixed(2);
        
        if (imc >= 18.5 && imc <= 24.9) {
            return(<div className={styles.resultado}><p>Seu imc é: <span className={styles.cor}>{imc}</span>, você está saudável!</p></div>)
        } else if (imc < 18.5) {
            return(<div className={styles.resultado}><p>Seu imc é: <span className={styles.corV}>{imc}</span>, você está abaixo do peso!</p></div>)
        } else if (imc > 24.9) {
            return(<div className={styles.resultado}><p>Seu imc é: <span className={styles.corV}>{imc}</span>, você está acima do peso!</p></div>)
        }
    }

    return (
        <>
            <input className={styles.insira} type="number" placeholder='Insira seu peso' onChange={evento => setPeso(evento.target.value)}/>
            <input className={styles.insira} type="number" placeholder='Insira sua altura' onChange={evento => setAltura(evento.target.value)}/>
            {resultado()}
        </>
    )
}

export default Formulario