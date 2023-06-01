import React, { useState,  } from "react";
import { useNavigate } from "react-router-dom";
import './App.css'

//render postcode search form and navigate to the page which displays postcode details after submission
const Postcodes = () => {
    const [inputPostCode, setInputPostCode] = useState([]);
    const navigate = useNavigate();


    const submitPostcode = (e) => {
        e.preventDefault();
        navigate(`/${inputPostCode}`);
    };

    return (
        <div>
            <form
                className='postCodeForm'
                onSubmit={submitPostcode}>
                <input
                    type="text"
                    value={inputPostCode}
                    placeholder={'Enter Postcode'}
                    onChange={(event) => setInputPostCode(event.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default Postcodes