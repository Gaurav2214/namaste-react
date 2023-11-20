import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {
        window.addEventListener("offLine", () => {
            setOnlineStatus(false);
        });
    
        window.addEventListener("onLine", () => {
            setOnlineStatus(true);
        });
    },[])

    return onlineStatus;
}

export default useOnlineStatus;