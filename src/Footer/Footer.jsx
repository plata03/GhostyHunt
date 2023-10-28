import "./footerstyle.css"
import { Link } from "react-router-dom"

export const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="side1">
                    <h2 className="footer-title">Ghosty Hunt</h2>
                    <p className="footer-text">Privacy Policy</p>
                    <p className="footer-text">Cookie Policy</p>
                    <p className="footer-text">Legal</p>
                    <p className="footer-text">@ 2023 Ghosty Hunt - All Rights Reserved</p>
                </div>
                <div className="side2">
                    <h2 className="en">EN</h2>
                    <div className="social">
                        <Link to={"https://www.youtube.com/channel/UC5XjMugU9S5nSBtvqGpPZKQ"}>
                            <img className="logosocial" src="https://i.ibb.co/5xJpbm3/youtube.png" />
                        </Link>
                        <Link to={"https://www.instagram.com/ale_plata_03/"}>
                            <img className="logosocial" src="https://i.ibb.co/BPrx7Lt/instagram-Logo.png" />
                        </Link>
                        <Link to={"https://www.linkedin.com/in/alessandro-platania-b9158425a"}>
                            <img className="logosocial" src="https://i.ibb.co/3BXBHbx/linkedin-Logo.png" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}