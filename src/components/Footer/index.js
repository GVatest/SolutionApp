import "./footer.scss"
import Logo from "../Logo"
import Social from "../Social"
import { useEffect, useState } from "react";

const getWidth = () => window.innerWidth 
  || document.documentElement.clientWidth 
  || document.body.clientWidth;

function Footer() {

    const [isMobile, setIsMobile] = useState(getWidth() < 1024)

    const onResizeListener = () => {
        setIsMobile(getWidth() < 1024)
    }

    useEffect(() => {
        window.addEventListener("resize", onResizeListener)
    }, [])

    return (
        <div className="footer_border_wrapper">
            <footer>
                {!isMobile ? 
                    <>
                        <Logo>
                            <a traget="_blank" href="/docs/PrivacyPolicy.html"><span style={{textDecoration: "underline", fontSize: "20px", lineHeight: "25px"}}>Privacy</span></a>
                        </Logo>
                        <span className="powered_by">© 2022 Powered by Solution. All Rights Reserved.</span>
                        <Social/>
                    </>
                :
                    <>
                        <span className="powered_by">© 2022 Powered by Solution. All Rights Reserved.</span>
                    </>
                }
            </footer>
        </div>
    )
}

export default Footer