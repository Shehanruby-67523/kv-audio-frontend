export default function Testing() {
    let count = 0;

    return (
        <div className="w-full h-screen">    
            <h1>{count}</h1>

            <button onClick={
                () => {
                    count = count + 1
                }
             }>
                Count
             </button>
        </div>
    )
}