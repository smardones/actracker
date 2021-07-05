import React from 'react';
import Grid from '@material-ui/core/Grid';
import MenuNav from '../component/nav';
import Container from '@material-ui/core/Container';

export default function WelcomePage() {
    return (
        <Container>
            <MenuNav />
            <div className="welcome-section">
                <h1>Welcome!</h1>
                <p className='welcome-message'>Choose a category in the Menu to keep track or your finds!</p>
            </div>
        </Container>        
        
    )
}