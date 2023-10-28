import './tutorialstyle.css'
import {Header} from '../Header/Header'
import {Footer} from '../Footer/Footer'
import {Boss} from '../Boss/Boss'
import { useEffect, useState } from "react";
import { appDb } from "../firebaseConfig";
import { Dimension } from '../Dimension/Dimension';

const db = appDb.firestore();

export const Tutorial = () => {
    const [bosses, setBosses] = useState([]);
    const [dims, setDims] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const snapshot = await db.collection("Boss").get();
            const ghostsData = snapshot.docs.map((doc) => doc.data());
                
            setBosses(ghostsData);
        };
        fetchData();
        
      }, []);

      useEffect(() => {
        const fetchData = async () => {
            const snapshot = await db.collection("Dimension").get();
            const ghostsData = snapshot.docs.map((doc) => doc.data());
                
            setDims(ghostsData);
        };
        fetchData();
        
      }, []);


    return (
        <div style={{backgroundColor: '#00ffb3'}}>
            <Header />
            <div className='tutorial-page'>
                <h1 className='tutorial-title'>How To Start? </h1>
                <p className='desc-first'>First off, each ghost has a small chance of dropping a special item when they die, also known as the "Ghost Orb".</p>
                <img width={700} className='img-orb' src='https://media.discordapp.net/attachments/883662081914699786/1166449375589961770/image.png?ex=654a87a2&is=653812a2&hm=51022d79f1a93a7aaec8cab3034f08a35f3560abd3ff29bbd42857c9e8dcccf7&=&width=1276&height=676' />
                <div style={{backgroundColor: '#111111', padding: 5, color: '#00ffb3', marginBottom: 150}}>
                    <h2 style={{fontSize: 150, fontFamily: 'chiller', marginTop: -0.5, textShadow: '#6b6b6b 5px 5px'}}>WARNING!</h2>
                    <p style={{fontSize: 25, fontFamily: 'thin', marginTop: -100, marginBottom: 20}}>All the ghosts who are under the sunlight will despawn after 5 seconds!</p>
                </div>
                <p className='desc-first'>Collect all 30 orbs to combine them into the "Queen Orb"!</p>
                <div className='flip-card'>
                    <div className='flip-card-inner'>
                        <div className='flip-card-front'>
                        <img src='https://media.discordapp.net/attachments/883662081914699786/1166452646379540632/image.png?ex=654a8aae&is=653815ae&hm=b515dc584e93fd9b5848ccc8b426aab53e17bd8711f1f468c7f368b1d3880d32&=' alt="Avatar" style={{width:'500px', height: 'auto', borderRadius: '25px'}} />
                        </div>
                        <div className="flip-card-back">
                        <div className="flip-card-front">
                        <img src='https://media.discordapp.net/attachments/883662081914699786/1166452661634216078/image.png?ex=654a8ab2&is=653815b2&hm=e7b4e7e6e2face47cd559f4cd823b46ca2f20a49c5bb0f5ea5d2623d24ab7f11&=' alt="Avatar" style={{width:'500px', height: 'auto', borderRadius: '25px'}}/>
                        </div>
                        </div>
                    </div>
                </div>
                <p className='desc-first'>In order to summon the Ghosty Queen, you gotta make a redstone dust square (3x3), 
                stand in the middle of the redstone square and drop the Queen's Orb right in the middle. When the queen is around, 
                it becomes instantly night time and it stays like that until you defeat her.</p>
                <img width={700} className='img-orb' src='https://media.discordapp.net/attachments/883662081914699786/1166461160661467247/2023-05-01_14.png?ex=654a929c&is=65381d9c&hm=3cbf9d8249ea41b3d4fdd37af76f6b36bb241b6fb590e5dc18b423ea0824d135&=&width=1276&height=676' />
                <div style={{marginLeft: '10%', marginRight: '10%'}}>
                    <h1 style={{fontSize: 150, fontFamily: 'chiller', textShadow: '#6b6b6b 5px 5px'}}>DEFEAT THE BOSSES!</h1>
                    <div className='bosses-container'>
                        {bosses
                        .sort( (a, b) => a.name > b.name ? 1 : -1)
                        .map((boss) => (
                    
                        <Boss 
                            imgbb={boss.image}
                            nome={boss.name}
                            descri={boss.desc}
                        />
                    
                        ))
                
                        }
                    </div>
                    <h1 style={{fontSize: 150, fontFamily: 'chiller',textShadow: '#6b6b6b 5px 5px'}}>EXPLORE NEW DIMENSIONS!</h1>
                    <div className='dimensions-container'>
                        {dims
                        .sort( (a, b) => a.name > b.name ? 1 : -1)
                        .map((dim) => (
                        
                        <Dimension 
                            imgbb={dim.image}
                            nome={dim.name}
                            descri={dim.desc}
                        />
                    
                        ))
                
                        }
                    
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}