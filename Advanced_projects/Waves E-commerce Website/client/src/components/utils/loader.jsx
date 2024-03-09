/* eslint-disable react/prop-types */
import { CircularProgress } from "@mui/material";

const Loader = ({ full }) => {
    return (
        <div className={`root_loader ${full ? 'full' : ''}`}>
            <CircularProgress />
        </div>
    )
}

export default Loader;