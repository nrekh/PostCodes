import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPostCodeDataApi, getNearestApi } from "./api";
import './App.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

//Displays the postcode information
const PostcodeDisplay = () => {
    const [refetchData, setRefetchData] = useState(true);
    const [postData, setPostData] = useState([]);
    const [nearData, setNearData] = useState([]);
    const params = useParams();
    const navigate = useNavigate();

    const handleError = 
    (error) => {
        //handle api errors
        if (error.response && error.response.data && error.response.data.error) {
            alert(error.response.data.error);
            navigate('/');            
        }
        else if(error.message){
            alert(error.message);
            navigate('/');       
        }
    }
    const getPostCodeData =
        useCallback(
            async (postcode) => {
                const response = await getPostCodeDataApi(postcode).catch(handleError);
                if (response && response.status === 200) {
                    setPostData(response.result);
                }
            },
            [setPostData]
        );
    const getNearestRegions =
        useCallback(
            async (postcode) => {
                const response = await getNearestApi(postcode).catch(handleError);
                if (response && response.status === 200) {
                    setNearData(response.result);
                }
            },
            [setNearData]
        );
    // Get post code and nearest postcodes data when the page loads
    const fetchData = useCallback(
        async () => {
            getPostCodeData(params.postcode);
            getNearestRegions(params.postcode);
            setRefetchData(false);
        },
        [setRefetchData],
    );

    useEffect(
        () => {
            refetchData && fetchData();
        },
        [fetchData, refetchData]
    );

    return (
        <div className="postDisplay">
            <p>The post code that you searched for {postData.postcode} is in the country {postData.country} and
            belongs to the {postData.region} region.</p>
            <p>The following are some of the nearest postcodes.</p>
            <TableContainer className="tableClass" component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Postcode</TableCell>
                            <TableCell align="right">Country</TableCell>
                            <TableCell align="right">Region</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {nearData.map((row) => (
                            <TableRow
                                key={row.postcode}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.postcode}
                                </TableCell>
                                <TableCell align="right">{row.country}</TableCell>
                                <TableCell align="right">{row.region}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default PostcodeDisplay