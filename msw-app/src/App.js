import React, { useState, useEffect } from "react";

function App() {
  const [portCalls, setPortCalls] = useState(0);
  const [firstPortCall, setFirstPortCall] = useState(0);

  useEffect(() => {
    fetch("https://meri.digitraffic.fi/api/port-call/v1/port-calls")
      .then((response) => response.json())
      .then((data) => {
        setPortCalls(data.portCalls.length);
        console.log(`There are ${data.portCalls.length} portcalls.`);

        setFirstPortCall(data.portCalls[0]);
      });
  }, []);

  return (
    <div>
      <p>There are {portCalls} portcalls.</p>
      <hr />
      <p>Example portcall:</p>
      {firstPortCall && <pre>{JSON.stringify(firstPortCall, null, 4)}</pre>}
    </div>
  );
}

export default App;
