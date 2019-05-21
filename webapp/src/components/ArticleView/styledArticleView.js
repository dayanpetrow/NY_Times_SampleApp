import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const ArticleViewWrapper = styled.div`
    background-image: url(${props => props.bg});
    background-attachment: fixed;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    animation: ${fadeIn} 0.7s ease-in;
    margin: 20px 0px;
    .ArticleImage__Overlay {
        min-height: 500px;
        background-color: rgba(0, 0, 0, 0.7);
        transition: background-color 0.5s ease;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: white;
        padding: 20px;
        > h1 {
            color: white;
            margin: 0px auto;
            max-width: 780px;
            text-align: center;
            width: 100%;
        }
        .Article__Popularity {
            font-size: 48px;
        }
        > p {
            color: white;
            margin: 0px auto;
            max-width: 780px;
            text-align: center;
            width: 100%;
            font-size: 16px;
            padding: 20px 0;
        }
        > .Article__Meta {
            color: white;
            margin: 0px auto;
            max-width: 780px;
            text-align: center;
            width: 100%;
            font-size: 14px;
            > span.highlight {
                font-weight: bold;
                margin: 0px 5px;
            }
        }
        .Article__ReadMore {
            padding: 30px 10px;
            margin: 0px auto;
            max-width: 780px;
            text-align: center;
            width: 100%;
        }
        .Article__Keywords {
            text-align: center;
            width: 100%;
            max-width: 770px;
            margin: 0px auto;
            padding: 20px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            > .Article__Keyword {
                font-size: 12px;
                color: #fff;
                padding: 3px 10px;
                border-radius: 3px;
                background-color: #3eaf7c;
                text-transform: uppercase;
                line-height: 24px;
                margin: 5px 3px;
                box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.24);
                transition: transform 0.3s ease;
                &:hover {
                    transform: translateY(-3px);
                    transition: transform 0.3s ease;
                }
            }
        }
    }
`