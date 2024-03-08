import { CircularProgress } from "@mui/material";

const loader = ({ full }) => {
    <div className={`root_loader ${full ? 'full' : ''}`}>
        <CircularProgress />
    </div>
}

export default loader;