import styled from "styled-components"
import { latLng } from "leaflet"
import VendingMap from "./VendingMap"
import { MapContainer } from "react-leaflet"

const StyledMap = styled(MapContainer)`
  width: 100dvw;
  height: 100dvh;
`

const MapFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100dvh;
`

export default function VendingMapContainer() {
  const tokyo = latLng(35.68630240145625, 139.77355957031253)

  return (
    <>
      <MapFlex>
        <StyledMap
          id={"map"}
          center={tokyo}
          zoom={15}
          minZoom={12}
          maxZoom={18}
          scrollWheelZoom={true}
        >
          <VendingMap />
        </StyledMap>
      </MapFlex>
    </>
  )
}
