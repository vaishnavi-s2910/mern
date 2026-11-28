
import { useState, useEffect } from "react";

function Fetchapi() {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/quotes")
            .then(response => response.json())
            .then(data => {
                setQuotes(data.quotes);
            })
            .catch(error => console.log("Error:", error));
    }, []);

    return (
        <div>
            <h1>Famous Quotes</h1>

            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Quote</th>
                        <th>Author</th>
                    </tr>
                </thead>

                <tbody>
                    {quotes.map(quote => (
                        <tr key={quote.id}>
                            <td>{quote.id}</td>
                            <td>{quote.quote}</td>
                            <td>{quote.author}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Fetchapi;
