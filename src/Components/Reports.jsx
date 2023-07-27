
import React from 'react';
import { Button, FormLabel, TextField, Typography, } from '@mui/material';
import {  Table, TableHead, TableRow, TableBody, TableCell, } from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import { FormControl, MenuItem, Select, } from '@mui/material';
import { Box } from '@mui/system';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import { useState} from 'react';
import PdfDocument from './PdfDocument';


const Reports = () => {

  const [selectedReport, setSelectedReport] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const allData = [
    {
      id: 1,
      Asset: 'Smart PFT USB',
      Dept: 'Radiology',
      SerialNo: 'AB34456TR',
      Status: 'Calibrated',
      Date: '2023-04-01',
      DueDate: '2023/09/05',
      ReportType: 'Service',
    },
    {
      id: 2,
      Asset: 'Apolo PFT USB',
      Dept: 'ECG',
      SerialNo: 'BB34456TR',
      Status: 'Calibrated',
      Date: '2023-04-02',
      DueDate: '2023/05/05',
      ReportType: 'Service',
    },
    {
      id: 3,
      Asset: 'Max USB Smart',
      Dept: 'ICU',
      SerialNo: 'CB34456TR',
      Status: 'Calibrated',
      Date: '2023-04-03',
      DueDate: '2023/09/06',
      ReportType: 'Service',
    },
    {
      id: 4,
      Asset: 'Smart PFT USB',
      Dept: 'Radiology',
      SerialNo: 'AB34456TR',
      Status: 'Calibrated',
      Date: '2023-04-04',
      DueDate: '2023/09/05',
      ReportType: 'Service',
    },
    {
      id: 5,
      Asset: 'Apolo PFT USB',
      Dept: 'ECG',
      SerialNo: 'BB34456TR',
      Status: 'Calibrated',
      Date: '2023-04-05',
      DueDate: '2023/05/05',
      ReportType: 'Service',
    },
    {
      id: 6,
      Asset: 'Max USB Smart',
      Dept: 'ICU',
      SerialNo: 'CB34456TR',
      Status: 'Calibrated',
      Date: '2023-04-06',
      DueDate: '2023/09/06',
      ReportType: 'Service',
    },
    {
      id: 7,
      Asset: 'Smart PFT USB',
      Dept: 'Radiology',
      SerialNo: 'AB34456TR',
      Status: 'Calibrated',
      Date: '2023-04-07',
      DueDate: '2023/09/05',
      ReportType: 'Service',
    },
    {
      id: 8,
      Asset: 'Apolo PFT USB',
      Dept: 'ECG',
      SerialNo: 'BB34456TR',
      Status: 'Calibrated',
      Date: '2023-04-08',
      DueDate: '2023/05/05',
      ReportType: 'Service',
    },
    {
      id: 9,
      Asset: 'Max USB Smart',
      Dept: 'ICU',
      SerialNo: 'CB34456TR',
      Status: 'Calibrated',
      Date: '2023-04-09',
      DueDate: '2023/09/06',
      ReportType: 'Service',
    },
  
    {
      id:1,
      Asset:'Inci PFT USB',
      Dept:'Radiology',
      SerialNo:'DB34456TR',
      Date:'2023-04-01',
      DueDate:'2023/06/05',
      ReportType: 'Incident',
  },
  {
      id:2,
      Asset:'Apolo PFT USB',
      Dept:'ECG',
      SerialNo:'EB34456TR',
      Date:'2023-04-02',
      DueDate:'2023/09/05',
      ReportType: 'Incident',
  },
  {
      id:3,
      Asset:'Max USB Smart',
      Dept:'ICU',
      SerialNo:'FB34456TR',
      Date:'2023-04-03',
      DueDate:'2023/09/06',
      ReportType: 'Incident',
  },
  {
    id:4,
    Asset:'Inci PFT USB',
    Dept:'Radiology',
    SerialNo:'DB34456TR',
    Date:'2023-04-04',
    DueDate:'2023/06/05',
    ReportType: 'Incident',
},
{
    id:5,
    Asset:'Apolo PFT USB',
    Dept:'ECG',
    SerialNo:'EB34456TR',
    Date:'2023-04-05',
    DueDate:'2023/09/05',
    ReportType: 'Incident',
},
{
    id:6,
    Asset:'Max USB Smart',
    Dept:'ICU',
    SerialNo:'FB34456TR',
    Date:'2023-04-06',
    DueDate:'2023/09/06',
    ReportType: 'Incident',
},
{
  id:7,
  Asset:'Inci PFT USB',
  Dept:'Radiology',
  SerialNo:'DB34456TR',
  Date:'2023-04-07',
  DueDate:'2023/06/05',
  ReportType: 'Incident',
},
{
  id:8,
  Asset:'Apolo PFT USB',
  Dept:'ECG',
  SerialNo:'EB34456TR',
  Date:'2023-04-08',
  DueDate:'2023/09/05',
  ReportType: 'Incident',
},
{
  id:9,
  Asset:'Max USB Smart',
  Dept:'ICU',
  SerialNo:'FB34456TR',
  Date:'2023-04-09',
  DueDate:'2023/09/06',
  ReportType: 'Incident',
},
  
{
      id: 1,
      Asset: 'Narayan PFT USB',
      Dept: 'Radiology',
      SerialNo: 'GB34456TR',
      Status: 'Calibrated',
      Date: '2023-04-01',
      DueDate: '2023/06/05',
      ReportType: 'Calibration',
    },
    {
      id: 2,
      Asset: 'Subbhaiha PFT USB',
      Dept: 'ECG',
      SerialNo: 'HB34456TR',
      Status: 'Calibrated',
      Date: '2023-04-02',
      DueDate: '2023/09/05',
      ReportType: 'Calibration',
    },
    {
      id: 3,
      Asset: 'Megan USB Smart',
      Dept: 'ICU',
      SerialNo: 'IB34456TR',
      Status: 'Calibrated',
      Date: '2023-04-03',
      DueDate: '2023/09/06',
      ReportType: 'Calibration',
    },
    {
      id: 4,
      Asset: 'Narayan PFT USB',
      Dept: 'Radiology',
      SerialNo: 'GB34456TR',
      Status: 'Calibrated',
      Date: '2023-04-04',
      DueDate: '2023/06/05',
      ReportType: 'Calibration',
    },
    {
      id: 5,
      Asset: 'Subbhaiha PFT USB',
      Dept: 'ECG',
      SerialNo: 'HB34456TR',
      Status: 'Calibrated',
      Date: '2023-04-05',
      DueDate: '2023/09/05',
      ReportType: 'Calibration',
    },
    {
      id: 6,
      Asset: 'Megan USB Smart',
      Dept: 'ICU',
      SerialNo: 'IB34456TR',
      Status: 'Calibrated',
      Date: '2023-04-06',
      DueDate: '2023/09/06',
      ReportType: 'Calibration',
    },
    {
      id: 7,
      Asset: 'Narayan PFT USB',
      Dept: 'Radiology',
      SerialNo: 'GB34456TR',
      Status: 'Calibrated',
      Date: '2023-04-07',
      DueDate: '2023/06/05',
      ReportType: 'Calibration',
    },
    {
      id: 8,
      Asset: 'Subbhaiha PFT USB',
      Dept: 'ECG',
      SerialNo: 'HB34456TR',
      Status: 'Calibrated',
      Date: '2023-04-08',
      DueDate: '2023/09/05',
      ReportType: 'Calibration',
    },
    {
      id: 9,
      Asset: 'Megan USB Smart',
      Dept: 'ICU',
      SerialNo: 'IB34456TR',
      Status: 'Calibrated',
      Date: '2023-04-09',
      DueDate: '2023/09/06',
      ReportType: 'Calibration',
    },
  ];

  const handleSelect = (options) => {
    setSelectedReport(options)
  }

  const handleReportTypeChange = (event) => {
    setSelectedReport(event.target.value);
  };

  const handleFromDateChange = (event) => {
    setFromDate(event.target.value);
  };

  const handleToDateChange = (event) => {
    setToDate(event.target.value);
  };

  

  const handleSearch = () => {
    const filteredData = allData.filter((data) => {
      const dataDate = new Date(data.Date);
      const fromDateObj = new Date(fromDate);
      const toDateObj = new Date(toDate);
      const isReportTypeMatch = data.ReportType === selectedReport;
      const isDateInRange = dataDate >= fromDateObj && dataDate <= toDateObj;
      return isReportTypeMatch && isDateInRange;
    });
    setFilteredData(filteredData);
  };

  const handleDownload = () => {
    
    if (filteredData.length > 0) {
      const blob = new Blob([<PdfDocument data={filteredData} />], {
        type: 'application/pdf',
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'report.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  
  }


    return ( 
        <Box minWidth='100vw' minHeight='100%' sx={{background:'#FAF5EE'}}>
         <Box marginLeft={{xl:'250px', lg:'90px'}} paddingY="10px">
                <Typography sx={{fontSize:{xl:'24px', lg:'24px', md:'22px', sm:'20px', xs:'20px'}, fontWeight:'500', color:'#FF731D', marginLeft:'20px', width:{xl:'220px', lg:'220px', md:'220px', sm:'120px', xs:'80px'} }} >Reports</Typography> 
          <Box sx={{maxWidth:'1030px', display:{xl:'flex', lg:'flex', md:'flex', sm:'block'}, justifyContent:'space-evenly', paddingY:'20px', height:{xl:'145px', lg:'145px', md:'145px', sm:'300px'},  background:'#FFFFFF', borderRadius:'15px',boxShadow: '0px 0px 4px 0px #00000033', }}>
      <Box sx={{display:'block', marginLeft:{xl:'0px', lg:'0px', md:'0px', sm:'130px', xs:'75px'}}}>
            <Box>
            <label style={{minWidth:'230px', fontSize:'18px', fontWeight:'500'}}>What Type of report ?</label>
            </Box>
            <FormControl
            sx={{  width: '250px', minHeight: 50 }}
             >
              <Select
                value={selectedReport}
                onChange={handleReportTypeChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                sx={{
                  background: '#EFF5FE',
                  border: 'none',
                  minWidth: '330px',
                  boxShadow: '0px 0px 4px 0px #00000033',
                  color:'#1746A2',
                  fontSize:'18px',
                  fontWeight:'500'
                }}
              >
                <MenuItem value="">
                  <FormLabel
                    sx={{ color: '#1746A2', fontSize: '18px', fontWeight: '500' }}
                  >
                    Select Report
                  </FormLabel>
                </MenuItem>
                <MenuItem
                  onClick={() => handleSelect('Service')}
                  sx={{
                    color: selectedReport === 'Service' ? '#FF731D' : '#212427',
                    fontSize: '16px',
                    fontweight: '500',
                  }}
                  value="Service"
                >
                  Service Report
                </MenuItem>
                <MenuItem
                  onClick={() => handleSelect('Incident')}
                  sx={{
                    color: selectedReport === 'Incident' ? '#FF731D' : '#212427',
                    fontSize: '16px',
                    fontweight: '500',
                  }}
                  value="Incident"
                >
                  Incident Report
                </MenuItem>
                <MenuItem
                  onClick={() => handleSelect('Calibration')}
                  sx={{
                    color: selectedReport === 'Calibration' ? '#FF731D' : '#212427',
                    fontSize: '16px',
                    fontweight: '500',
                  }}
                  value="Calibration"
                >
                  Calibration Report
                </MenuItem>
              </Select>
            </FormControl>
            </Box>

      
     <Box display={{xl:'flex', lg:'flex', md:'flex', sm:'flex', xs:'flex'}} sx={{marginLeft:{xl:'0px', lg:'0px', md:'0px', sm:'38px', xs:'-18px'}}}>
     <Box display='block' marginLeft='80px'>
      <Box>
      <label style={{minWidth:'100px',fontSize:'18px', fontWeight:'500', }}>From</label>
      </Box>
      <TextField type='date' value={fromDate}
        onChange={handleFromDateChange} 
        sx={{maxWidth:"170px", input:{color:'#1746A2'} , height:'54px',background:'#EFF5FE' , border:'none',  boxShadow: '0px 0px 4px 0px #00000033'}}></TextField>
      </Box>
      
      
      <Box display='block' marginLeft='15px'>
      <Box>
      <label style={{minWidth:'0px',fontSize:'18px', fontWeight:'500',}}>To</label>
      </Box>
      <TextField type='date' value={toDate}
        onChange={handleToDateChange} 
        sx={{maxWidth:"170px",input:{color:'#1746A2'}, height:'54px',background:'#EFF5FE' , border:'none',boxShadow: '0px 0px 4px 0px #00000033'}}></TextField>
      </Box>
     </Box>
      

      <Box marginTop='25px' sx={{marginLeft:{xl:'0px', lg:'0px', md:'0px', sm:'210px', xs:'160px'}}}>
      <Button variant='contained' onClick={handleSearch} sx={{minWidth:"161px",  textTransform:'none', height:'48px', background:'#1746A2', fontSize:'16px', fontWeight:'500', minHeight:50, border:'none', borderRadius:'25px',boxShadow: '0px 0px 4px 0px #00000033'}}>Search</Button>
      </Box>

      </Box>
        

          <Box sx={{maxWidth:'1030px', minHeight:'100%', background:'#FFFFFF', borderRadius:'15px', boxShadow: '0px 0px 4px 0px #00000033', marginTop:'20px', display:'flex', flexDirection:'column' ,justifyContent:'center', alignItems:'center'}}>
            
         {selectedReport && filteredData.length > 0 ? ( 
            <TableContainer sx={{ maxWidth:'1030px', minHeight:'100%',borderRadius:'15px', }} aria-label="simple table">
                <Table>
                    <TableHead width='1030px' height='50px'>
                    <TableRow sx={{background:'#EFF5FE' }}>
                    <TableCell maxWidth='1030px'>
                    <Box display='flex'>
                    <Typography align="left" sx={{fontSize:'20px', fontWeight:'500', color:'#1746A2',width:'280px',height:'30px'}} >Asset Name</Typography>
                    <Typography align="left" sx={{fontSize:'20px', fontWeight:'500', color:'#1746A2',width:'200px',height:'30px',}} >Serial No</Typography>
                    <Typography align="left" sx={{fontSize:'20px', fontWeight:'500', color:'#1746A2',height:'30px',width:'180px', marginLeft:'-25px'}} >Date</Typography>
                    <Typography align="left" sx={{fontSize:'20px', fontWeight:'500', color:'#1746A2',height:'30px',width:'180px'}} >Due Date</Typography>
                    <Typography align="left" sx={{fontSize:'20px', fontWeight:'500', color:'#1746A2',height:'30px',}} >Download</Typography>
                    </Box>
                </TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody >
                    {filteredData.map((request, index) => (
                        <TableRow display="flex"  key={index}>
                        <TableCell maxWidth='1030px' sx={{background:'',borderColor:'black', padding:'10px'}}>
                        <Box display='flex' width='1030px'>
                        <Typography align="left" sx={{fontSize:'18px', fontWeight:'500', width:'280px',height:'30px', borderColor:'black', color:'#1746A2'}} component="th">{request.Asset}</Typography>
                        <Typography align="left" sx={{fontSize:'18px', fontWeight:'500', color:'#212427',width:'180px',height:'30px', borderColor:'black',display:'block', }}>{request.SerialNo}</Typography>
                        <Typography align="left" sx={{fontSize:'18px', fontWeight:'500', color:'#212427',height:'30px',width:'180px', borderColor:'black',display:'block', }}>{request.Date}</Typography>
                        <Typography align="left" sx={{fontSize:'18px', fontWeight:'500', color:'#212427',height:'30px',width:'180px', borderColor:'black',display:'block', }}>{request.DueDate}</Typography>
                        <Button onClick={() => handleDownload(request)}><DownloadForOfflineIcon sx={{color:'#FF731D'}}></DownloadForOfflineIcon></Button>
                        </Box>
                        </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                    </Table>
                </TableContainer>
              ):(
                <Box sx={{display:'flex', flexDirection:'column' ,justifyContent:'center', alignItems:'center', paddingY:'20px'}}>
                <img width='358px' height='360px' src='/images/Reports.svg'alt="" />
                <Typography sx={{fontSize:'26px', fontweight:'400'}}>No Reports</Typography>
                <Button variant='contained' sx={{width:"192px", height:'55px', marginRight:'10px', background:'#1746A2',fontSize:'16px', fontWeight:'500', textTransform:'none', minHeight:50, border:'none', borderRadius:'35px',boxShadow: '0px 0px 4px 0px #00000033'}}>Go Home</Button>
              </Box>
              )}
            </Box>
          </Box>
         </Box>
       
     );
}
 
export default Reports;