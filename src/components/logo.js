import Link from "next/link";
import Image from "next/image";
import {Text, useColorModeValue} from '@chakra-ui/react'
import styled from "@emotion/styled";
import bonsai_dark from "../public/images/bonsai-dark.png"
import bonsai_light from "../public/images/bonsai-light.png"



const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
aligh-item: center;
line-height: 30px;
padding: 10px;

&:hover img{
    transform: rotate(20deg);
}
`
const Logo = () => {
    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <Image src={useColorModeValue(bonsai_dark,bonsai_light)} width={20} height={20} alt="logo"/>
                    <Text
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontFamily='M PLUS Rounded 1c'
                        fontWeight="bold"
                        ml={3}
                        >
                            Rishabh Sinha
                        </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo