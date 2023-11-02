import React from 'react'

import NextHead from 'next/head'
import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'


const Layout = (props) => {
  const { children } = props
  return(
    <>
      <NextHead>
        <meta charSet="UTF-8"/>
        <meta name="google-site-verification" content="W-TjZzBM8yhacjHbq4YdHdHVQ-RV2XfXhZHhk2k7Zjc" />
        {/* Metadatos SEO */}
        <link rel="icon" type="image/png" sizes="32x32" href="https://cdn.larepublica.pe/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://cdn.larepublica.pe/favicon-16x16.png" />
        <link rel="canonical" href="https://especiales.larepublica.pe/calculadora-de-uit-como-saber-cuanto-tengo-que-pagar-peru" />
        <title>
        Calculadora de UIT: ¿cómo saber cuánto tengo que pagar? | Calculadora Tributaria | UIT 2023 Perú
        </title>
        <meta 
          name="description" 
          content="La unidad impositiva tributaria (UIT), que varía todos los años, se utiliza para calcular impuestos, infracciones, multas y otros aspectos tributarios. A veces, estos montos se pueden expresar en cantidades o en porcentajes. Por eso, La República te ofrece una alternativa para calcular este importe durante el 2023."
        />
        <meta 
          name="keywords" 
          content="economia, peru, uit, calcular uit"
        />
        <meta name="googlebot" content="index,follow"/>
        <meta name="bingbot" content="index,follow"/>
        <meta name="robots" content="max-image-preview:large"/>
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />
        
        {/* Metadatos Twitter */}
        <meta name="twitter:title" content="Calculadora de UIT: ¿cómo saber cuánto tengo que pagar? | Calculadora Tributaria | UIT 2023 Perú"/>
        <meta name="twitter:description" content="La unidad impositiva tributaria (UIT), que varía todos los años, se utiliza para calcular impuestos, infracciones, multas y otros aspectos tributarios. A veces, estos montos se pueden expresar en cantidades o en porcentajes. Por eso, La República te ofrece una alternativa para calcular este importe durante el 2023." />
        <meta name="twitter:image" content="https://origin.cronosmedia.glr.pe/large/2023/11/02/lg_65440441d21dbf02a572d5ed.jpg" />
        <meta name="twitter:url" content="https://especiales.larepublica.pe/calculadora-de-uit-como-saber-cuanto-tengo-que-pagar-peru" />
        <meta property="twitter:image" content="https://origin.cronosmedia.glr.pe/large/2023/11/02/lg_65440441d21dbf02a572d5ed.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@larepublica_pe" />
        <meta name="twitter:creator" content="@larepublica_pe" />
        <meta name="twitter:width" content="828" />
        <meta name="twitter:height" content="450" />

        {/* Metadatos Facebook */}
        <meta property="og:title" content="Calculadora de UIT: ¿cómo saber cuánto tengo que pagar? | Calculadora Tributaria | UIT 2023 Perú"/>
        <meta property="og:description" content="La unidad impositiva tributaria (UIT), que varía todos los años, se utiliza para calcular impuestos, infracciones, multas y otros aspectos tributarios. A veces, estos montos se pueden expresar en cantidades o en porcentajes. Por eso, La República te ofrece una alternativa para calcular este importe durante el 2023."/>
        <meta property="og:image" content="https://origin.cronosmedia.glr.pe/large/2023/11/02/lg_65440441d21dbf02a572d5ed.jpg"/>
        <meta property="og:url" content="https://especiales.larepublica.pe/calculadora-de-uit-como-saber-cuanto-tengo-que-pagar-peru" />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="828"/>
        <meta property="og:image:height" content="450"/>
        <meta property="og:site_name" content="La República" />
        <meta property="fb:pages" content="145820412845"/>
        <meta property="fb:app_id" content="602624269799095"/>
      </NextHead>
        <Header/>
      <Wrapper>
        <LayoutContent>
          <LayoutBody>
            { children }
          </LayoutBody>
        </LayoutContent>
        <Footer/>
      </Wrapper>
    </>
  )
}

export default Layout

const Wrapper = styled.div`
  height: auto;
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
`
const LayoutContent = styled.div`
  height:  calc(100vh - 104px);
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  min-height: calc(100vh - 450px);
`
const LayoutBody = styled.div`
  width: 80%;
  margin: auto;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
  @media (max-width: 500px){
    width: 90%;
  }
`