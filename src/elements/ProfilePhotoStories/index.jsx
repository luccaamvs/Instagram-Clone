import * as C from "./profilephotostories.styles"

export const ProfilePhotoStories = ({img, user}) => {
    return(
        <C.Container>
            <C.Wrapper>
                <C.PhotoContainer>
                    <img src={img} />
                </C.PhotoContainer>
                <p>{user}</p>
            </C.Wrapper>
        </C.Container>
    )
}