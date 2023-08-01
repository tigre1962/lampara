import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { getContact } from "../data/items";

export default function Contact() {
const params = useParams();
const contact = useMemo(
    () => getContact(params.contactid), 
    [params.contactid]
    );
    if (!contact) {
        throw new Error("Contact does not exist");
    }
    return(
        <div>
            <h1>Detalle del Contacto</h1>
            <h2>{contact.name}</h2>
            <p>{contact.phone}</p>
            <p>{contact.favorite? 'favorite': 'Regular Contacto'}</p>
        </div>
    );
}