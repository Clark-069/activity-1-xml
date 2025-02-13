
function loadXML() {
    fetch('/students.xml')
        .then(response => response.text())
        .then(xmlText => {
            let parser = new DOMParser();
            let xmlDoc = parser.parseFromString(xmlText, "text/xml");
            let students = xmlDoc.getElementsByTagName("student");
            let tableBody = document.getElementById("studentTable");

            for (let i = 0; i < students.length; i++) {
                let studentID = students[i].getElementsByTagName("studentID")[0].textContent;
                let lastName = students[i].getElementsByTagName("lastName")[0].textContent;
                let firstName = students[i].getElementsByTagName("firstName")[0].textContent;
                let age = students[i].getElementsByTagName("age")[0].textContent;
                let course = students[i].getElementsByTagName("course")[0].textContent;
                let email = students[i].getElementsByTagName("email")[0].textContent;

                let row = `<tr>
                    <td>${studentID}</td>
                    <td>${lastName}</td>
                    <td>${firstName}</td>
                    <td>${age}</td>
                    <td>${course}</td>
                    <td>${email}</td>
                </tr>`;
                tableBody.innerHTML += row;
            }
        })
        .catch(error => console.error("Error loading XML:", error));
}


window.onload = loadXML;
