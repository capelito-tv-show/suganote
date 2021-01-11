---
title: Instagram APIを使ってGatsby.jsのブログにフィードを表示する
date: "2021-01-11T14:30:03.284Z"
---

[Nagikoさんのポートフォリオページ](https://nagiko.me/)を拝見した際に自身のInstagramの最新投稿がビジュアルとして表示されてるのいいなと思い、自分のブログでも過去のフィードをアルバムとして表示するために色々調べたのでログとして残しておく。

## 参考記事

基本的なNPMモジュールの設定や記述は下記のMediumにすべて書いてあった。今回の実装にはアプリ認証や個人のInstagramアカウントをプロアカウントに変えなければならず、コーディングの部分というよりは周辺環境の設定のほうが面倒だった印象。

[How to automatically display your Instagram feed on your Gatsby.js website?](https://medium.com/frontend-digest/how-to-automatically-display-your-instagram-feed-on-your-gatsby-js-website-bc5cc324eb9d)

## 既存のGatsbyBlogに表示する方法

自分の場合はすでにGatsbyjsで個人ブログを運用していたので、そこに新たにページを作成し、フィードを流し込むような形をとった。使用しているテーマは「Gatsby Simple Blog」

1点、画像の表示サイズは固定ではなくデバイスのサイズによって最適化したかったのでGraphiQLから取得する配列はImageSharpFixedではなくFluidを選んだ。

また、細かい点としてクリックした際にInstagramアプリに移動するよう各投稿のURL等をマッピングするようにしている。

```jsx
import React from "react"
import Img from "gatsby-image"
import { Link,useStaticQuery, graphql } from "gatsby"
import _get from "lodash/get"

import { ThemeProvider } from "../context/themeContext"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import styled from "styled-components"

const ImageWrapper = styled.div`
  width: 100%;
  height: auto;
  @media (min-width: 480px) {
    width: 50%;
    height: 330px;
    padding: 8px;
    overflow: hidden;
  }
`

const IndexPage = () => {
    const data = useStaticQuery(graphql`
      query InstagramQuery {
        allInstagramContent {
          edges {
            node {
              localImage {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              permalink
            }
          }
        }
      }
    `)
    let arrayOfInstaImages = _get(data, "allInstagramContent.edges")
    return (
      <ThemeProvider>
      <Layout title="Suganote">
          <SEO title="Photos" keywords={[`blog`, `suganote`]} />
          <h2
            style={{
              marginBottom: rhythm(2),
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
              }}
              to="/about"
            >
              About
            </Link>
            <Link
              style={{
                paddingLeft: `16px`,
                boxShadow: `none`,
                textDecoration: `none`,
              }}
              to="/photos"
            >
              / Photos
            </Link>
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {arrayOfInstaImages.map((item, i) => {
              return (
                <ImageWrapper key={i} >
                  <a
                    href={item.node.permalink}
                    style={{ display: "block" }}
                    target="_blank"
                  >
                    <Img
                      fluid={item.node.localImage.childImageSharp.fluid}
                      imgStyle={{
                        width: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </a>
                </ImageWrapper>
              )
            })}
          </div>
        </Layout>
      </ThemeProvider>
    )
}

export default IndexPage
```

完成したページがこちら

[Photos](https://suganote.com/photos/)

GatsbyはInstagramフィードでもそこまで読み込み遅延が発生することなくページを表示してくれるのがやはりありがたい。あと、以前まではInstagramのフィードを外部サイトで読み込むためにはInstagram Graph APIという審査の厳しいアプリケーションを利用しなければならなかったような気がするが、現時点では特に時間もかからず半日程度でInstagramフィードを実装できた。個人ブログでかつGatstbyJSを利用している人の参考になればいいなと思っている。
