import { Link } from "react-router-dom"
import "./headerstyle.css"

export const Header = () => {
    return (
        <div className="navi">
            <div className="container">
                <img className="logo" src="https://i.ibb.co/GFBry0V/ghostyghostlogo.png"/>
                <ul>
                    <li>
                        <Link className="aa" to={"/"} >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className="aa" to={"/tutorial"} >
                            Tutorial
                        </Link>
                    </li>
                    <li>
                        <Link className="aa" to={"/ghosts"} >
                            Ghosts
                        </Link>
                    </li>
                    <li>
                        <Link className="aa" to={"/items"} >
                            Items
                        </Link>
                    </li>
                    <li>
                        <Link className="aa" to={"/contacts"} >
                            Contacts
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}