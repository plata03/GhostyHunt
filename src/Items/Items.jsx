import {Header} from '../Header/Header';
import {Footer} from '../Footer/Footer';
import {Item} from '../Item/Item';
import {Other} from '../OtherItem/Other'
import './itemsstyle.css';
import { useEffect, useState } from "react";
import { appDb } from "../firebaseConfig";

const db = appDb.firestore();

export const Items = () => {

    const [oggetti, setOggetti] = useState([]);
    const [altri_oggetti, setAltriOggetti] = useState([]);
    
    
    useEffect(() => {
        const fetchData = async () => {
            const snapshot = await db.collection("Item").get();
            const itemsData = snapshot.docs.map((doc) => doc.data());
            setOggetti(itemsData);
        };
        fetchData();
      }, []);

      useEffect(() => {
        const fetchData2 = async () => {
            const snapshot = await db.collection("Other_Items").get();
            const itemsData = snapshot.docs.map((doc) => doc.data());
            setAltriOggetti(itemsData);
        };
        fetchData2();
      }, []);



    return (
        <div className='background-items'>
            <Header />
            <h1 style={{fontFamily: 'chiller', fontSize: '750%', textAlign: 'center', color: '#111111', textShadow: '#6b6b6b 2px 5px'}}>Items Archive</h1>
            <h2 style={{fontFamily: 'chiller', fontSize: '500%', color: '#111111', marginTop: '-2%', marginLeft: '15%', textShadow: '#6b6b6b 2px 5px'}}>Craftable Items:</h2>
            <div className='items-wrapper'>
                {oggetti
                .sort( (a, b) => a.name > b.name ? 1 : -1)
                .map((obj) => (
                
                    <Item 
                        crafting={obj.recipe}
                        nome={obj.name}
                        need={obj.needs}
                        descri={obj.desc}
                    />
                
                ))}

            </div>
            <h2 style={{fontFamily: 'chiller', fontSize: '500%', color: '#EEEEEE', marginLeft: '15%', textShadow: '#6b6b6b 2px 5px'}}>Non-Craftable Items:</h2>
            <div className='items-wrapper'>
                {altri_oggetti
                .sort( (a, b) => a.name > b.name ? 1 : -1)
                .map((obj2) => (
                    <Other
                        nome={obj2.name}
                        imgbb={obj2.image}
                        descri={obj2.desc}
                        bai={obj2.by}
                    />
                ))}
            </div>
            <Footer />
        </div>
    )
}