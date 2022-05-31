import { Navbar } from "../../components/Navbar"
import { Stories } from "../../components/Stories"
import * as C from "./home.styles"


export const Home = () => {
    return(
        <C.Container>
            <C.Wrapper>
                <Navbar />
                <Stories />
            </C.Wrapper>
        </C.Container>
    )
}