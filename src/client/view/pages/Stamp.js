import React,{ useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../context/Authcontext';
import StampRows from '../components/StampRows';
import Navbar from '../components/Navbar';
import axios from 'axios'
import '../../css/Stamp.css'


function Stamp() {

    const {currentUser } = useContext(AuthContext);


        //API에 데이터 호출
        const [locationCount, setLocationCount] =useState([]);
        const [recordCount, setRecordCount] =useState([]);
        useEffect(() => {
            const fetchLocationCount = async() => {
                try {
                //학교 컴퓨터
                //const response= await axios.get ("http://192.168.0.82:8080/api/hint")
                const response= await axios.get ("https://api-fvwt.onrender.com/api/location");
                setLocationCount(response.data.length);
                //console.log(response.data.length);
                } catch (err) {
                    console.log(err);
                }
            }

            const fetchRecordCount = async() => {

                try {
                // hard coding
                const member_no = currentUser?.no;
                //학교 컴퓨터
                //const response= await axios.get ("http://192.168.0.82:8080/api/hint")
                const response= await axios.get (`https://api-fvwt.onrender.com/api/record/${member_no}`);
                setRecordCount(response.data.length);
                //console.log(response.data.length)
                } catch (err) {
                    console.log(err);
                }
            }


            fetchLocationCount();
            fetchRecordCount();
        },[]);


    return (
        <>
        <div id="stamp">
        <h1>스탬프 <span>Stamp</span></h1>
  
            
        <div id='stampwrap'>
            <div id="stampColum">
              <StampRows/> 
        
            </div>

            <div id="stampBtnWrap">
                <div className="stampBtn"><span>{recordCount}</span><span>/{locationCount}</span></div>
                <div className="stampBtn">쿠폰교환</div>
            </div>
        </div>
        
        
        
        </div>
        <Navbar/>
        </>
        
    )
}

export default Stamp;
