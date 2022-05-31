import * as C from "./navbar.styles";
import InstagramLogo from "../../images/logo_insta.png";

import * as Icon from "../../images/SVGS"

export const Navbar = () => {
    return(
        <C.Corpo>
            <C.Wrapper>

                <C.ItensContent>
                    <C.Itens> <img src={InstagramLogo} alt="" /> </C.Itens>
                </C.ItensContent>

                <C.ItensContent>
                    <C.Itens> <Icon.HomeIcon /></C.Itens>
                    <C.Itens> <Icon.PostIcon /></C.Itens>
                    <C.Itens> <Icon.ChatIcon /></C.Itens>
                </C.ItensContent>
                
                {/* <C.Itens> <Icon.NavIcon/></C.Itens>
                <C.Itens> <Icon.NotificationIcon/></C.Itens> */}
                {/* <C.Itens><img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" /></C.Itens> */}
            </C.Wrapper>
        </C.Corpo>
    )
}