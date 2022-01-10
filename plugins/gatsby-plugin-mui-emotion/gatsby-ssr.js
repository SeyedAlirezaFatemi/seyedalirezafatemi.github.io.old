import { CacheProvider } from "@emotion/react"
import createEmotionServer from "@emotion/server/create-instance"
import * as React from "react"
import { renderToString } from "react-dom/server"
import { getTssDefaultEmotionCache } from "tss-react/cache"

import getEmotionCache from "./getEmotionCache"

// https://github.com/mui-org/material-ui/tree/d6181083e205444a0d118aeddbd5f6a7a2815869/examples/gatsby
// https://github.com/hupe1980/gatsby-plugin-material-ui/blob/master/gatsby-plugin-material-ui/src/gatsby-ssr.js
// https://mui.com/guides/server-rendering/#heading-mui-on-the-server

export const replaceRenderer = ({ bodyComponent, setHeadComponents, replaceBodyHTMLString }) => {
  const cache = getEmotionCache()
  const tssCache = getTssDefaultEmotionCache({ "doReset": true })

  const html = renderToString(<CacheProvider value={cache}>{bodyComponent}</CacheProvider>)
  const emotionStyles = createEmotionServer(cache).extractCriticalToChunks(html)
  const tssStyles = createEmotionServer(tssCache).extractCriticalToChunks(html)

  setHeadComponents(
    [...tssStyles.styles.map((style) => (
      <style
        data-emotion={`${style.key} ${style.ids.join(` `)}`}
        key={`emotion-${style.key}`}
        dangerouslySetInnerHTML={{ __html: style.css }}
      />
    )), ...emotionStyles.styles.map((style) => (
      <style
        data-emotion={`${style.key} ${style.ids.join(` `)}`}
        key={`emotion-${style.key}`}
        dangerouslySetInnerHTML={{ __html: style.css }}
      />
    ))],
  )

  // render the result from `extractCritical`
  replaceBodyHTMLString(emotionStyles.html);
}

// Inject MUI styles first to match with the prepend: true configuration.
export const onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents()
  headComponents.sort((x, y) => {
    if (x.key === "emotion-css-global" || x.key === "emotion-css") {
      return -1
    }
    if (y.key === "style") {
      return 1
    }
    return 0
  })
  replaceHeadComponents(headComponents)
}
