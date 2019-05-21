import styled, {keyframes} from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0.25;
  }

  to {
    opacity: 1;
  }
`;

export const StyledArticleRowCard = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 0 35px 0;
    cursor: pointer;
    animation: ${fadeIn} 0.5s ease-in;
    .RowArticle__Header {
        min-height: 200px;
        background-attachment: fixed;
        background-image: url(${props => props.headerImage});
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        &:hover {
            .RowArticle__Header__Overlay {
                background-color: rgba(0, 0, 0, 0.15);
                transition: background-color 0.5s ease;
            }
            .RowArticle__Title, .RowArticle__Abstract {
                background-color: rgba(0, 0, 0, 0.65);
                transition: background-color 0.5s ease;
            }
        }
        &__Overlay {
            min-height: 200px;
            background-color: rgba(0, 0, 0, 0.7);
            transition: background-color 0.5s ease;
        }
        .ContentWrapper {
            width: 100%;
            display: flex;
            padding: 30px;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            .RowArticle__Title {
                text-align: center;
                width: 100%;
                font-size: 28px;
                max-width: 770px;
                margin: 0px auto;
                color: #fff;
                padding: 15px;
                border-top-right-radius: 5px;
                border-top-left-radius: 5px;
            }
            .RowArticle__Abstract {
                text-align: center;
                width: 100%;
                font-size: 14px;
                max-width: 770px;
                margin: 0px auto;
                color: #fff;
                margin-bottom: 10px;
                padding: 15px;
                border-bottom-right-radius: 5px;
                border-bottom-left-radius: 5px;
            }
        }
    }
`