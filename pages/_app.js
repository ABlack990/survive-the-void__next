import '../styles/globals.css'
import { PageContainer } from "./base/PageContainer.js";
import { PageHeader } from "./base/PageHeader.js";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <PageHeader />
      <PageContainer>
        <Component {...pageProps} />
      </PageContainer>
    </>
  )
}

export default MyApp
