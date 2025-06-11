import { useEffect } from "react";

function useLogVisitor() {
  useEffect(() => {
    //get user ip and send through netlify function to google spreadsheet
    (async () => {
      try {
        const ipRes = await fetch("https://api.ipify.org?format=json");
        const { ip } = await ipRes.json();

        await fetch("/.netlify/functions/logVisitor", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ip,
            url: window.location.href,
          }),
        });
      } catch (error) {
        console.error("Visitor log failed: ", error);
      }
    })();
  }, []);
}

export default useLogVisitor;
