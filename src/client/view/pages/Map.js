/*global kakao*/ 
import '../../css/Map.css'
import '../../css/MapModal.css'
import { React,useState, useEffect , useRef } from 'react'
import backgroundMap from '../../images/map.png'
import destination from '../../images/destination.png'
import axios from 'axios';
import touchscreen from '../../images/touch-screen.png'
import MapTest from '../components/MapTest'
import Navbar from '../components/Navbar'




function Map() {
    const [modal1, setModal1] = useState(false);
    const toggleModal1 = () => {
        setModal1(!modal1)
    }    
    const [modal2, setModal2] = useState(false);
    const toggleModal2 = () => {
        setModal2(!modal2)
    }  
    const [modal3, setModal3] = useState(false);
    const toggleModal3 = () => {
        setModal3(!modal3)
    }  
    const [modal4, setModal4] = useState(false);
    const toggleModal4 = () => {
        setModal4(!modal4)
    }  
    const [modal5, setModal5] = useState(false);
    const toggleModal5 = () => {
        setModal5(!modal5)
    }  
    const [modal6, setModal6] = useState(false);
    const toggleModal6 = () => {
        setModal6(!modal6)
    }  

    ///이 방법 아닌거 같지만.. 눈속임ㅠ
    const [modal1_1, setModal1_1] = useState(false);
    const [state, setState] = useState({
        center: { lat: 0, lng: 0 },
        isPanto: true,
      });
      
    const toggleModal1_1 = (lat,lng) => {
        setModal1_1(!modal1_1);
        setState({
            center: { lat, lng },
            isPanto: true,
        })
    }  
    const [modal2_1, setModal2_1] = useState(false);
    const toggleModal2_1 = (lat,lng) => {
        setModal2_1(!modal2_1)
        setState({
            center: { lat, lng },
            isPanto: true,
        })
    }  
    const [modal3_1, setModal3_1] = useState(false);
    const toggleModal3_1 = (lat,lng) => {
        setModal3_1(!modal3_1)
        setState({
            center: { lat, lng },
            isPanto: true,
        })
    }  
    const [modal4_1, setModal4_1] = useState(false);
    const toggleModal4_1 = (lat,lng) => {
        setModal4_1(!modal4_1)
        setState({
            center: { lat, lng },
            isPanto: true,
        })
    }  
    const [modal5_1, setModal5_1] = useState(false);
    const toggleModal5_1 = (lat,lng) => {
        setModal5_1(!modal5_1)
        setState({
            center: { lat, lng },
            isPanto: true,
        })
    }  
    const [modal6_1, setModal6_1] = useState(false);
    const toggleModal6_1 = (lat,lng) => {
        setModal6_1(!modal6_1)
        setState({
            center: { lat, lng },
            isPanto: true,
        })
    }  
    
    ///


    //API에 데이터 호출
    const [hints, setHints] =useState([]);
    useEffect(() => {
        const fetchHint = async() => {
            try {
            const response= await axios.get ("https://api-fvwt.onrender.com/api/hint")
            //const response= await axios.get ("http://localhost:8080/api/hint")
            setHints(response.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchHint();
    },[]);

    
    const [array1, setArray1] =useState({});
    const [array2, setArray2] =useState({});
    const [array3, setArray3] =useState({});
    const [array4, setArray4] =useState({});
    const [array5, setArray5] =useState({});
    const [array6, setArray6] =useState({});

    useEffect(() => {
        const foundArray = hints.find(hint => hint.location_no === 1);
        setArray1(foundArray);
    },[hints])

    useEffect(() => {
        const foundArray = hints.find(hint => hint.location_no  === 2);
        setArray2(foundArray);
    },[hints])

    useEffect(() => {
        const foundArray = hints.find(hint => hint.location_no  === 3);
        setArray3(foundArray);
    },[hints])

    useEffect(() => {
        const foundArray = hints.find(hint => hint.location_no  === 4);
        setArray4(foundArray);
    },[hints])

    useEffect(() => {
        const foundArray = hints.find(hint => hint.location_no  === 5);
        setArray5(foundArray);
    },[hints])

    useEffect(() => {
        const foundArray = hints.find(hint => hint.location_no === 6);
        setArray6(foundArray);
    },[hints])


return (
    <>
        <div id='map'>
            <h1>지도 <span>Map</span></h1>
            <div id="mapImages">
                <img id="backgroundMap"src={backgroundMap} ></img>
                <img className="destination" id="destination1" src={destination} onClick={toggleModal1}></img>
                <img className="destination" id="destination2" src={destination} onClick={toggleModal2}></img>
                <img className="destination" id="destination3" src={destination} onClick={toggleModal3}></img>
                <img className="destination" id="destination4" src={destination} onClick={toggleModal4}></img>
                <img className="destination" id="destination5" src={destination} onClick={toggleModal5}></img>
                <img className="destination" id="destination6" src={destination} onClick={toggleModal6}></img>
            </div>
            
            <div id="btm-contents" >
            <img src={touchscreen} ></img>
                <p id="txt">아이콘을 터치해 장소를 확인해주세요!</p>
            </div>
        
            {modal1 && (
            <div className="modal">
                <div className="overlay"></div>
                <div className="modal-content">

                {array1? (<div className="modalTitleWrap">
                    <div className="mapModalTitle">{array1.name}</div>
                    <div className='closeModal' onClick={toggleModal1}></div>
                    </div>) : 
                (<></>)}  
                <div className="modalWrap1">
                    {array1? (<div className="modalWrap">
                    <img id="modalPic" src={array1.picture_path}/>
                    <p className="modalTxt">·{array1.description}</p>
                    <p className="modalTxt">·주소:{array1.address}</p>
                    <div className='locationInfo' onClick={() => toggleModal1_1(array1.latitude, array1.longitude)}>위치안내</div>
                    </div>) : 
                       (<>
                       <div className="modalTitleWrap">
                        <div>Loading...</div>
                        <div className='closeModal' onClick={toggleModal1}></div>
                        </div>             

                    <div className='locationInfo'>위치안내</div>
                    </>)} 
                </div>
                </div>
            </div>
            )}

            {modal2 && (
            <div className="modal">
                <div className="overlay"></div>
                <div className="modal-content">

                {array2? (<div className="modalTitleWrap">
                    <div className="mapModalTitle">{array2.name}</div>
                    <div className='closeModal' onClick={toggleModal2}></div>
                    </div>) : 
                (<></>)}  
                <div className="modalWrap1">
                    {array2? (<div className="modalWrap">
                    <img id="modalPic" src={array2.picture_path}/>
                    <p className="modalTxt">·{array2.description}</p>
                    <p className="modalTxt">·주소:{array2.address}</p>
                    <div className='locationInfo' onClick={() => toggleModal2_1(array2.latitude, array2.longitude)}>위치안내</div>
                    </div>) : 
                       (<>
                       <div className="modalTitleWrap">
                        <div>Loading...</div>
                        <div className='closeModal' onClick={toggleModal2}></div>
                        </div>             

                    <div className='locationInfo'>위치안내</div>
                    </>)} 
                </div>
                </div>
            </div>
            )}

            {modal3 && (
            <div className="modal">
                <div className="overlay"></div>
                <div className="modal-content">
                {array3? (<div className="modalTitleWrap">
                    <div className="mapModalTitle">{array3.name}</div>
                    <div className='closeModal' onClick={toggleModal3}></div>
                    </div>) : 
                (<></>)}  
                <div className="modalWrap1">
                    {array3? (<div className="modalWrap">
                    <img id="modalPic" src={array3.picture_path}/>
                    <p className="modalTxt">·{array3.description}</p>
                    <p className="modalTxt">·주소:{array3.address}</p>
                    <div className='locationInfo' onClick={() => toggleModal3_1(array3.latitude, array3.longitude)}>위치안내</div>
                    </div>) : 
                       (<>
                       <div className="modalTitleWrap">
                        <div>Loading...</div>
                        <div className='closeModal' onClick={toggleModal3}></div>
                        </div>             

                    <div className='locationInfo'>위치안내</div>
                    </>)} 
                </div>
            </div>
            </div>
            )}

             {modal4 && (
            <div className="modal">
                <div className="overlay"></div>
                <div className="modal-content">

                {array4? (<div className="modalTitleWrap">
                    <div className="mapModalTitle">{array4.name}</div>
                    <div className='closeModal' onClick={toggleModal4}></div>
                    </div>) : 
                (<></>)}  
                <div className="modalWrap1">
                    {array4? (<div className="modalWrap">
                    <img id="modalPic" src={array4.picture_path}/>
                    <p className="modalTxt">·{array4.description}</p>
                    <p className="modalTxt">·주소:{array4.address}</p>
                    <div className='locationInfo' onClick={() => toggleModal4_1(array4.latitude, array4.longitude)}>위치안내</div>
                    </div>) : 
                       (<>
                       <div className="modalTitleWrap">
                        <div>Loading...</div>
                        <div className='closeModal' onClick={toggleModal4}></div>
                        </div>             

                    <div className='locationInfo'>위치안내</div>
                    </>)} 
                </div>
                </div>
            </div>
            )}

            {modal5 && (
            <div className="modal">
                <div className="overlay"></div>
                <div className="modal-content">

                {array5? (<div className="modalTitleWrap">
                    <div className="mapModalTitle">{array5.name}</div>
                    <div className='closeModal' onClick={toggleModal5}></div>
                    </div>) : 
                (<></>)}  
                <div className="modalWrap1">
                    {array5? (<div className="modalWrap">
                    <img id="modalPic" src={array5.picture_path}/>
                    <p className="modalTxt">·{array5.description}</p>
                    <p className="modalTxt">·주소:{array5.address}</p>
                    <div className='locationInfo' onClick={() => toggleModal5_1(array5.latitude, array5.longitude)}>위치안내</div>
                    </div>) : 
                       (<>
                       <div className="modalTitleWrap">
                        <div>Loading...</div>
                        <div className='closeModal' onClick={toggleModal5}></div>
                        </div>             

                    <div className='locationInfo'>위치안내</div>
                    </>)} 
                </div>
            </div>
            </div>
            )}

            {modal6 && (
            <div className="modal">
                <div className="overlay"></div>
                <div className="modal-content">

                {array6? (<div className="modalTitleWrap">
                    <div className="mapModalTitle">{array6.name}</div>
                    <div className='closeModal' onClick={toggleModal6}></div>
                    </div>) : 
                (<></>)}  
                <div className="modalWrap1">
                    {array6? (<div className="modalWrap">
                    <img id="modalPic" src={array6.picture_path}/>
                    <p className="modalTxt">·{array6.description}</p>
                    <p className="modalTxt">·주소:{array6.address}</p>
                    <div className='locationInfo' onClick={() => toggleModal6_1(array6.latitude, array6.longitude)}>위치안내</div>
                    </div>) : 
                       (<>
                       <div className="modalTitleWrap">
                        <div>Loading...</div>
                        <div className='closeModal' onClick={toggleModal6}></div>
                        </div>             

                    <div className='locationInfo'>위치안내</div>
                    </>)} 
                </div>
                </div>
            </div>
            )}


{/*===============지도 모달창================== */}
{modal1_1 && (
            <div className="modal">
                <div className="overlay"></div>
                <div className="modal-content">
                    <div className='returnModal'  onClick={toggleModal1_1}></div>
                    <div className="mapWrap">
                        <div className="map-container">
                                <MapTest center={{ lat: state.center.lat, lng: state.center.lng }} isPanto={state.isPanto}/> 
                        </div>
                    </div>
                </div>
            </div>
        )}
            
{modal2_1 && (
            <div className="modal">
                <div className="overlay"></div>
                <div className="modal-content">
                    <div className='returnModal'  onClick={toggleModal2_1}></div>
                    <div className="mapWrap">
                        <div className="map-container">
                            <MapTest center={{ lat: state.center.lat, lng: state.center.lng }} isPanto={state.isPanto}/>   
                        </div>
                    </div>
                    </div>
            </div>
            )}

{modal3_1 && (
            <div className="modal">
                <div className="overlay"></div>
                <div className="modal-content">
                <div className='returnModal'  onClick={toggleModal3_1}></div>
                <div className="mapWrap">
                        <div className="map-container">
                            <MapTest center={{ lat: state.center.lat, lng: state.center.lng }} isPanto={state.isPanto}/> 
                        </div>
                    </div>
                </div>
            </div>
            )}

{modal4_1 && (
            <div className="modal">
                <div className="overlay"></div>
                <div className="modal-content">
                <div className='returnModal'  onClick={toggleModal4_1}></div>
                <div className="mapWrap">
                        <div className="map-container">
                            <MapTest center={{ lat: state.center.lat, lng: state.center.lng }} isPanto={state.isPanto}/> 
                        </div>
                    </div>
                </div>
            </div>
            )}

{modal5_1 && (
            <div className="modal">
                <div className="overlay"></div>
                <div className="modal-content">
                <div className='returnModal'  onClick={toggleModal5_1}></div>
                <div className="mapWrap">
                        <div className="map-container">
                            <MapTest center={{ lat: state.center.lat, lng: state.center.lng }} isPanto={state.isPanto}/> 
                        </div>
                    </div>
                </div>
            </div>
            )}

{modal6_1 && (
            <div className="modal">
                <div className="overlay"></div>
                <div className="modal-content">
                <div className='returnModal'  onClick={toggleModal6_1}></div>
                <div className="mapWrap">
                        <div className="map-container">
                            <MapTest center={{ lat: state.center.lat, lng: state.center.lng }} isPanto={state.isPanto}/> 
                        </div>
                    </div>
                </div>
            </div>
            )}
{/*===============지도 모달창================== */}
        </div>
        <Navbar/>
        </>
    )
}

export default Map;
