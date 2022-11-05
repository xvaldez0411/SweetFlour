import { textAlign } from '@mui/system'
import {makeStyles} from 'tss-react/mui'

const useStyles = makeStyles()((theme)=>{
    return {
        linkBar: {
            display:'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '20%',
        },
        
    }
})


export default useStyles