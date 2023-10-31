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
    setSueldo(valid ? value : sueldo)
  }

  const handleComboFam = (e) => {
    let  value = e.target.value
    setFam(value)
  }
  
  const hendleFechaIngreso = (e) => {
    let formatDate = moment(e.target.value)
    setFecha(formatDate)
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
  }, [fecha, sueldo, diffMeses, bono, resultSB, fam, diffGrati, valueBonoFam, remuComputable, ctsFinally])

  return (
    <Layout>
      {/* <TitlePrincipal>
        CALCULADORA DE LA CTS: ¿cómo saber cuánto me corresponde?
      </TitlePrincipal> */}
      {/* <PBajadas>
        El 15 de julio es la fecha límite para que las empresas privadas abonen a sus empleados la 
        gratificación correspondiente a las Fiestas Patrias. Este derecho responde a la Ley N°27735, 
        y se aplica también en Navidad. Calcula aquí a cuánto asciende tu pago.
      </PBajadas>
      <WrapperSubTitle>
        <SubTitles>
          ¿Qué es la gratificación?
        </SubTitles>
      </WrapperSubTitle>
      <PBajadas>
        La gratificación es una remuneración adicional que percibe el trabajador, 
        cuyo monto dependerá de los días computables que laboró en una misma compañía. 
        Para la ocasión de julio se contabiliza los días entre el 1 de enero y el 30 de junio.
        <br></br><br></br>
        Se paga de forma bruta, es decir, no está afectada por los descuentos de ley que sí se 
        aplican al salario mensual (tales como pago al sistema de pensiones o seguros); por el contrario, 
        la gratificación goza de un adicional del 9% por concepto de EsSalud o 6.75% de EPS.
        <br></br><br></br>
        Solo estará afectada por el descuento de quinta categoría si es que el trabajador durante 
        el año supera las 7 UIT en ingresos, conforme a lo establecido en el artículo 34 de la Ley del 
        impuesto a la renta. */}
        {/* <br></br><br></br>
        Es un monto equivalente al último salario mensual que percibió el trabajador. Se paga de forma bruta, 
        es decir, no está afectada por los descuentos de ley que sí se aplican a la remuneración 
        (tales como pago al sistema de pensiones o seguros); por el contrario, goza de un adicional del 9% 
        por concepto de EsSalud o 6.75% de EPS.
        <br></br><br></br>
        Solo estará afectada por el descuento de quinta categoría si es que el trabajador durante el año supera 
        las 7 UIT en ingresos, conforme a lo establecido en el artículo 34 de la Ley del impuesto a la renta. */}
      {/* </PBajadas>
      <WrapperSubTitle>
        <SubTitles>
          ¿Quiénes reciben este beneficio?
        </SubTitles>
      </WrapperSubTitle>
      <PBajadas>
        Tal como señala el artículo 1 de la Ley 27735 (denominada “Ley que regula el otorgamiento de las gratificaciones 
        para los trabajadores del régimen de la actividad privada por Fiestas Patrias y Navidad”), tienen derecho todos 
        aquellos trabajadores que están sujetos al régimen de la actividad privada, sea cual fuere la modalidad del 
        contrato de trabajo y el tiempo de prestación de servicios del trabajador.
        <br></br><br></br>
        Sin embargo, hay detalles a tener en cuenta. En el caso de las pequeñas empresas, y de acuerdo al Decreto Supremo 
        013-2013-PRODUCE, los empleados tendrán derecho a media gratificación en julio y media gratificación en diciembre.
        <br></br><br></br>
        Por otro lado, la Ley 31110 permite que los trabajadores del régimen agrario también accedan a este beneficio. 
        Según el artículo 3 numeral d, el trabajador puede elegir recibir los conceptos de CTS y gratificaciones en los 
        plazos que la ley establece, sin que entren a ser prorrateados en la remuneración diaria.
        <br></br><br></br>
        Finalmente, la Ley 31047 otorga el beneficio a los trabajadores del hogar, cuya gratificación será equivalente al 
        sueldo que se recibe.
      </PBajadas>
      <WrapperSubTitle>
        <SubTitles>
          ¿Cuál es la diferencia entre gratificación y aguinaldo?
        </SubTitles>
      </WrapperSubTitle>
      <PBajadas>
        La gratificación corresponde únicamente al sector privado y se calcula en base a lo percibido como salario en el 
        último mes. Mientras, el aguinaldo es un pago de s/ 300 que se hace a los trabajadores del sector público dos veces 
        al año.
      </PBajadas>
      <WrapperSubTitle>
        <SubTitles>
          ¿Cómo calcular la gratificación?
        </SubTitles>
      </WrapperSubTitle>
      <PBajadas>
        El cálculo del monto final se debe hacer usando los siguientes criterios:
        <br></br>
      </PBajadas>
      <CaracterSpecial>
        SUELDO + ASIGNACIÓN FAMILIAR (si es que la tuviese) + BONO (9% DE ESSALUD; 6.75%EPS)
      </CaracterSpecial>
        <br></br> */}
      <ContainerTitle>
        <Title>
          CALCULADORA DE LA CTS
        </Title>
      </ContainerTitle>
      <ContainerBody>
        <LineDate
          type="date"
          title="Fecha de Ingreso"
          onChange={(e) => hendleFechaIngreso(e)}
        />
        <LineDate
          type="text"
          title="Sueldo Bruto"
          placeholder="S/. 0.00"
          name="SueldoBruto"
          value={sueldo}
          onInput={(e) => handleInput(e)}
          pattern="[0-9]*"
        />
        <LineDate
          type="number"
          title="Tiempo laboral computable (meses)"
          disabled="true"
          value={diffMeses > 6 ? 6 : diffMeses}
        />
        {/* <BonoComboBox
          placeholder="Selecciona uno"
          title="Bono Extraordinario"
          options={optionsBono}
          onChange={(e) => handleComboBono(e)}
        /> */}
        <FamComboBox
          options={optionsFam}
          placeholder="Selecciona uno"
          title="Con hijo(s) (Bonificación familiar)"
          onChange={(e) => handleComboFam(e)}
        />
        <Line/>
        <LineDate
          type="number"
          title="Total a recibir"
          disabled="true"
          value={ctsFinally > 0 ? ctsFinally?.toFixed(2) : ctsFinally?.toFixed(2)}
        />
        <Footer/>
      </ContainerBody>
      <MessageWarning>
        El cálculo realizado es referencial. Los montos podrían variar en función al caso concreto 
        (por ejemplo para el caso de pequeñas y medianas empresas, en que se recibe un monto menor) 
        y se calculan en base a la información ingresada por el usuario. Sobre el monto calculado pueden 
        existir descuentos como el impuesto a la renta, deudas por pensión de alimentos, deudas con el 
        empleador u otros.
      </MessageWarning>
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