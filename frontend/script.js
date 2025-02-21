const API_BASE_URL = "http://localhost:5001/api"; // Change when deployed

function fetchData(type) {
    const count = document.getElementById("count").value || 5; // Default to 5 if empty

    fetch(`${API_BASE_URL}/${type}?count=${count}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("output").innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        })
        .catch(error => console.error("Error fetching data:", error));
}