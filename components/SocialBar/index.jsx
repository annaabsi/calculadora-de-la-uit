import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share'

const SocialBar = () => {
  return(
    <>
      <div className='social'>
        <div className='wrapperF'>
          <FacebookShareButton url='https://especiales.larepublica.pe/calculadora-de-uit-como-saber-cuanto-tengo-que-pagar-peru' 
            quote="Calculadora de la UIT 2023 | LR Especiales"
          >
            <ContentIconF>
              <FontAwesomeIcon icon={faFacebookF}/>
            </ContentIconF>
          </FacebookShareButton>
        </div>

        <div>
          <TwitterShareButton url='https://especiales.larepublica.pe/calculadora-de-uit-como-saber-cuanto-tengo-que-pagar-peru' 
            title="Calculadora de la UIT 2023 | LR Especiales"
          >
            <ContentIconT>
              <FontAwesomeIcon icon={faTwitter}/>
            </ContentIconT>
          </TwitterShareButton>
        </div>

        <div>
          <WhatsappShareButton url='https://especiales.larepublica.pe/calculadora-de-uit-como-saber-cuanto-tengo-que-pagar-peru' 
            title="Calculadora de la UIT 2023 | LR Especiales"
          >
            <ContentIconW>
              <FontAwesomeIcon icon={faWhatsapp}/>
            </ContentIconW>
          </WhatsappShareButton>
        </div>
      </div>
      <style jsx>{`
        .social{
          display: flex;
          height: 45px;
          width: 160px;
          margin-right: 10px;
        }
        @media (max-width: 620px){
          .social{
            width: 150px;
          }
          .wrapperF{
            display: flex;
          }
        }
        @media (max-width: 450px) {
          .social{
            width: 120px;
            margin-right: 0px;
          }
        }
      `}</style>
    </>
  )
}

export default SocialBar

const ContentIconF = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  font-size: 23px;
  text-align: center;
  margin-top: 6px;
  color: #1D31A7;
  @media (max-width: 450px) {
    margin: 0 auto;
    height: 15px;
    width: 15px;
  }
`
const ContentIconT = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 35px;
  font-size: 23px;
  text-align: center;
  color: #17C1E5;
  @media (max-width: 450px) {
    margin: 0 auto;
    height: 25px;
    width: 25px;
  }
`
const ContentIconW = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 35px;
  font-size: 23px;
  text-align: center;
  color: #38AA2D;
  @media (max-width: 450px) {
    margin: 0 auto;
    height: 25px;
    width: 25px;
  }
`