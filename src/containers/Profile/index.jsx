import { Card, Container, Grid } from '@material-ui/core'
import React from 'react'
import NavProfile from '../../components/NavProfile'
import './index.scss'
function Profile() {
    return (
        <div className="profile">
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4} md={4}>
                        <div className="left-control">
                            <Card>
                                <NavProfile />
                            </Card>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={8} md={8}>
                        adssdadsasd
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Profile

