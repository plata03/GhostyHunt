import {Header} from '../Header/Header'
import {Footer} from '../Footer/Footer'
import { Link } from "react-router-dom"
import Revenant from '../Assets/RevenantAnimated.gif'
import './homestyle.css'

export const Home = () => {
    return (
        <div className='ghosty-home'>
            <Header />
            <img className='home-background' src="https://i.ibb.co/RgLmJ5J/ghostybanner.png" />
            <div style={{textAlign: 'center'}}>
                <h1 className='home-title'>What's Ghosty Hunt?</h1>
                <img 
                    src={Revenant} 
                    width={200} 
                    height={'auto'} 
                    style={{position: 'absolute', top: 1150, left: 150}}
                />
                <img 
                    src={Revenant} 
                    width={200} 
                    height={'auto'} 
                    style={{position: 'absolute', top: 1150, right: 150, transform: 'scaleX(-1)'}}
                />
                <p className='mod-desc'>The Ghosty Hunt, also known as the Ghosty Ghost Mod, is a thrilling mod that introduces a wide array of paranormal equipment and over 20 haunting specters across various dimensions!</p>
                <div className='images-scrolling'>
                    <div className='images-container'>
                        <img src='https://media.discordapp.net/attachments/883662081914699786/1166006341643550790/2023-04-16_15.png?ex=6548eb07&is=65367607&hm=621952734048c6c7efca09ffb166fc7abe63ded9730cb84dde159664070da616&=' />
                        <img src='https://media.discordapp.net/attachments/883662081914699786/1166006377811025990/2023-04-16_15.png?ex=6548eb0f&is=6536760f&hm=d505465c2e8ba399b37e59950116fb6fea74962e4b47812420e05b89e4986753&=' />
                        <img src='https://media.discordapp.net/attachments/883662081914699786/1166006411403219054/2023-04-16_15.png?ex=6548eb17&is=65367617&hm=ad2a1bfb02fe4ae20e13df6e0b71ad9903056cd75617be9d22b80fceb1f2f35a&=' />
                        <img src='https://media.discordapp.net/attachments/883662081914699786/1166006451144241172/2023-04-16_15.png?ex=6548eb21&is=65367621&hm=2166fe94933a92d83f2061f640f5c077ea383678eaf078b5c7068b65e6b082f4&=' />
                        <img src='https://media.discordapp.net/attachments/883662081914699786/1166006482995777596/2023-04-16_15.png?ex=6548eb28&is=65367628&hm=4ec73e3107f39cd16afceef372a466fe86d818b190b62de4996c10ca7a190bb5&=' />
                    </div>
                </div>
                <Link to={"https://legacy.curseforge.com/minecraft/mc-mods/ghosty-ghost"}>
                    <button className='go-to-download'>Download</button>
                </Link>
            </div>
            <Footer />
        </div>
    )
}