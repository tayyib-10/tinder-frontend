// modules
import React from 'react'
import styled from 'styled-components'

// local
import Logo from "./tinder-icon.svg"


// Material UI
import PersonIcon from "@material-ui/icons/Person"
import IconButton from '@material-ui/core/IconButton'
import ForumIcon from "@material-ui/icons/Forum"

function Header() {
    return (
        <Container>
            
            <IconButton>
                <Container__Person fontSize="large"/>
            </IconButton>

            <Tinder__Logo
                src={Logo}
                alt="Logo"
            />
            
            <IconButton>
                <Container__Forum fontSize="large"/>
            </IconButton>

        </Container>
    )
}

// Styles
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 100;
    border-bottom: 1px solid #f9f9f9;
`

const Tinder__Logo = styled.img`
    object-fit: contain;
    height: 40px;
`

const Container__Person = styled(PersonIcon)`
    padding: 20px;
`

const Container__Forum = styled(ForumIcon)`
    padding: 20px;
`
export default Header
