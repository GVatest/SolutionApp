import "./header.scss"
import Logo from "../Logo"
import ButtonConnect from "../ButtonConnect"


function Header() {

    return (
        <div className="header_border_wrapper">
            <header>
                <Logo>
                    <span style={{fontSize: "25px", fontWeight: "500"}}>Solution</span>
                </Logo>
                <ButtonConnect/>
            </header>
        </div>

    )
}

export default Header