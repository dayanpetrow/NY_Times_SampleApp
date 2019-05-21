import React from 'react'
import { FooterWrapper } from './styledFooter';
import { Button } from 'antd';

export default () => (
    <FooterWrapper>
        <div className="Footer__Copyright">© Dayan Petrow 2019. All Rights Reserved.</div>
        <Button href="https://github.com/dayanpetrow/NY_Times_SampleApp" target="_blank" type="danger">Source code on GitHub</Button>
    </FooterWrapper>
)
