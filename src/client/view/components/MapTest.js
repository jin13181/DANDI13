import React, { useState , useEffect } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import axios from 'axios';


const MapTest = ({ center, isPanto }) => {

    /*==============API데이터 호출====================*/
    const [locations, setLoacation] =useState([]);
    useEffect(() => {
        const fetchLocation= async() => {
            try {
            const response= await axios.get ("https://api-fvwt.onrender.com/api/location")
            //const response= await axios.get ("http://localhost:8080/api/location")
            setLoacation(response.data);
            //console.log(response.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchLocation();
    },[]);

    /*=====API데이터 호출로 가져온 데이터 location_list에 저장=====*/

    const location_list = locations.map(location => ({
        title: location.name,
        latlng: { lat: location.latitude, lng: location.longitude }
    }));



    /*================현재 위치 불러오기======================*/
    const [mylocation, setMyLocation] = useState(null); // 현재 위치를 저장할 상태

    useEffect(() => {
		navigator.geolocation.getCurrentPosition(successHandler, errorHandler); // 성공시 successHandler, 실패시 errorHandler 함수가 실행된다.
	}, []);

    const successHandler = (response) => {
		//console.log(response); // coords: GeolocationCoordinates {latitude: 위도, longitude: 경도, …} timestamp: 1673446873903
		const { latitude, longitude } = response.coords;
		setMyLocation({ latitude, longitude });
	};

    const errorHandler = (error) => {
		console.log(error);
	};




    /*================ 고객이 클릭한 장소 위도 경도 저장======================*/
    const [state, setState] = useState({
        center,
        isPanto,
      });
      


    /*================ 화면 렌더링 ======================*/

    // 만약 내 위치 정보가 아직 지정 안되어 있을 경우
    if (!mylocation) {
        return <div>Loading...</div>;
    }
    // 내 위치정보가 지정되어 있을 경우
	return (<>
		<Map center={state.center} isPanto={state.isPanto} style={{ width: '100%', height: '100%' }} level={3}>
            <MapMarker position={{ lat: mylocation.latitude, lng: mylocation.longitude }} />


			{location_list.map((loc, idx) => (
				<MapMarker
					key={`${loc.title}-${loc.latlng}`}
					position={loc.latlng}
					image={{
						src: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png',
						size: { width: 24, height: 35 },
					}}
					title={loc.title}
				/>
			))}

            <div
              className='locationInfo'
              onClick={() =>
                setState({
                  center: { lat: mylocation.latitude, lng: mylocation.longitude },
                  isPanto: true,
                })
              }
            >
              나의 위치 확인
            </div>
		</Map>
</>
	);
};

export default MapTest;


// 참고 코드
//https://velog.io/@wlwl99/React-Kakao-Map-SDK-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0