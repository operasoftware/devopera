---
title: CSS will-change 프로퍼티에 관해 알아둬야 할 것
authors:
- sara-soueidan
tags:
- css
- javascript
language: ko
translator: POSTD
source: http://postd.cc/css-will-change-property/
license: cc-by-3.0
---

## 시작하면서

If you’ve ever noticed “that flicker” in WebKit-based browsers while performing certain CSS operations, especially CSS transforms and animations, then you’ve most likely come across the term “hardware acceleration” before.

웹킷 계열 브라우저에서 CSS transform이나 animation 같은 프로퍼티를 사용할 때 발생하는 깜빡이는 현상에 관해 알고 있는 사람은 "하드웨어 가속"이라는 용어를 한번쯤 들어본 적이 있을 것이다.

## CPU, GPU, 하드웨어 가속

In a nutshell, *Hardware Acceleration* means that the **Graphics Processing Unit** (GPU) will assist your browser in rendering a page by doing some of the heavy lifting, instead of throwing it all onto the **Central Processing Unit** (CPU) to do. When a CSS operation is hardware-accelerated, it usually gets a speed boost as the page rendering gets faster.

하드웨어 가속은 그래픽 처리 장치(GPU)를 이용하여 중앙 처리 장치(CPU)의 처리량을 줄이고, 브라우저의 렌더링을 효율화하는 것을 말한다. CSS 작업에 하드웨어 가속을 활성화하면, 작업 처리가 빨라져서 웹페이지의 렌더링을 보다 빠르게 할 수 있다.

As their names show, both the CPU and the GPU are processing units. The CPU is located on the computer’s motherboard; it processes almost everything and is known as the brain of the computer. The GPU is located on the graphics card of the computer, and is responsible for processing and rendering graphics. Moreover, a GPU is designed specifically for performing the complex mathematical and geometric calculations that are necessary for graphics rendering. Hence, offloading operations onto the GPU can yield massive performance gains and can also reduce CPU contention on mobile devices.

이름을 보면 알 수 있듯이 CPU와 GPU는 모두 처리 장치다. CPU는 컴퓨터의 메인보드에 장착돼 있는 부품으로 거의 모든 연산 처리를 담당하는 이른바 컴퓨터의 두뇌다. 한편 GPU는 그래픽 카드에 탑재돼 있는 부품으로 이미지나 영상 등 그래픽 처리 등을 담당한다. 거기에 그래픽 표현에 필요한 복잡한 기하학적 연산 처리도 담당한다. 이러한 GPU에 처리를 분담하면 컴퓨터의 성능을 최대한으로 끌어올릴 수 있고, 모바일 디바이스에서 주로 발생하는 CPU의 부하를 줄일 수 있다.

Hardware acceleration (a.k.a. GPU acceleration) relies on a *layering model* used by the browser as it renders a page. When certain operations (such as 3D transforms) are performed on an element on a page, that element is moved to its own “layer”, where it can render independently from the rest of the page and be *composited in* (drawn onto the screen) later. This isolates the rendering of the content so that the rest of the page doesn’t have to be rerendered if the element’s transform is the only thing that changes between frames, and often provides significant speed benefits. It is worth mentioning here that only 3D transforms qualify for their own layer; 2D transforms don’t.

하드웨어 가속(또는 GPU 가속)으로 페이지를 출력할 경우 레이어라고 하는 개념을 이용한다. 페이지에 있는 엘리먼트에 어떠한 지시(예를 들어 3D transforms)를 내리면 그 엘리먼트는 자신의 "레이어"에 분류되고 페이지에 있는 다른 엘리먼트와 독립되어 렌더링 된다. 그 뒤, 페이지 내에 다시 합쳐진다(즉, 화면 위에서 그려진다). 특정 엘리먼트의 변환 처리가 유일한 변경 사항인 경우 그 이외의 엘리먼트까지 렌더링 될 필요가 없는데 하드웨어 가속을 이용하면 대상이 되는 엘리먼트만 가져와 보다 빠르게 렌더링 처리를 할 수 있게된다. 하지만 이 방법은 3D transforms에만 적용되는 것으로 2D transforms는 해당하지 않는다.

