const API_BASE_URL = "http://localhost:5001/api"; // Change this when deployed

function fetchData(type) {
    fetch(`${API_BASE_URL}/${type}?count=5`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("output").innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        })
        .catch(error => console.error("Error fetching data:", error));
}