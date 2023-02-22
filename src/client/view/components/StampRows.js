import React , { useState , useContext , useEffect } from 'react'
import { AuthContext } from '../../context/Authcontext';
import axios from 'axios'

function StampRows() {

  // try to use member's information
  const {currentUser } = useContext(AuthContext);
  const [stampRecord, setStampRecord] = useState([]);

    // call the fetchRecordRow function to populate the recordRow state

    useEffect(() => {
        const fetchStampRecord = async () => {
            try {
            // hard coding
            const member_no = currentUser?.no;
            //학교 컴퓨터
            //const response= await axios.get ("http://192.168.0.82:8080/api/hint")
            
            const response= await axios.get (`https://api-fvwt.onrender.com/api/record/stamp/${member_no}`);
            setStampRecord(response.data);
            } catch (err) {
                console.log(err);
            }
        }
    
        fetchStampRecord();
    },[]);


 // loop through the recordRow data and render the corresponding img element based on a matching data-code
  const recordRows = stampRecord.map((row, index) => {
    //console.log(row.code+row.visited)
    let imageSource = row.visited === "Y" ? `../file/${row.code}_V.png` : `../file/${row.code}.png`;
    return (
      <img key={index} src={`${imageSource}`} alt={row.code}/>
    );
  });



  return (
    <div className='stampRow'>{recordRows}</div>
  )

}

export default StampRows