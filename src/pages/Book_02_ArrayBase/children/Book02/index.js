import React from "react";

import PageWrapper from '@/components/PageWrapper'

import CollapseWrapper from '@/components/CollapseWrapper'

import {turnItems} from '@/utils/utils.js'

import Module01 from "./Modules/Module01";
import Module02 from "./Modules/Module02";
import Module03 from "./Modules/Module03";
import SmallTitle from "@/components/SmallTitle";

const Book02 = () => {

    const baseItems = [
        {
            title: 'Module01',
            component: <Module01></Module01>,
        },
        {
            title: 'Module02',
            component: <Module02></Module02>,
        },
        {
            title: 'Module03',
            component: <Module03></Module03>,
        },
    ];

    let items = turnItems(baseItems)

    return (<>
        <PageWrapper
            title={'常见算法'}
        >
            {/* <CollapseWrapper
                items={items}
            ></CollapseWrapper> */}

            <SmallTitle>
                暂时 略~
            </SmallTitle>
        </PageWrapper>
    </>)
}

export default Book02