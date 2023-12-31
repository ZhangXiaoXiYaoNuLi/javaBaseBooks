import React, {useEffect, useState, useRef} from "react";

import styles from './styles.less'
import {
    ParagraphWrapper,
    ComSpace,
    ImagesGroup,
    CodeShowWrapper,
    CardWrapper,
    SmallTitle,
    Red,
    Blue,
    ComLine,
    Dot,
    Green,
    Bold,
} from '@/components/index.js'

import img409 from '@/assets/images/img409.png'
import img415 from '@/assets/images/img415.png'
import img416 from '@/assets/images/img416.png'
import img417 from '@/assets/images/img417.png'
import img418 from '@/assets/images/img418.png'
import img419 from '@/assets/images/img419.png'
import img420 from '@/assets/images/img420.png'
import img421 from '@/assets/images/img421.png'
import img422 from '@/assets/images/img422.png'
import img423 from '@/assets/images/img423.png'
import img424 from '@/assets/images/img424.png'
import img425 from '@/assets/images/img425.png'
import img426 from '@/assets/images/img426.png'
import img427 from '@/assets/images/img427.png'
import img428 from '@/assets/images/img428.png'
import img429 from '@/assets/images/img429.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                <Blue>
                    Java 中，使用的是 “<Red>同步机制</Red>” 来解决线程安全问题。做法有两种：“<Red>同步代码块</Red>” 和 “<Red>同步方法</Red>”。分别面向两种多线程实现方式（<Red>继承 Thread</Red> 和 <Red>实现 Runnable</Red>），所以一共有<Red>四种情况</Red>。
                </Blue>
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                <Dot color="black"></Dot><Bold>同步代码块处理实现 Runnable 的线程安全问题</Bold>
            </ParagraphWrapper>
            <ComSpace></ComSpace>

            <ParagraphWrapper>
                同步代码块的解决方式，提到一个关键字“<Red>Synchronized</Red>”，它的使用代码结构如下：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img409]}
            ></ImagesGroup>

            <ParagraphWrapper>
                什么叫“需要被同步的代码”？
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Blue><Red>操作共享数据的代码</Red> 即为 需要被同步的代码。</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                Synchronized 实现同步的原理：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img415]}
            ></ImagesGroup>

            <ParagraphWrapper>
                也就是给几个想要异步同时执行的某一段代码，创造一个只每次只允许执行一个的代码同步执行区域，然后每次有一个同步代码块中的代码进入这个区域执行，就会阻塞其它想要执行的线程。直到正在执行的这段代码执行完毕，才会放开阻塞。
            </ParagraphWrapper>

            <ParagraphWrapper>
                另外，我们要通知 Synchronized ，其中正在执行的代码块是否已经执行完了，也就是 Synchronized 语法结构中的 参数位置 所需要填入的，名字叫“<Red>同步监视器</Red>”。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>同步监视器</Blue>，俗成“<Red>锁</Red>”。很好理解，就像上厕所，你在一个厕所里解决问题，为什么别人进不去？因为你把门锁上了嘛，就像是这样解决了线程安全问题。<Blue>任何一个类的对象，都可以充当“同步监视器”，什么 Object 啊，String 类啊都是可以的</Blue>。
            </ParagraphWrapper>

            <ComSpace></ComSpace>
            <ComSpace></ComSpace>

            <ParagraphWrapper>
                然后我们到代码中尝试一下：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img416]}
            ></ImagesGroup>

            <ParagraphWrapper>
                然后我们来到 main 方法尝试运行下：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img417]}
            ></ImagesGroup>

            <ParagraphWrapper>
                可以观察到，之前“重票”的问题，已经解决了，也就是保证了线程安全问题。
            </ParagraphWrapper>

            <ParagraphWrapper>
                然后我们再来说说这个“<Blue>同步监视器</Blue>”，它其实是有隐藏的要求的，要求就是：“<Red>多个线程要保持线程安全，要用同一个 同步监视器</Red>”。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>
                    而这里，正好我们是<Red>使用 “ 实现 Runnable 接口” 的方式</Red>来进行多线程运行的，所以类里面<Red>作为“锁” new 的那个 Object 对象</Red>，在 main 方法中，只是在 new Window 的时候创建了一次，也就是 “<Red>同一个锁</Red>”。
                </Blue>
            </ParagraphWrapper>

            <ComSpace></ComSpace>
            <ComSpace></ComSpace>

            <ParagraphWrapper>
                当然，使用了这个“同步代码块”，解决了线程安全问题，还有有一些“缺点”的，就是运行变慢了，但是还是不得不这样做的。相当于是把多线程，转成了单线程的执行，也不是说这叫缺点吧，说是“局限性”更合适点。
            </ParagraphWrapper>

            {/* ======================================================================== */}

            <ComLine></ComLine>

            <ParagraphWrapper>
                <Dot color="black"></Dot><Bold>同步代码块处理继承 Thread 的线程安全问题</Bold>
            </ParagraphWrapper>
            <ComSpace></ComSpace>

            <ParagraphWrapper>
                根据上面一节中，我们知道，<Blue>要判断有没有线程安全问题，先找“ 有没有共享数据 ”</Blue>，没有共享数据，不存在线程安全问题，第二步，就是找到“ 操作共享数据 ”的代码块。然后进行处理。
            </ParagraphWrapper>

            <ParagraphWrapper>
                另外，<Red>保证同步锁是同一个对象</Red>非常重要，不然无法保证线程安全。
            </ParagraphWrapper>

            <ParagraphWrapper>
                接下来，我们来看看，“ 用继承 Thread 实现多线程的情况 ”，是怎么解决线程安全问题的。
            </ParagraphWrapper>

            <ParagraphWrapper>
                首先，我们用 继承 Thread 的方式，创建一个 Window 类：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img418]}
            ></ImagesGroup>

            <ParagraphWrapper>
                观察输出
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img419]}
            ></ImagesGroup>
            
            <ParagraphWrapper>
                显然在 main 方法中，多线程执行，存在安全问题。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>
                    下面，我们就使用同步代码块的方式，解决这个线程问题：
                </Blue>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img420]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>其实和，解决 继承 Runnable 实现多线程的线程问题很类似，只是<Red>这里的 new 出来的 线程锁，我们换成了静态的，从而保证是同一个s</Red>。</Blue>
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                此时，我们应该想想，有没有更简单的对象可以使用，而不是每次都要 new 一个。答案是有的，那就是使用“当前对象”，也就是 “this”。<Blue>使用 “this” 作为同步锁，适用于 “实现 Runnable 接口” 的情况。</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                当然，看上面的代码，将 “this” 作为同步锁，并不适用于 “ 继承 Thread 类 ” 的方式。this 指向 三个实例对象。
            </ParagraphWrapper>

            <ParagraphWrapper>
                那 “ 继承 Thread 类 ” 的方式 有什么简便的同步锁写法吗？答案是有的，不过涉及后面才会学到的“反射”。
            </ParagraphWrapper>
            <ParagraphWrapper>
                可以将“<Blue>自己的类名.class</Blue>”，作为同步锁，代码如下：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img421]}
            ></ImagesGroup>

            <ParagraphWrapper>
                其实这里可以来个反推，得到一个结论“<Blue>类也是对象</Blue>”，这个到后面讲到 反射 的时候再详细说。
            </ParagraphWrapper>
            
            <ComSpace></ComSpace>
            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Blue>小总结：</Blue>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Blue>
                    1、在实现 Runnable 接口的情况下，考虑使用 this 当做同步锁。
                </Blue>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Blue>
                    2、在继承 Thread 类的情况下，慎重考虑使用 this 当同步锁，可以考虑用当前类的 class 来当同步锁。
                </Blue>
            </ParagraphWrapper>

            <ComSpace></ComSpace>
            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Blue>
                    切记：
                </Blue>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Blue>1、代码块包住的范围太小，容易没锁住所有有安全问题的代码。</Blue>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Blue>2、代码块包住的范围太大，又没有发挥多线程的作用。</Blue>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Blue>3、范围慎重考虑。</Blue>
            </ParagraphWrapper>


            {/* ======================================================================== */}

            <ComLine></ComLine>

            <ParagraphWrapper>
                <Dot color="black"></Dot><Bold>同步方法处理实现 Runnable 的线程安全问题</Bold>
            </ParagraphWrapper>
            <ComSpace></ComSpace>

            <ParagraphWrapper>
                什么是同步方法？
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>如果操作“共享数据”的代码 恰好 完整地 在一个方法里，我们不妨将此方法声明为同步的。那这个方法，就称为同步方法。</Blue>
            </ParagraphWrapper>

            <ComSpace></ComSpace>
            <ComSpace></ComSpace>

            {/* <ParagraphWrapper>
                <Blue>
                    关于同步方法：
                </Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>
                    1、同步方法仍然涉及到同步监视器，只是不需要我们显式的声明。
                </Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>
                    2、非静态的同步方法，同步监视器是：this 静态的同步方法，同步监视器是：当前类本身
                </Blue>
            </ParagraphWrapper> */}

            <ParagraphWrapper>
                下面上代码：
            </ParagraphWrapper>

            <ParagraphWrapper>
                首先，我们来还原一下代码，还原成之前存在线程安全问题的情况：
            </ParagraphWrapper>
            <ParagraphWrapper>
                还是有一个窗口类，实现 Runnable 接口，静态属性为 票数，然后多线程循环输出卖票
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img422]}
            ></ImagesGroup>

            <ParagraphWrapper>
                然后是在 main 方法中，new 三个 窗口 类，进行多线程执行，可以看到控制台的输出，是有线程安全问题的
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img423]}
            ></ImagesGroup>

            <ParagraphWrapper>
                接下来，我们使用同步方法，解决这个问题：
            </ParagraphWrapper>

            <ParagraphWrapper>
                首先，我们可以观察到，“操作共享数据”的代码块，和之前是不一样的，这里我们是把它提取了出来，独立成了一个 show 方法的
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Bold>之前：</Bold>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img416]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Bold>现在：</Bold>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img424]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>
                    其实同步方法，就是在我们抽出来（之所以要抽出来，就是为了把“操作共享数据”的部分抽成独立的方法体）的方法，加上 Synchronized 修饰符。
                </Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                下面我们来修改一下这个 show 方法
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img425]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Red>这里我们使用的线程锁是“this”，因为这里是“实现Runnable”的做法，所以到时候 this 只指向同一个实例。</Red>
            </ParagraphWrapper>

            <ParagraphWrapper>
                然后可以观察下输出，线程问题已经解决。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Red>
                    但其实上面这种修改，还是使用原来的“同步代码块”，下面我们来看看“同步方法”的方式的修改：
                </Red>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img426]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>
                    这里就有个问题，既然使用“同步代码块”是有“线程锁”的，但是看上面“同步方法”的代码，却没有看到。那么同步方法有没有“锁”呢？
                </Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Red>
                    同步方法，也是有锁的，只是它默认给出了。那么这个 锁 是谁？其实就是 this。
                </Red>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Red>当然，我们就得保证这个 this 是同一个实例对象，所以在不同的对象之间，这个同步方法的做法，并不能解决线程安全问题。</Red>
            </ParagraphWrapper>

            {/* ======================================================================== */}

            <ComLine></ComLine>

            <ParagraphWrapper>
                <Dot color="black"></Dot><Bold>同步方法处理继承 Thread 的线程安全问题</Bold>
            </ParagraphWrapper>

            <ParagraphWrapper>
                还是先来还原下代码，还原成之前使用“继承Thread”的方式，有线程问题的情况
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img427]}
            ></ImagesGroup>

            <ParagraphWrapper>
                下面我们开始改造，首先我们把操作共享数据的代码区块抽取出来，放到一个方法中：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img428]}
            ></ImagesGroup>

            <ParagraphWrapper>然后我们在这个方法前，加上 Synchronized 修饰符，问一下，此时线程就安全了吗</ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>答案是否定的，自己动脑子想想，显然这里会使用 this 作为 线程锁。而因为这是 继承 Thread 的方式，在 main 方法中，我们 new 了多个实例，this 的指向并不是同一个实例。</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                所以此时该怎么办呢？<Red>答案就是，将这个同步方法，写成是静态的。</Red><Blue>那么同步锁就会自动使用“类.class”。</Blue>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img429]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>来个“同步方法”的小总结</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot color="red"></Dot><Red>同步方法，比起同步代码块的区别，本质其实就是“不用显式地写 线程锁”。而是使用默认的 线程锁。</Red>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot color="red"></Dot><Red>同步方法，如果是静态的方法，那么使用的默认 线程锁，就是“类.class”。如果是非静态的方法，那么就默认使用 “this” 作为 线程锁。</Red>
            </ParagraphWrapper>

        </div>
    </>)
}

export default Module