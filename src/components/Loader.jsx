import { ScaleLoader } from "react-spinners";

const Loader = () => {
    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-116px)]">
            <ScaleLoader size ={100} color="#F92FD3"></ScaleLoader> 
        </div>
    );
};

export default Loader;
