import axios from 'axios';
import React,{useState,useEffect} from 'react';

const client = () => {
    const [tabledata, seTableData]= useState({

    });
    const getData=()=>{
        const resp=axios.get("/http://localhost:3000/Data/");
        seTableData(resp);
    }
useEffect(()=>{
    getData();
},[])

  return (
    <div>
      {tabledata}
    </div>
  )
}

export default client
