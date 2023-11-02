import React, {useState, useEffect} from 'react'

import Layout from '../layout'
import styled from 'styled-components'
import moment from 'moment'

import LineDate from '../components/LineDate'
import FamComboBox from '../components/FamComboBox'

const Home = () => {
  const [fecha, setFecha] = useState(null)
  const [sueldo, setSueldo] = useState(null)
  const [diffMeses, setDiffMeses] = useState(null)
  const [valueBonoFam, setValueBonoFam] = useState(102.5)
  const [resultSB , setResultSB] = useState(null)
  const [bono, setBono] = useState(null)
  const [fam, setFam] = useState(null)
  const [remuComputable, setRemuComputable] = useState(null)
  const [diffGrati, setDiffGrati] = useState(null)
  const [ctsFinally, setCtsFinally] = useState(null)

  const [ano, setAno] = useState(2023)
  const [cantidad, setCantidad] = useState(1)

  const uitData = {
    2012: 3650,
    2013: 3700,
    2014: 3800,
    2015: 3850,
    2016: 3950,
    2017: 4050,
    2018: 4150,
    2019: 4200,
    2020: 4300,
    2021: 4400,
    2022: 4600,
    2023: 4950,
  };

  const valor = "S/ " + uitData[ano]
  const total = "S/ " + (uitData[ano] * cantidad).toFixed(2)
  
  const optionsFam = [
    {
      id : 1,
      description : "Sí"
    },
    {
      id: 2,
      description : "No"
    }
  ]

  const handleInput = (e) => {
    const { value, validity: { valid } } = e.target;
    setCantidad(valid ? value : sueldo)
  }

  const handleComboFam = (e) => {
    let  value = e.target.value
    setFam(value)
  }
  
  const hendleFechaIngreso = (e) => {
    let formatDate = moment(e.target.value)
    setFecha(formatDate)
  }

  const handleAno = (e) => {
    let ano = e.target.value
    setAno(ano)
  }
  useEffect (() => {
    setDiffMeses(moment("2022-11-01").diff(fecha, "month"))

    if(diffMeses <= 6){
      
      console.log("diffMeses", diffMeses)

      if(fam === "1"){
        setDiffGrati(moment("2022-12-01").diff(fecha, "month"))
        if (diffGrati <= 6) {
          console.log("diffGrati", diffGrati)
          setRemuComputable(((parseInt(sueldo) + valueBonoFam) / 6 * diffGrati) / 6)
          console.log("remuComputable", remuComputable)

          setCtsFinally((parseInt(sueldo) + valueBonoFam + remuComputable) / 12 * diffMeses)
          console.log("setCtsFinally", ctsFinally)
        }

        if(diffGrati >= 6){
          setRemuComputable(((parseInt(sueldo) + valueBonoFam) / 6 * 6) / 6)
          console.log("remuCompubale2", remuComputable)

          setCtsFinally((parseInt(sueldo) + valueBonoFam + remuComputable) / 12 * 6)
          console.log("setCtsFinally2", ctsFinally)
        }

      }

      if(fam === "2"){
        setDiffGrati(moment("2022-12-01").diff(fecha, "month"))
        if (diffGrati <= 6) {
          console.log("diffGrati", diffGrati)
          setRemuComputable((parseInt(sueldo) / 6 * diffGrati) / 6)
          console.log("remuComputable", remuComputable)

          setCtsFinally((parseInt(sueldo) + remuComputable) / 12 * diffMeses)
          console.log("setCtsFinally", ctsFinally)
        }
        else{
          setRemuComputable((parseInt(sueldo) / 6 * 6) / 6)
          console.log("remuCompubale2", remuComputable)

          setCtsFinally((parseInt(sueldo) + remuComputable) / 12 * 6)
          console.log("setCtsFinally", ctsFinally)
        }
      }

      
    } else{

      if(fam === "1"){
        setDiffGrati(moment("2022-12-01").diff(fecha, "month"))
        if (diffGrati <= 6) {
          console.log("diffGrati", diffGrati)
          setRemuComputable(((parseInt(sueldo) + valueBonoFam) / 6 * diffGrati) / 6)
          console.log("remuComputable", remuComputable)

          setCtsFinally((parseInt(sueldo) + valueBonoFam + remuComputable) / 12 * 6)
          console.log("setCtsFinally", ctsFinally)
        }

        if(diffGrati >= 6){
          setRemuComputable(((parseInt(sueldo) + valueBonoFam) / 6 * 6) / 6)
          console.log("remuCompubale2", remuComputable)

          setCtsFinally((parseInt(sueldo) + valueBonoFam + remuComputable) / 12 * 6)
          console.log("setCtsFinally2", ctsFinally)
        }

      }

      if(fam === "2"){
        setDiffGrati(moment("2022-12-01").diff(fecha, "month"))
        if (diffGrati <= 6) {
          console.log("diffGrati", diffGrati)
          setRemuComputable((parseInt(sueldo) / 6 * diffGrati) / 6)
          console.log("remuComputable", remuComputable)

          setCtsFinally((parseInt(sueldo) + remuComputable) / 12 * 6)
          console.log("setCtsFinally", ctsFinally)
        }
        else{
          setRemuComputable((parseInt(sueldo) / 6 * 6) / 6)
          console.log("remuCompubale2", remuComputable)

          setCtsFinally((parseInt(sueldo) + remuComputable) / 12 * 6)
          console.log("setCtsFinally", ctsFinally)
        }
      }
    }
  }, [ano, valor, cantidad, total])

  return (
    <Layout>
      <TitlePrincipal>
        Calculadora de UIT: ¿cómo saber cuánto tengo que pagar?
      </TitlePrincipal>
      <PBajadas>
        La unidad impositiva tributaria (UIT), que varía todos los años, se utiliza para calcular impuestos, infracciones, multas y otros aspectos tributarios. A veces, estos montos se pueden expresar en cantidades o en porcentajes. Por eso, La República te ofrece una alternativa para calcular este importe durante el 2023.
      </PBajadas>
      <WrapperSubTitle>
        <SubTitles>
        ¿Qué es la UIT?
        </SubTitles>
      </WrapperSubTitle>
      <PBajadas>
      Por sus siglas, significa unidad impositiva tributaria y es el valor en soles que
establece el Estado peruano, a través del Ministerio de Economía y Finanzas,
para determinar impuestos, infracciones, multas y otros asuntos tributarios. 
      </PBajadas>
      <WrapperSubTitle>
        <SubTitles>
        ¿Para qué sirve la UIT?
        </SubTitles>
      </WrapperSubTitle>
      <PBajadas>
      La UIT tiene un papel fundamental en el ámbito tributario, ya que su valor se utiliza como punto de referencia en la elaboración de normas y reglamentos
para determinar montos de impuestos, sanciones, multas y otras obligaciones
fiscales. Además, la unidad impositiva tributaria sirve para establecer un rango
de ingresos que una empresa debe tener para posicionarse en una escala como, por ejemplo, una PYME o MYPE.
      </PBajadas>
      <WrapperSubTitle>
        <SubTitles>
        ¿Cuánto es el valor de la UIT 2023?
        </SubTitles>
      </WrapperSubTitle>
      <PBajadas>
      De acuerdo con el Decreto Supremo 309-2022-EF, el valor de la UIT para este
2023 es de S/4.950, es decir, S/350 más que el 2022 y un aumento de S/1.300 si se considera desde el 2012.
      </PBajadas>
      <WrapperSubTitle>
        <SubTitles>
        ¿Por qué cambia la UIT?
        </SubTitles>
      </WrapperSubTitle>
      <PBajadas>
      La razón por la cual cada año vemos un aumento de la UIT se debe a una
diversidad de factores macroeconómicos, pero, sobre todo, por la inflación, la cual cerró el año anterior en un poco más del 8%, con lo que se determina una
variación en el índice de precios del consumidor. 
      </PBajadas>
      <WrapperSubTitle>
        <SubTitles>
        ¿Cómo cambió el valor de la UIT en los últimos años?
        </SubTitles>
      </WrapperSubTitle>
      <PBajadas>
      El valor de la unidad impositiva tributaria ha aumentado cada año, a tal punto
que, del 2012 al 2023, el monto se ha incrementado en S/1.300. A continuación,
revisa la UIT en los últimos años:
        <br></br>
      </PBajadas>
      <CaracterSpecial>
      2012: S/3.650<br></br>
      2013: S/3.700<br></br>
      2014: S/3.800<br></br>
      2015: S/3.850<br></br>
      2016: S/3.950<br></br>
      2017: S/4.050<br></br>
      2018: S/4.150<br></br>
      2019: S/4.200<br></br>
      2020: S/4.300<br></br>
      2021: S/4.400<br></br>
      2022: S/4.600<br></br>
      2023: S/4.950
      </CaracterSpecial>
        <br></br>
      <ContainerTitle>
        <Title>
          CALCULADORA DE LA UIT
        </Title>
      </ContainerTitle>
      <ContainerBody>
        <LineDate
          type="number"
          title="Año"
          onChange={(e) => handleAno(e)}
          min="2012"
          max="2023"
          step="1"
          value={ano}
        />
        <LineDate
          type="text"
          title="Valor de la UIT"
          disabled="true"
          value={valor}
        />
        <LineDate
          type="number"
          title="Cantidad de UITs"
          min="0"
          step="any"
          name="SueldoBruto"
          value={cantidad}
          onInput={(e) => handleInput(e)}
        />
        {/* <BonoComboBox
          placeholder="Selecciona uno"
          title="Bono Extraordinario"
          options={optionsBono}
          onChange={(e) => handleComboBono(e)}
        /> */}
        {/* <FamComboBox
          options={optionsFam}
          placeholder="Selecciona uno"
          title="Con hijo(s) (Bonificación familiar)"
          onChange={(e) => handleComboFam(e)}
        /> */}
        <Line/>
        <LineDate
          type="text"
          title="Monto total"
          disabled="true"
          value={total}
        />
        <Footer/>
      </ContainerBody>
      {/* <MessageWarning>
        El cálculo realizado es referencial. Los montos podrían variar en función al caso concreto 
        (por ejemplo para el caso de pequeñas y medianas empresas, en que se recibe un monto menor) 
        y se calculan en base a la información ingresada por el usuario. Sobre el monto calculado pueden 
        existir descuentos como el impuesto a la renta, deudas por pensión de alimentos, deudas con el 
        empleador u otros.
      </MessageWarning> */}
      <ContainerTitle>
      <a href='https://especiales.larepublica.pe/calcular-cts-2022-deposito-en-noviembre-por-la-compensacion-por-tiempo-de-servicios-calculadora/' target='_blank' rel="noreferrer">
        <Title>
          CALCULADORA DE LA CTS
        </Title>
      </a>
      </ContainerTitle>
      <ContainerTitle>
      <a href='https://especiales.larepublica.pe/calculadora-de-uit-como-saber-cuanto-tengo-que-pagar-peru/' target='_blank' rel="noreferrer">
        <Title>
          CALCULADORA DE LA GRATIFICACIÓN
        </Title>
      </a>
      </ContainerTitle>
    </Layout>
  )
}

