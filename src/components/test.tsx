import { useState } from "react";

const Test = (): JSX.Element => {
    const [count, setCount] = useState<number>(0);
    return (
        <>
            <div className="font-bold">{count}</div>
            <button
                onClick={() => {
                    console.log("first");
                    setCount(count + 1); 
                }}
            >
                increase
            </button>
        </>
    );
};

export default Test;
