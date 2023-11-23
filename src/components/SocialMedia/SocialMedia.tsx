import * as React from 'react';
import {InstagramFilled} from "@ant-design/icons";
import vk from '../../../public/img/vk.svg'
import tikTok from '../../../public/img/tikTok.svg'

const SocialMedia = () => {
    return (
        <div style={{width: "488px", textAlign: "center"}}>
            <div>Мы в соцсетях:</div>
            <div>
                <InstagramFilled />
                <img src={vk} alt={"vk"}/>
                <img src={tikTok} alt={"TikTok"}/>
            </div>
        </div>
    );
};

export default SocialMedia;
