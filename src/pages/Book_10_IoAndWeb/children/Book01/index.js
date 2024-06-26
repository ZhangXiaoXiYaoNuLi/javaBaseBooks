import React from "react";

import PageWrapper from '@/components/PageWrapper'

import CollapseWrapper from '@/components/CollapseWrapper'

import {turnItems} from '@/utils/utils.js'

import Module01 from "./Modules/Module01";
import Module02 from "./Modules/Module02";
import Module03 from "./Modules/Module03";
import Module04 from "./Modules/Module04";
import Module05 from "./Modules/Module05";
import Module06 from "./Modules/Module06";
import Module07 from "./Modules/Module07";
import Module08 from "./Modules/Module08";
import Module09 from "./Modules/Module09";
import Module10 from "./Modules/Module10";
// io 流章节
import Module11 from "./Modules/Module11";

const Book01 = (props) => {

    const baseItems = [
        {
            title: 'File类的实例化',
            component: <Module01></Module01>,
        },
        {
            title: 'File类的常用方法',
            component: <Module02></Module02>,
        },
        {
            title: 'IO流的分类和体系结构',
            component: <Module03></Module03>,
        },
        {
            title: 'FileReader 读入数据',
            component: <Module04></Module04>,
        },
        {
            title: 'FileWriter 写出数据',
            // 包括 复制案例 的笔记
            component: <Module05></Module05>,
        },
        {
            title: 'FileInputStream 和 FileOutputStream 读写非文本文件',
            // 包含复制案例
            component: <Module06></Module06>,
        },
        {
            title: '缓冲流', 
            component: <Module07></Module07>,
        },
        {
            title: '转化流 和 InputStreamReader 的使用', 
            component: <Module08></Module08>,
        },
        {
            title: '多种字符编码集的说明', 
            component: <Module09></Module09>,
        },
        {
            title: '标准的输入流、输出流', 
            component: <Module10></Module10>,
        },
        {
            title: '打印流、数据流的使用', 
            component: <Module11></Module11>,
        },
    ]

    let items = turnItems(baseItems)

    return (<>
        <PageWrapper
            title={'IO流 Section-1'}
        >
            <CollapseWrapper
                {...props}
                items={items}
            ></CollapseWrapper>
        </PageWrapper>
    </>)
}

export default Book01