CSS animations, transforms and transitions are not automatically GPU accelerated, and instead execute from the browser’s slower software rendering engine. However, some browsers provide [hardware acceleration by means of certain properties](http://www.html5rocks.com/en/tutorials/speed/high-performance-animations/) to provide better rendering performance. For example, the `opacity` property is one of the few CSS properties that can be properly accelerated because the GPU can manipulate it easily. Basically, any layer where you want to fade the opacity over a CSS transition or animation, the browser is actually smart enough to throw it onto the GPU and do the manipulation over there and it’s going to be very fast. Of all CSS things, opacity is one of the most performant and you’re not going to have problems using it. Other common hardware-accelerated operations are CSS 3D transforms.

CSS animation, transform, transition 속성에 자동으로 GPU 가속이 활성화 되지 않는다. 게다가 이 속성을 실행하는 브라우저의 렌더링 엔진은 다소 동작이 느리다. 하지만 일부 브라우저에는 [렌더링 처리 능력을 향상시킬 수 있는 몇가지 속성](http://www.html5rocks.com/ko/tutorials/speed/high-performance-animations/)이 구현돼 있으며 이를 이용해 하드웨어 가속을 활성화 할 수 있다. 예를 들면 opacity 속성이 있다. 이 속성은 GPU에 의해 효율적으로 처리되기 때문에 고속으로 처리될 수 있는 몇 안되는 속성 중 하나다. CSS transition이나 animation에서 투명도를 변경하려는 레이어가 있는 경우 브라우저는 그 엘리먼트의 처리를 GPU에게 담당하도록 넘긴다. 따라서 렌더링이 정말 빠르게 처리된다. CSS 속성 중에서 opacity는 아주 유용한 도구이며 이 속성을 사용하는데 큰 문제는 없을 것이다. CSS 3D transform도 하드웨어 가속을 위한 속성으로 자주 사용된다.

## 예전 방법 : translateZ(또는 translate3d) CSS 핵

For quite some time now, we’ve been using what has been known as the `translateZ()` (or `translate3d()`) hack (sometimes also called the null transform hack) to **trick the browser** into pushing our animations and transforms into hardware acceleration. We’ve been doing that by adding a simple 3D transformation to an element that will *not* be transforming in three-dimensional space. For example, an element that’s animated in two-dimensional space can be hardware-accelerated by adding this simple rule to it:

오랜시간동안 우리들은 하드웨어 가속을 활성화하는 방법으로 **브라우저를 속여** 강제로 animation이나 transform의 시키는 방법을 이용했다. 이 방법은 translateZ(또는 translate3d)라고 부르는 CSS 핵(때때로 null transforms 핵이라 불리는)을 이용하여, 3차원적 변형이 필요하지 않은 엘리먼트에 단순히 3D 변형을 지시를 하여 렌더링 처리를 고속화한다. 예를 들어 2차원 공간에서 애니메이션되는 엘리먼트에 아래와 같은 단순한 CSS 코드를 작성함으로써 하드웨어 가속을 활성화할 수 있다.

	transform: translate3d(0, 0, 0);

Hardware-accelerating an operation results in the creation of what is known as a compositor layer that is uploaded to and composited by the GPU. However, force-hacking layer creation may not always be the solution to certain performance bottlenecks on a page. Layer creation techniques can boost page speed, but they come with a cost: they take up memory in system RAM and on the GPU (particularly limited on mobile devices) and having lots of them can have a bad impact (especially on mobile devices), so they must be used wisely and you need to make sure that hardware-accelerating your operation will really help the performance of your page, and that a performance bottleneck is not being caused by another operation on your page.

이러한 방법으로 하드웨어 가속을 행하면 합성 레이어라는 것이 생성된다. 이것은 GPU 위에 올려져 GPU에 의해 합성되는 레이어다. 하지만 CSS 핵을 이용해 생성한 레이어는 성능 병목을 해소하는데 항상 도움이 되지는 않는다. 합성 레이어를 생성하는 것은 페이지 출력 속도를 빠르게 할지는 모르겠지만 그만한 비용이든다. RAM이나 GPU의 메모리 사용량이 커지며 레이어를 많이 생성하면 할수록 그만큼 악영향을 끼치고, 특히 모바일 기기에서 이 점은 더 두드러지게 나타난다. 따라서 핵을 사용할때는 신중하게 다뤄야한다. 하드웨어 가속의 실행에 의해 정말 페이지의 출력이 빨라지는지 그리고 이로 인한 또다른 성능 병목이 발생하지 않는지를 확인한 상태에서 테크닉을 사용해야만 한다.

In order to avoid layer-creation hacks, a new CSS property has been introduced, that allows us to inform the browser ahead of time of what kinds of changes we are likely to make to an element, thus allowing it to optimize how it handles the element ahead of time, performing potentially-expensive work preparing for an operation such as an animation, for example, before the animation actually begins. This property is the new `will-change` property.

레이어 생성을 증가시키는 CSS 핵을 대체할 수 있는 새로운 CSS 속성이 등장했다. 이 속성은 엘리먼트의 변경이 시작하기 전에 그것이 어떤 변경인지를 브라우저에 알리는 효과가 있어서, 브라우저가 특정 엘리먼트에 조작을 가하기 전에 최적화할 수 있게 된다. 예를 들어 애니메이션처럼 비용이 필요한 처리가 실제로 시작되기 전에 브라우저가 준비할 수 있다는 뜻이다. 이 속성이 바로 `will-change`다.

## 새로운 방법 : 끝내주는 will-change

The `will-change` property allows you to inform the browser ahead of time of what kinds of changes you are likely to make to an element, so that it can set up the appropriate optimizations before they’re needed, therefore avoiding a non-trivial start-up cost which can have a negative effect on the responsiveness of a page. The elements can be changed and rendered faster, and the page will be able to update snappily, resulting in a smoother experience.

엘리먼트에 어떠한 변경을 할 것인지를 미리 브라우저에 알려주는 것이 `will-change` 속성의 역할이다. 이것을 사용하면 그 변경이 시작되기 전에 적절히 최적화할 수 있다. 즉, 페이지 출력에 악영향을 줄 수 있는 처리 비용을 줄일 수 있다는 것이다. 그로인해 효율적으로 엘리먼트의 변경 또는 렌더링을 처리할 수 있고 페이지는 순식간에 갱신돼 부드러운 화면 처리가 가능하게 된다.

For example, when using CSS 3D Transforms on an element, the element and its contents might be promoted to a layer, as we mentioned earlier, before they are composited in (drawn onto the screen) later. However, setting up the element in a fresh layer is a relatively expensive operation, which can delay the start of a transform animation by a noticeable fraction of a second, causing that noticeable “flicker”.

CSS 3D Transforms를 예로 들어보겠다. 「CPU, GPU, 하드웨어 가속」절에서 말했듯이 이 속성을 어느 특정 엘리먼트에 사용하면 그 엘리먼트와 컨텐츠는 레이어로 관리되고 나중에 다시 합쳐진다. 새로운 레이어로 엘리먼트를 분리하는 것은 비교적 비용이 필요한 작업이다. 따라서 애니메이션에 몇 분의 1초 단위의 눈에 띄는 지연 현상이 발생한다. 이것이 화면에서 깜빡이는 현상으로 이어지는 것이다.

In order to avoid this delay, you can inform the browser about the changes some time *before* they actually happen. That way, it will have some time to prepare for these changes, so that when these changes occur, the element’s layer will be ready and the transform animation can be performed and then the element can be rendered and the page updated in quickly.

이 지연 현상을 회피하려면 엘리먼트의 변경이 실제로 발생하기 전에 그 변경에 관해 브라우저에 알려주면 된다. 그러면 브라우저는 여유를 가지고 그 변경에 대비할 수 있게된다. 변경이 실제로 일어나게 되면 엘리먼트의 레이어가 준비되고 애니메이션 및 엘리먼트의 렌더링은 적절히 처리되며 페이지는 신속히 갱신된다.

Using `will-change`, hinting to the browser about an upcoming transformation can be as simple as adding this rule to the element that you’re expecting to be transformed:

`will-change` 속성을 사용해 앞으로 일어날 변경에 관해 브라우저에게 알려주고자 할때는 대상이 되는 엘리먼트에 아래와 같이 CSS 코드를 작성하면 된다.

	will-change: transform;

You can also declare to the browser your intention to change an element’s scroll position (the element’s position in the visible scroll window and how much of it is visible within that window), its contents, or one or more of its CSS property values by specifying the name of the properties you’re expecting to change. If you expect or plan to change multiple values/aspects of an element, you can provide a list of comma-separated values. For example, if you’re expecting the element to be animated and moved (its position changed), you can declare that to the browser like so:

변형 처리 외에도 스크롤 위치(표시되고 있는 윈도우 내의 엘리먼트 위치, 화면 내에 엘리먼트가 얼마나 보이고 있는지), 컨텐츠 등 기타 복수의 CSS 속성을 변경할 때에는 그 대상이 되는 속성 이름을 지정하여 브라우저에 변경 의사를 전달할 수 있다. 1개의 엘리먼트에 여러개의 값을 변경할 생각이라면 콤마(,)로 구분하여 기술할 수 있다. 예를들어 한 엘리먼트를 애니메이션 시키는 동시에 위치를 변경하고자하는 경우는 다음과 같이 선언하면 된다.

	will-change: transform, opacity;

Specifying what exactly you want to change allows the browser to make better decisions about the optimizations that it needs to make for these particular changes. This is obviously a better way to achieve a speed boost without resorting to hacks and forcing the browser into layer creations that may or may not be necessary or useful.

무엇을 변경하고 싶은지를 정확하게 기술하면 그 변경에 대비한 최적화를 브라우저가 시행한다. 핵을 사용해 불필요한 비용을 발생시키는 레이어를 브라우저에게 억지로 생성시키는 방법보다 이 방법이 명확히 고속화에 도움이된다.

### will-change는 엘리먼트의 변경을 브라우저에 알려주는 이외에 엘리먼트 자체에 영향을 끼치는가?

The answer is yes and no—it depends on the properties that you’re specifying and informing the browser about. If any non-initial value of a property would create a [stacking](http://reference.sitepoint.com/css/stacking) [context](http://www.w3.org/TR/CSS2/zindex.html) on the element, specifying that property in `will-change` will create a stacking context on the element.

이 질문에 관해서는 "그럴 수도 있고 아닐 수도 있다."라는 답변을 줄 수 있다. 변경할 때 사용하는 속성의 종류에 따라 상황이 달라진다. 엘리먼트에 [스택 컨텍스트](http://reference.sitepoint.com/css/stacking)([참고](https://www.w3.org/TR/CSS2/zindex.html))를 생성하는 초기화하지 않은 속성이 있다면 그것을 `will-change`에 지정하는 것으로 엘리먼트에 스택 컨텍스트가 생성될 수 있다.

For example, the `clip-path` property and the `opacity` property both lead to the creation of a stacking context on the element they are applied to, when they are used with values other than their initial values. Hence, using one of (or both of) these properties as values for `will-change` will create a stacking context on the element, **even before the change actually happens**. The same applies to other properties that would create a stacking context on an element.

예를 들어 clip-path와 opacity 속성은 모두 기본 값 이외의 값을 지정할 때 대상이 되는 엘리먼트에 스택 컨텍스트를 생성한다. 즉, will-change의 값으로 두 속성(혹은 모두)을 지정하면 엘리먼트에 관한 **실제 변경이 발생하기 전**(즉, opacity 기본 값을 변경하기 전)에 그 엘리먼트에 스택 컨텍스트가 만들어지는 것이다. 이와 같은 원리는 엘리먼트에 스택 컨텍스트를 생성하는 또다른 속성 역시 동일하게 적용된다.

Also, some properties can lead to the creation of a **containing block** for fixed-position elements. For example, a [transformed element creates a containing block for all its positioned descendants](http://meyerweb.com/eric/thoughts/2011/09/12/un-fixing-fixed-elements-with-css-transforms/), even those that have been set to `position: fixed`. So, if a property leads to the creation of a containing block, then specifying it as a value for `will-change` will also lead to the generation of a containing block for fixed-position elements.

또, 일부 속성은 위치가 고정된 엘리먼트(fixed-position elements)에서 **컨테이닝 블럭(containing block)** 생성을 일으킨다. 예를 들면 [transform을 적용한 엘리먼트는 위치가 고정(position: fixed)돼 있더라도 모든 자식 엘리먼트에 대해 컨테이닝 블럭을 생성](http://meyerweb.com/eric/thoughts/2011/09/12/un-fixing-fixed-elements-with-css-transforms/)한다. 즉, 컨테이닝 블럭의 생성을 발생시키는 속성을 will-change의 값으로 지정한 경우 위치가 고정된 엘리먼트에 컨테이닝 블럭이 만들어진다는 뜻이된다.

Other than that, the `will-change` property has no direct effect on the element it is applied to—it is merely a rendering hint to the browser allowing it to set up optimizations for the changes that will occur to that element. It has no direct effect on an element beyond the creation of stacking contexts and containing blocks in the situations mentioned above.

앞서 설명한 스택 컨텍스트와 컨테이닝 블럭, 두 가지 예외를 제외하면 `will-change` 속성은 대상 엘리먼트에 직접적인 영향을 끼치지 않는다. `will-change`는 브라우저에 앞으로 일어난 변화를 알려줘 최적화를 실시할 뿐이다.

## will-change 사용법："할 것"과 "하지 말아야할 것"

Knowing what `will-change` does, it can be very tempting to think: “Just have the browser optimize EVERYTHING!”. I mean it makes sense, right? Who wouldn’t want all of their changes to be optimized for and ready to roll on demand?

`will-change`의 역할을 이해하고 나면 "브라우저에 모든 것을 최적화하면 좋지 않을까"라고 생각할 수도 있을 것이다. 누구라도 모든 변경에 관한 최적화가 한번에 됐으면 좋겠다고 생각할 수 있다.

As powerful and great as `will-change` is, it’s not any different from any other kind of power, so, as with other sources of power, there comes responsibility. `will-change` should be used wisely, otherwise it will end up resulting in performance hits that could actually crash your page.

확실히 `will-change`는 파워풀하고 훌륭한 도구지만, 또다른 훌륭한 도구들과 마찬가지로 위력이 있는 만큼 책임을 가지고 다뤄야한다. `will-change`는 무분별하게 사용하면 성능저하가 발생하고 결과적으로 페이지의 작동이 중단될 것이다.

As with any performance hints, `will-change` has its side effects that aren’t directly detectable (after all, it is just a way to talk to the browser behind the scenes), so it may be tricky to use. Here are some things to keep in mind when you use this property, to make sure you get the best out of it while avoiding the harm that can come from misusing it.

`will-change`는 성능저하뿐 아니라 바로 감지하기 어려운 사이드 이펙트(원래 will-change는 보이지 않는 곳에서 브라우저에 명령하는 방법이므로 감지하지 못하는 건 당연하다)를 발생시키기 때문에 사용하기 까다로운 속성이다. 이 속성을 사용해 최대한 효과를 발휘하고 발생할 수 있는 문제를 피하기 위해서는 아래 몇 가지 규칙을 이해해야한다.

### 너무 많은 속성이나 엘리먼트에 `will-change`를 사용하지 않는다

As I mentioned earlier, it might be very tempting to just tell the browser to optimize for changes that may occur to *all* properties on *all* elements; so adding the following rule to our style sheet might make some sense at first:

이전 절에서도 말했듯이 모든 속성, 모든 엘리먼트에 대해 일어날 변경을 전부 브라우저에 최적화 처리를 하려한다면 CSS로 다음과 같이 작성할 수 있다. 언뜻 보기엔 그렇게 틀려보이지 않을 수 있다.

	*,
	*::before,
	*::after {
		will-change: all;
	}

As good as this looks (I know it looked good and made sense to me at first), this is in fact very harmful, and more so invalid. Not only is the all keyword an invalid value for `will-change` (we’ll cover the list of valid and invalid values later in the article), but such a blanket rule wouldn’t be useful. You see, the browser **does already try to optimize for everything** as much as it can (remember `opacity` and 3D transforms?), so explicitly telling it to do that doesn’t really change anything or help in any way. As a matter of fact, doing this has the capacity to do a lot of harm, because some of the stronger optimizations that are likely to be tied to `will-change` end up using a lot of a machine’s resources, and when overused like this can cause the page to slow down or even crash.

이 코드는 동작할 것으로 보이지만(나도 처음엔 이치에 맞고, 잘 될 것 같다고 생각했음) 실제론 상당히 해롭고 무엇보다 전혀 효과가 없다. 모든 키워드가 `will-change` 대해 무효한 값이 될 뿐 아니라(유효한 값과 무효한 값은 뒤에서 소개하겠다) 위 코드와 같이 모든것에 적용되도록 하는 규칙(룰)은 유용하지 않다. 이유는 **브라우저는 이미 가능한한 최적화를 시행하고 있으므로**(opacity나 3D transform의 예를 기억해보자) 최적화를 명확히 지시하더라도 아무것도 바뀌지 않고 결국 아무 것도 행하지 않기 때문이다. 사실, 이 설정을 하므로써 더 많은 폐단이 생길 수 있다. 왜냐하면 `will-change`에 연결된 강력한 최적화가 머신의 자원을 대량으로 소비하는 결과를 낳고, 결국 페이지의 속도 지연이나 때때로 크래쉬까지 일으키는 원인이 되기 때문이다.

In other words, putting the browser on guard for changes that may or may not occur is a bad idea, and will do more harm that good. **Don’t do it.**

즉, 일어날지 일어나지 않을지 모르는 변경에 대비해 브라우저를 최적화 시키는 것은 현명하지 못하고 효과가 없을 뿐더러 문제를 발생시키니 **하지 말자**.

### 브라우저에 충분한 시간을 준다

The `will-change` property is named like that for an obvious reason: informing the browser about changes that **will** occur, not changes that **are** occuring. Using `will-change`, we’re asking the browser to make certain optimizations for the changes we’re declaring, and in order for that to happen, the browser needs some time to actually make these optimizations, so that when the changes occur, the optimizations can be applied without any delays.

`will-change` 속성의 명칭의 유래에는 명확한 이유가 있다. `will-change`가 브라우저에게 알려주는 것은 **현재 일어날** 변화가 아닌 **미래에 일어날** 변화다. `will-change`를 사용하여 브라우저에게 앞으로 일어날 변경에 관해 최적화를 시키는 것이기 때문에 이를 위해 브라우저도 최적화를 위한 시간이 필요하다. 이는 실제로 변화가 생길 때 지연 없이 최적화를 적용할 수 있도록 하기 위함이다.

Setting `will-change` on an element immediately before it changes has little to no effect. (It might actually be worse than not setting it at all. You could incur the cost of a new layer when what you’re animating wouldn’t have previously qualified for a new layer!) For example, if a change is going to happen on hover, then this:

변화가 생길 직전에 엘리먼트에 관해 `will-change`를 설정해도 거의 효과는 없다(오히려 더 나쁠지도 모른다. 이전 절의 예는 애니메이션이 필요하지 않는 엘리먼트까지 새로운 층을 만들 가능성이 있었다). 예를들어 호버로 변경이 생기는 경우를 살펴보자.

	.element:hover {
		will-change: transform;
		transition: transform 2s;
		transform: rotate(30deg) scale(1.5);
	}

…tells the browser to make optimizations for a change that is already taking place, and that’s useless and kind of negates the whole concept behind `will-change`. Instead, you should find a way to to predict at least slightly ahead of time that something will change, and set `will-change` *then*.

위의 코드가 브라우저에 알려주고 있는 것은 이미 일어난 변화에 관한 최적화다. 효과가 없을 뿐 아니라 `will-change`의 포괄적인 개념을 부정하는 것이다. 더 나은 방법은 적어도 변화가 생길 아주 조금 전에 그 변화를 알려줄 방법을 생각해 `will-change`를 설정하는 것이다.

For example, if an element will change when it is clicked, then setting up `will-change` when that element is hovered gives the browser enough time to optimize for that change. The time between hovering the element and actually clicking it by the user is enough for the browser to set up the optimizations, because human reaction time is relatively slow, so this will give the browser around 200ms time window before the change actually happens, and this is enough for it to set up the optimizations.

예를 들어 엘리먼트를 클릭한는 순간 변화한다면 마우스 커서를 올릴 때(hover) `will-change`를 설정하면 브라우저가 변경에 관해 최적화하는 시간을 벌 수 있다. 사용자가 엘리먼트에 마우스 커서를 올린 후 실제 클릭할 때까지의 시간 차는 브라우저가 충분히 최적화를 실시할 수 있는 시간이기 때문이다. 인간의 반응은 비교적 시간이 걸리기 때문에 실제 변경이 생기기 전 까지 약 200밀리세컨드의 시간이 브라우저에게 주어진다. 브라우저가 최적화를 하는데는 그만큼 시간이면 충분하다.

	.element {
		/* style rules */
		transition: transform 1s ease-out;
	}
	.element:hover {
		will-change: transform;
	}
	.element:active {
		transform: rotateY(180deg);
	}

But what if you expect the change to happen **on hover**, not on click? The above declaration will be useless as we mentioned. In this case, it is often still possible to find *some* way to predict the action before it occurs. For example, hovering an ancestor of the changing element may give enough lead time:

그러면, 선택이 아니라 마우스 커서를 엘리먼트에 올렸을 때 변경이 필요한 경우는 어떻게 처리할까? 아까도 말했듯이 처음 선언한 코드는 소용이 없다. 그러나 이 경우에도 변경이 발생하기 전에 예측할 수 있는 방법을 찾아낼 수 있다. 예를 들어, 변경하는 엘리먼트의 조상에 :hover로 `will-change`를 선언하면 최적화에 필요한 시간을 벌 수 있다.

	.element {
		transition: opacity .3s linear;
	}
	/* declare changes on the element when the mouse enters / hovers its ancestor */
	/* 마우스 커서가 조상 엘리먼트에 오는 경우에 변경사항에 대해 선언한다 */
	.ancestor:hover .element {
		will-change: opacity;
	}
	/* apply change when element is hovered */
	/* 엘리먼트에 마우스 커서가 오는 경우의 변경 사항을 적용한다 */
	.element:hover {
		opacity: .5;
	}

However, hovering the ancestor does not always indicate that the element will be interacted with for sure, so you could do something like set `will-change` when a view becomes active in your application, or if the element is within the visible part of the viewport, which increases the chances of the element being interacted with.

하지만, 조상 엘리먼트에 마우스 커서를 둔다고 해서 대상의 엘리먼트에 반드시 상호 작용이 발생한다고 할 수는 없다. 그러므로 애플리케이션에서 뷰가 활성화 될 때나 엘리먼트가 뷰포트에 보이는 위치에 있을 때 `will-change`를 설정하면 엘리먼트가 상호 작용할 가능성을 높일 수 있다.

### 변경이 종료되면 will-change를 삭제한다

The optimizations that the browser makes for changes that are about to occur are usually costly and, as we mentioned earlier, can take up much of the machine’s resources. The usual browser behavior for optimizations that it makes is to remove these optimizations and revert back to normal behavior as soon as it can. However, `will-change` **overrides this behavior** maintaining the optimizations for much longer than the browser would otherwise do.

브라우저가 앞으로 발생할 변화에 관해 최적화를 하면 일반적으로 비용이 든다. 「너무 많은 속성이나 엘리먼트에 `will-change`를 사용하지 않는다」 절에서 잠깐 이야기했듯이 머신의 자원을 대량으로 소비하는 일이 있기 때문이다. 브라우저는 보통, 적용한 최적화를 삭제하고 가능한한 빨리 평소의 행동(nomal behavior)으로 돌아온다. 하지만 `will-change`는 이 행위를 무시하고 본래 브라우저가 하는 것보다 훨씬 길게 최적화를 유지해버린다.

As such, you should always remember to *remove* `will-change` after the element is done changing, so the browser can recover whatever resources the optimizations are claiming.

그러니, 엘리먼트에 변경이 종료되면 반드시 `will-change`를 삭제하도록 하자. 그렇게하면 브라우저는 최적화때문에 사용하고 있던 자원을 회수할 수 있다.

It’s not possible to remove `will-change` if it is declared in the style sheet, which is why it is almost always recommended that you set and unset it using JavaScript. By scripting, you can declare your changes to the browser, and then remove `will-change` after the changes are done, by listening to when these changes have finished. For example, just like we did in the style rules in the previous section, you could listen for when the element (or its ancestor) is hovered, and then set `will-change` on `mouseenter`. If your element is being animated, you can listen for when the animation has ended using the DOM event `animationEnd`, and then remove `will-change` once `animationEnd` is fired.

스타일시트에 선언한 `will-change`는 삭제할 수 없다. 따라서 대부분 자바스크립트를 사용해 설정 및 삭제하는 것을 권장한다. 스크립트에서 브라우저에 변경을 선언하고 그 변경이 종료될 때 즈음에 이벤트를 등록하면 변경이 종료된 후 `will-change`를 삭제할 수 있다. 예를 들어 앞 절에서 소개한 스타일 규칙과 동일하게 엘리먼트(또는 그 조상)에 `mouseenter` 이벤트를 이용해 마우스가 호버될 때를 리슨하여 `will-change`를 설정할 수 있다. 엘리먼트에 애니메이션을 적용하는 경우에는 DOM 이벤트의 animationEnd 이벤트를 사용해 애니메이션이 종료하여 animationEnd가 발생하면 will-change를 삭제한다.

	// Rough generic example
	// Get the element that is going to be animated on click, for example
	var el = document.getElementById('element');

	// Set will-change when the element is hovered
	el.addEventListener('mouseenter', hintBrowser);
	el.addEventListener('animationEnd', removeHint);

	function hintBrowser() {
		// The optimizable properties that are going to change
		// in the animation's keyframes block
		this.style.willChange = 'transform, opacity';
	}

	function removeHint() {
		this.style.willChange = 'auto';
	}

Craig Buckler has written [an article](http://www.sitepoint.com/css3-animation-javascript-event-handlers/) about capturing CSS animation events in JavaScript that you should check out if you’re not familiar with this. There’s also an article about [controlling CSS animations and transitions](http://css-tricks.com/controlling-css-animations-transitions-javascript/) on CSS-Tricks that’s also worth checking out.

크레이그 버클러(Craig Buckler)가 자바스크립트로 CSS의 애니메이션을 캡쳐하는 방법에 관해 글([How to Capture CSS3 Animation Events in JavaScript](http://www.sitepoint.com/css3-animation-javascript-event-handlers/))을 작성했다. 스크립트를 이용한 조작 방식에 익숙치 않은 분은 참고하길 바란다. 또 CSS-TRICKS의 CSS animtaion과 transition을 조작하는 방법에 관한 글([Controlling CSS Animations and Transitions with JavaScript](http://css-tricks.com/controlling-css-animations-transitions-javascript/))도 참고가 될 것이다.

### 스타일시트에서는 will-change를 소극적으로 사용한다

As we’ve seen in the previous section, `will-change` can be used to hint the browser about changes that are just about to occur to an element within a few milliseconds. This is one of the use cases where declaring `will-change` in a style sheet is okay. Although it’s recommended to set and unset `will-change` using JavaScript, there are some situations where setting it in the style sheet (and keeping it) is appropriate.

전 절에서 살펴본 것 처럼 `will-change`는 엘리먼트에 변경이 생기기 몇 밀리세컨트 전에 브라우저에게 그 일을 알리고자 할 때 사용할 수 있다. 이번 절에서는 스타일시트에서 `will-change`를 선언하는 좋은 사례를 소개한다. `will-change`의 설정 및 삭제엔 자바스크립트를 이용하는 것을 추천하지만 몇몇은 `will-change`를 스타일시트에서 설정(또는 유지)하는게 적절한 경우도 있다.

One example is setting `will-change` on a small number of elements that are likely to be interacted with by the user over and over again, and that should respond to the user’s interaction in a snappy manner. The limited number of elements means that the optimizations made by the browser won’t be overused and therefore won’t hurt as much. For example, transforming a sidebar by sliding it out when the user requests it. The following rule would be appropriate:

하나의 예로 사용자가 지속해서 상호 작용하는 것이 전제되고 빠른 응답을 요구하는 소수의 엘리먼트에 `will-change`를 설정하는 경우를 들 수 있다. 한정된 엘리먼트에 설정한다면 너무 과한 최적화로 연결되지 않아 그에 따른 폐해도 적다. 예를 들어 유저의 요청에 따라 사이드바를 슬라이드하는 경우라면 아래 규칙이 적절할 수 있다.

	.sidebar {
		will-change: transform;
	}

Another example is using `will-change` on an element that changes nearly constantly, like an element that responds to the user’s mouse movement and is moved around the screen as the mouse moves. In this case, just declaring the will-change value in the stylesheet is fine, as it accurately describes that the element will regularly/constantly change, and so should be kept optimized.

또다른 예로 거의 항상 변경되는 엘리먼트에 관해 `will-change`를 이용하는 경우를 들 수 있다. 예를 들면, 유저의 마우스 이벤트에 반응해 마우스의 움직에 맞춰 엘리먼트를 이동시키는 경우가 있다고 하자. 이 경우엔 스타일시트로 `will-change`를 선언해도 문제 없다. 왜냐하면 엘리먼트가 항상 혹은 정기적으로 변화하기 때문에 최적화도 유지될 필요성이 있기 때문이다.

	.annoying-element-stuck-to-the-mouse-cursor {
		will-change: left, top;
	}

### will-change 속성의 값

The `will-change` property takes one of four possible values: `auto`, `scroll-position`, `contents`, and `<custom-ident>`.

`will-change` 속성은 4개의 설정 가능한 값(auto, scroll-position, contents, <custrom-ident>)을 제공한다.

The `<custom-ident>` value is used to specify the name(s) of one or more properties that you expect to change. Multiple properties are comma-separated. The following are examples of valid `will-change` declarations with specified property names:

`<custom-ident>`의 값으로는 변경하고 싶은 1개 이상의 속성 이름을 지정한다. 여러 개의 속성을 작성하는 경우에는 쉼표(,)로 구분한다. 아래 코드는 속성 이름으로 지정한 유효한 `will-change` 선언이다.

	will-change: transform;
	will-change: opacity;
	will-change: top, left, bottom, right;

The `<custom-ident>` value excludes the keywords `will-change`, `none`, `all`, `auto`, `scroll-position`, and `contents`, in addition to the keywords normally excluded from [`<custom-ident>`](http://dev.w3.org/csswg/css-values-3/#identifier-value). So, as we mentioned in the beginning of the article, the `will-change: all` declaration is invalid and will thus be ignored by the browser.

`<custrom-ident>`의 값은 보통 `<custom-ident>`에서 제외되는 키워드와 함께 will-change, none, all, auto, scroll-position, contents의 키워드도 제외된다([identifier-value](http://dev.w3.org/csswg/css-values-3/#identifier-value)). 이 글의 처음에도 언급했듯이 `will-change: all`은 무효이기 때문에 브라우저가 무시한다.

The value `auto` indicates no particular intent, meaning that the browser will not set up any special optimizations other than the ones it normally does.

auto라는 값은 특별한 변경 의지를 보이지 않기 때문에 브라우저는 평소에 하는 최적화 이외에 또 다른 최적화를 실시하지 않는다.

The `scroll-position` value indicates, as the name suggests, that you expect to change an element’s scroll position any time in the near future. This value is useful because, when used, the browser will prepare for and render content beyond that which is visible in the scroll window on a scrollable element. Browsers often only render the content *in* the scroll window, and some of the content past that window, balancing memory and time savings from the skipped rendering against making scrolling look nice. Using `will-change: scroll-position`, it can make further rendering optimizations so that longer and/or faster content scrolls can be done smoothly.

scroll-position 값은, 이름 그대로 후에 엘리먼트의 스크롤 위치를 변경할 것을 나타낸다. 이 값을 설정하면 브라우저는 스크롤 가능한 엘리먼트를 포함해 윈도우에 보이는 컨텐츠를 위해 미리 최적화하여 준비한 후 렌더링하기 때문에 유용하다. 브라우저는 스크롤 윈도우에 보이는 컨텐츠만을 렌더링하는 경우가 많지만, 그 중에는 윈도우에서 벗어난 컨텐츠도 있다. 렌더링을 생략하는 것으로 메모리 및 시간 절약과 미려한 스크롤링 그리고 밸런스를 맞춘다. will-change: scroll-position을 사용하면 한층 더 렌더링의 최적화가 이뤄지기 때문에, 한번에 많은 양을 스크롤 하거나 빠른 스크롤이 필요한 경우에도 매끄러운 화면을 선보일 수 있다.

The `contents` value indicates that the element’s content is expected to change. Browsers usually “cache” rendering of elements over time, because most things don’t change very often, or only change their position. This value will be read by the browser as a signal to do less caching on the element, or avoid caching on the element altogether, because if the element’s content is regularly changing, then keeping a cache of the content will be useless and a waste of time, so the browser will just stop caching and continue rendering the element from scratch whenever its content changes.

contents의 값은, 엘리먼트의 컨텐츠의 변화를 나타낸다. 브라우저는 보통 엘리먼트의 렌더링 결과를 오랫동안 캐쉬한다. 왜냐하면 대부분의 엘리먼트는 변화가 잦지 않으며, 변화하더라도 위치를 바꾸는 정도이기 때문이다. 브라우저가 이 값을 통해 전달받는 신호는 엘리먼트의 캐시를 덜하거나 아예 하지 않아야 한다는 것이다. 그 이유는 엘리먼트의 컨텐츠가 정기적으로 변화하는 경우 그 엘리먼트를 캐쉬하더라도 도움이 되지 않고, 시간만 낭비하기 때문이다. 따라서 브라우저는 단순하게 캐쉬를 그만두고 컨텐츠가 변화할 때마다 처음부터 렌더링하게 된다.

As mentioned before, some properties will have no effect when specified in `will-change`, because the browser doesn’t perform any special optimizations for changes in most properties. It is still safe to specify them, though; it’ll simply have no effect. Other properties may result in the creation of stacking contexts (`opacity`, `clip-path`, etc.) and/or containing blocks.

앞에서 말했듯이 `will-change`를 지정해도 아무 영향을 받지 않는 속성도 있다. 왜냐하면 브라우저는 대부분의 속성 변화에 관해 어떤 특별한 최적화를 행하지 않기 때문이다. 그러한 속성을 will-change에 지정해도 안전하지만 별다른 영향도 주지 않는다. 기타 속성은 스택 컨텍스트(opacity, clip-path 등)나 컨테이닝 블럭 또는 양쪽 모두 생길 수 있다.

## 지원 브라우저

As of August 2015, Chrome 36+, Opera 24+, and Firefox 36+ support the `will-change` property. Safari is [currently implementing](https://bugs.webkit.org/show_bug.cgi?id=147772) `will-change` and Edge lists it as ["under consideration"](https://dev.modern.ie/platform/status/csswillchange/?filter=f3e0000bf&search=will-change).

2016년 7월 기준으로 `will-change` 속성을 지원하는 브라우저는 Chrome 36+, Opera 24+, Firefox 36+, Safari 9.1이다. iOS Safari 9.3 그리고 Android Browser 50 에서도 지원한다. 자세한 내용은 [caniuse#will-change](http://caniuse.com/#feat=will-change)에서 참고한다. Edge는 "[under consideration](https://dev.modern.ie/platform/status/csswillchange/?filter=f3e0000bf&search=will-change)" 상태이며 곧 모든 현대 브라우저에서 지원할 것으로 기대한다.

## 정리

The `will-change` property will help us write hack-free performance-optimized code, and emphasize the importance of speed and performance to our CSS operations. But, as with all things, with great power comes great responsibility, and `will-change` is one of those properties that should not be taken lightly and should be used wisely. At this point, I’m going to quote Tab Atkins Jr., the `will-change` [specification](http://dev.w3.org/csswg/css-will-change/) editor:

will-change 속성은 핵을 사용하지 않으면서도 성능 최적화 코드를 작성할 수 있게 도와준다. 이는 CSS 작업에서 속도와 성능의 중요성을 강조하는 부분이기도 한다. 그러나 어떤 방법이든 강력한 힘을 가진 데에는 큰 책임이 뒤따른다는 사실을 유념해야 한다. `will-change`는 단순히 성능향상을 목적으로 가볍게 접근하기 보다는 현명한 사용 방안에 대한 고민이 요구되는 속성이다. 여기에서 [`will-change` 사양](https://drafts.csswg.org/css-will-change/#recently-viewed)의 에디터인 탭 애킨스 주니어(Tab Atkins Jr)의 말을 인용한다.

> Set `will-change` to the properties you’ll actually change, on the elements that are actually changing. And remove it when they stop.

> will-change는 실제로 변화시키는 속성과 실제로 변화가 발생할 엘리먼트에 설정하라. 그리고 변화가 종료되면 삭제하라.

Thank you for reading!

*A very big thank you to Paul Lewis for his review and feedback, and to Tab Atkins for his support and answers, and to Bruce Lawson and Mathias Bynens for reviewing the article.*

*원고를 리뷰하고 피드백을 준 폴 루이스(Paul Lewis), 글을 작성을 지원하고 질문에 답해준 탭 애킨스(Tab Atkins) 그리고 원고를 리뷰해준 부르스 로슨(Bruce Lawson)과 마티아스 바이넨즈(Mathias Bynens) 모두에게 깊은 감사의 말을 전한다.*
