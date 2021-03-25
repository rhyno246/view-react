import styled from '@emotion/styled'

const SliderWrapper = styled("div")`
    .ft-slick__dots--custom {
        height: 8px;
        width: 14px;
        background-color: #e5e7e9;
        border-radius: 4px;
        position: relative;
    }

    .slick-dots li {
        width: 14px;
        margin: 0 2px;
    }
    .slick-dots{
        bottom : 0 !important;
    }
    .slick-dots .slick-active {
        width: 56px;
        .ft-slick__dots--custom{
           background : #80CBC4
        }   
    }


    @keyframes loading {
        from {
            width: 0%;
        }

        to {
            width: 100%;
        }
    }


    .slick-dots .slick-active .ft-slick__dots--custom {
        width: 56px;
        top: -12px;
        overflow: hidden;

        .loading-item {
            height: 8px;
            animation: loading 5s ease-in;
            background-image: linear-gradient(270deg, #80CBC4, #80CBC4);
            display: inline-block;
            position: absolute;
            top: 0;
            left: 0;
            border-radius: 4px;
        }
    }
`;

export default SliderWrapper;
