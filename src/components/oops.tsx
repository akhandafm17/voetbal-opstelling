import './oops.css';
import OopsImage from "../assets/img/error.png";
import RefreshIcon from '@mui/icons-material/Refresh';
import IconButton from '@mui/material/IconButton';
import { useHistory } from 'react-router-dom';

function Oops(){
    const history = useHistory();

    function refresh(){
        // eslint-disable-next-line no-restricted-globals
        location.reload()
    }
    return(
        <>
        <div className="oops">
            <img className="imgoops" alt="404 error"src={OopsImage}/>
            <h2 className="titleoops">Something went wrong while fetching the Data</h2>
            <div className="iconrefresh">
                <IconButton onClick={refresh} size="large">
                 <RefreshIcon color="info"/>
                </IconButton>
            </div>
        </div>
        </>
    );
}
export default Oops;