export default Home

const ContainerTitle = styled.div`
  width: 100%;
  background-color: #923635;
  height: 50px;
  line-height: 50px;
  margin: 50px auto 20px;

  @media (max-width: 520px){
    margin: 0 auto 15px;
  }
`
const Title = styled.h3`
  font-family: Roboto-Bold;
  font-size: 25px;
  text-align: center;
  color: white;
  height: auto;

  @media (max-width: 600px){
    font-size: 22px;
  }
  @media (max-width: 520px){
    font-size: 18px;
  }
  @media (max-width: 420px){
    font-size: 15px;
  }
`
const ContainerBody = styled.div`
  /* background-color: blue; */
  background-image: url("./images/dolares.png");
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
  height: 100%;
  width: 100%;
`
const Line = styled.div`
  height: 3px;
  background-color: #9A9A9A;
  width: 90%;
  margin: 15px auto 20px;
  
  @media (max-width: 560px){
    width: 100%;
  }
`
const Footer = styled.div`
  margin-top: 30px;
  background-color: #4D4D4D;
  height: 45px;
  width: 100%;
  background-image: url("https://cdn.larepublica.pe/images/content/default/logo-lr.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 160px;
  object-fit: cover;

  @media (max-width: 520px){
    background-size: 120px;
    margin-top: 20px;
  }
`
const TitlePrincipal = styled.h1`
  font-size: 30px;
  text-align: center;
  margin: 30px 0;
  letter-spacing: -.5px;
  @media (max-width: 500px){
    font-size: 25px;
  }
`
const PBajadas = styled.p`
  font-size: 17px;
  width: 90%;
  margin: 20px auto;
  line-height: 20px;

  @media (max-width: 500px){
    font-size: 16px;
    width: 100%;
  }
`
const WrapperSubTitle = styled.div`
  height: 30px;
  width: 90%;
  margin: 20px auto 30px;
  text-align: left;

  @media (max-width: 680px){
    height: auto;
  }
  @media (max-width: 500px){
    margin: 0;
    height: 100%;
  }
`
const SubTitles = styled.h2`
  background-color: #923635;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  width: max-content;
  font-size: 22px;
  line-height: 30px;
  color: white;
  text-align: left;
  padding: 5px 20px 5px 1px;
  /* margin: 30px auto 0; */
  
  @media (max-width: 680px){
    width: inherit;
  }
  @media (max-width: 500px){
    height: 100%;
    font-size: 18px;
  }
`
const CaracterSpecial = styled.h3`
  width: 90%;
  margin: 0 auto 10px;
  font-style: oblique;
  font-size: 18px;
  font-weight: 600;
  font-family: "Merriweather", serif;
  text-align: center;

  @media (max-width: 500px){
    font-size: 17px;
    width: 100%;
    line-height: 18px;
  }
`
const MessageWarning = styled.h3`
  font-size: 14px;
  font-style: oblique;
  width: 95%;
  line-height: 16px;
  color: #4D4D4D;
  margin: 20px auto 0;
  font-weight: 100;

`