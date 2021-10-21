import React from 'react'
import styled from 'styled-components'

function Section({title, description, leftBtnTxt, rightBtnTxt, backgrounImg}) {
    return (
        <div>
            <Wrap bgImage = {backgrounImg}>
                
                <ItemText>

                    <h1>{title}</h1>

                    <p>{description}</p>

                </ItemText>

                <Buttons>

                    <ButtonGroup>

                        <LeftButton>
                            {leftBtnTxt}
                        </LeftButton>

                        {rightBtnTxt && 
                            <RightButton>
                                {rightBtnTxt}
                            </RightButton>
                        }

                    </ButtonGroup>

                    <DownArrow src='/images/down-arrow.svg'/>

                </Buttons>

            </Wrap>
        </div>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: ${props => `url('/images/${props.bgImage}')`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    h1 {
        font-size: 2.5rem;
        padding-bottom: .5rem;
        font-weight: 500;
        letter-spacing: .1rem;
    }

    p {
        color: var(--lite-gray);
    }
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const Buttons = styled.div`
`

const ButtonGroup = styled.div`
    display: flex;
    gap: 30px;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: var(--dark-gray);
    opacity: 0.85;
    height: 40px;
    width: 256px;
    border-radius: 40px;
    color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    letter-spacing: .08rem;
    font-size: .8rem;
    font-weight: 500;
    cursor: pointer;
`

const RightButton = styled(LeftButton)`
    background-color: var(--white);
    color: var(--dark-gray);
`

const DownArrow = styled.img`
    height: 40px;
    margin-bottom: 30px;
    overflow: hidden;
    animation: animateDown infinite 1.5s;
`
