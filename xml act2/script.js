document.addEventListener("DOMContentLoaded", function () {
    fetch("movies.xml")
        .then(response => response.text()) 
        .then(str => new window.DOMParser().parseFromString(str, "text/xml")) 
        .then(data => {
            const movies = data.getElementsByTagName("movie");
            let output = "";

            for (let i = 0; i < movies.length; i++) {
                let poster = movies[i].getElementsByTagName("poster")[0].textContent;
                let title = movies[i].getElementsByTagName("title")[0].textContent;
                let year = movies[i].getElementsByTagName("year")[0].textContent;
                let genre = movies[i].getElementsByTagName("genre")[0].textContent;
                let director = movies[i].getElementsByTagName("director")[0].textContent;
                let summary = movies[i].getElementsByTagName("summary")[0].textContent;
                

                output += `
                    <div class="movie">
                        <img src="${poster}" alt="${title}" width="200">
                        <h3>${title} (${year})</h3>
                        <p><strong>Genre:</strong> ${genre}</p>
                        <p><strong>Director:</strong> ${director}</p>
                        <p><strong>Summary:</strong> ${summary}</p>
                    </div>
                `;
            }

            document.getElementById("movies-container").innerHTML = output;
        })
        .catch(error => console.error("Error loading XML:", error));
});
