import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <div>
            <Container>

                <Section
                    title = 'Model S'
                    description = 'Order Online for Touchless Delivery'
                    backgrounImg = 'model-s.jpg'
                    leftBtnTxt = 'Custom Order'
                    rightBtnTxt = 'Existing Inventory'
                />

                <Section
                    title = 'Model Y'
                    description = 'Order Online for Touchless Delivery'
                    backgrounImg = 'model-y.jpg'
                    leftBtnTxt = 'Custom Order'
                    rightBtnTxt = 'Existing Inventory'
                />

                <Section
                    title = 'Model 3'
                    description = 'Order Online for Touchless Delivery'
                    backgrounImg = 'model-3.jpg'
                    leftBtnTxt = 'Custom Order'
                    rightBtnTxt = 'Existing Inventory'
                />

                <Section
                    title = 'Model X'
                    description = 'Order Online for Touchless Delivery'
                    backgrounImg = 'model-x.jpg'
                    leftBtnTxt = 'Custom Order'
                    rightBtnTxt = 'Existing Inventory'
                />

                <Section
                    title = 'Solar Panels'
                    description = 'Lowest Cost Solar Panels in America'
                    backgrounImg = 'solar-panel.jpg'
                    leftBtnTxt = 'Order Now'
                    rightBtnTxt = 'Learn More'
                />

                <Section
                    title = 'Solar Roof'
                    description = 'Produce Clean Energy From your Roof'
                    backgrounImg = 'solar-roof.jpg'
                    leftBtnTxt = 'Order Now'
                    rightBtnTxt = 'Learn More'
                />

                <Section
                    title = 'Accessories'
                    backgrounImg = 'accessories.jpg'
                    leftBtnTxt = 'Shop Now'
                />

            </Container>
        </div>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`
