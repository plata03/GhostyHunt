import './ghostsstyle.css';
import {Header} from '../Header/Header'
import {Footer} from '../Footer/Footer'
import { useEffect, useState } from "react";
import { appDb } from "../firebaseConfig";
import {Ghost} from '../Ghost/Ghost'

const db = appDb.firestore();

export const Ghosts = () => {

    const [fantasmi, setFantasmi] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const snapshot = await db.collection("Ghost").get();
            const ghostsData = snapshot.docs.map((doc) => doc.data());
                
            setFantasmi(ghostsData);
        };
        fetchData();
        
      }, []);
    

    return (
        <div className='background-ghosts'>
            <Header />
            <h1 style={{fontFamily: 'chiller', fontSize: '750%', textAlign: 'center', color: '#111111', textShadow: '#6b6b6b 2px 5px'}}>Ghosts Archive</h1>
            <div style={{textAlign: 'center', marginTop: '-2%'}}>
                <input className='search' placeholder='Search ghost...' disabled />
            </div>
            <div className='ghosts-wrapper'>
            {fantasmi
            .sort( (a, b) => a.name > b.name ? 1 : -1)
            .map((fantasma) => (
                
                    <Ghost 
                        imgg={fantasma.image}
                        nome={fantasma.name}
                        luogo={fantasma.location}
                        descri={fantasma.desc}
                    />
                    
            ))
                
            }
            </div>
            <Footer />
        </div>
    )
}