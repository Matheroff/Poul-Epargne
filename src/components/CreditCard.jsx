import "./CreditCard.css";
import goldChicken from "../assets/Pouletvolant.png";
import visa from "../assets/visa.png";
import poulEpargne from "../assets/poul'epargne.png";
import microChip from "../assets/puce.png";
import wifi from "../assets/sanscontact.png";
import insert from "../assets/insert.png";
import cb from "../assets/CB.png";
import chicken from "../assets/pouletHolo.png";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";


export default function CreditCard () {
    const container = useRef();
    const [isFlipped, setIsFlipped] = useState(false);

    const { contextSafe } = useGSAP({ scope: container });
  
    const handleClick = contextSafe(() => {
        setIsFlipped(!isFlipped)
        gsap.to(container.current, { rotationY: isFlipped ? 0 : 180, duration: 0.5 });
    });

    const hideNumber = (code) => {
        const parts = code.split(" ")
        const result = parts.map((nb,index) => {
            if (index < parts.length -1 ){
                return "****"
            }
            return nb
        })

        return result.join(" ")
    }

    const codeCard = hideNumber("1843 9236 0046 8346")

    return (
        <div id="cardContainer" onClick={handleClick} ref={container}>
            <div className="creditCard front" >
                <div className="bankName">
                    <img src={poulEpargne} alt="Poul'Epargne logo" id="logoPoulEpargne"/>
                    <p>POUL’ <br /> EPARGNE</p>
                </div>
                <div className="microChip">
                    <img src={wifi} alt="contactless logo"/>
                    <img src={microChip} alt="microchip" />
                </div>
                <p className="cardNumber">{codeCard}</p>
                <div className="content">
                    <img src={insert} alt="insert logo" id="insert" />
                    <div>
                        <p>CARTE DE CREDIT DEBIT</p>
                        <div className="expiration">
                            <p>EXPIRE <br /> A FIN</p>
                            <p className="date">07/28</p>
                        </div>
                        <p className="name">MME GALINA C. NUGGETS</p>
                    </div>
                </div>

                <img src={goldChicken} alt="gold chicken volant" id="goldChicken" />
                <img src={visa} alt="visa logo" className="visa" />
            </div>

            <div className="creditCard back">
                <p className="createdAt">Pondu le 12/07/2024 à 21h04</p>
                <div className="cardTrack"/>
                <div className="signatureContainer">
                    <div className="signature">
                        <p>719</p>
                    </div>
                    <img src={cb} alt="cb logo" id="cb" />
                </div>
                <div className="policy">
                    <p>PE LIBRE REPONSE 50299 - 93755 PLUMEBOURG CEDEX.</p>
                    <p>Important : carte strictement personnelle, propriété de la Poul’ Épargne émettrice qui peut la retirer à tout moment. Tout poulet trouvant cette carte est prié de bien vouloir l’adresser sous pli non affranchi à l’adresse ci dessus.</p>
                </div>
                <img src={chicken} alt="holographic chicken" id="holoChicken"  />
                <img src={visa} alt="visa logo" className="visa" />
            </div>
        </div>
    )
}




//Texte Recto

// POUL’ EPARGNE
// 1843 9236 0046 8346
// CARTE DE CREDIT DEBIT
// EXPIRE A FIN
// 07/28
// MME GALINA C. NUGGETS


//Texte Verso

// Pondu le 12/07/2024 à 21h04
// SIGNATURE DU TITULAIRE OBLIGATOIRE
// PE LIBRE REPONSE 50299 - 93755 PLUMEBOURG CEDEX.
// Important : carte strictement personnelle, propriété de la Poul’ Épargne émettrice qui peut la retirer à tout moment. Tout poulet trouvant cette carte est prié de bien vouloir l’adresser sous pli non affranchi à l’adresse ci dessus.