import {useState, useEffect} from 'react';

const useNetwork = () => {
    const [isOnline, setOnline] = useState(window.navigator.onLine);

 useEffect(() => {
   const updateNetwork = () => {
     setOnline(window.navigator.onLine)
   }
window.addEventListener("offline", updateNetwork);
window.addEventListener("online", updateNetwork)

            return () => {
         window.removeEventListener("offline", updateNetwork);
         window.removeEventListener("online", updateNetwork);
      };
});

    return isOnline;
}

export default useNetwork;