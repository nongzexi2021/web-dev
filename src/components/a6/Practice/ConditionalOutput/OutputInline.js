import React from "react";
const OutputInline = () => {
    const loggedIn = false;
    return (
        <>
            { loggedIn && <h2>Welcome Inline</h2>}
            {!loggedIn && <h2>Please login Inline</h2>}
        </>
    );
};
export default OutputInline;
