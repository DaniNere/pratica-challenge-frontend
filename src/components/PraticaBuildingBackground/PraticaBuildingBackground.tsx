import styled from "styled-components";
import fachada from "../../assets/pratica-fachada.png"; 

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;   
`;

interface PraticaBuildingBackgroundProps {
  alt?: string;
}

export default function PraticaBuildingBackground({ alt = "Prática Building" }: PraticaBuildingBackgroundProps) {
  return <BackgroundImage src={fachada} alt={alt} />;
}