import React from 'react'
import SelectYear from './SelectYear'
const HeaderDashBoard: React.FC=()=>{
    return(
        <div style={{
            width:'100%',
            display: 'flex',
            flexDirection:'row',
            justifyContent: 'space-around',
            alignItems:'center',
            gap: '30px',
        }}>
            <div style={{fontSize:'30px', fontWeight:'600'}}>Dashboard</div>
            <div><SelectYear/></div>
        </div>
    )
}
export default HeaderDashBoard