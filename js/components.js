export const mytable = (data) => ̈́{



    const tdbody = document.createElement("tbody");
    data.forEach(element => {
        const tr = document.createElement("tr")
        const tdId = document.createElement("td")
        tdId.textContent = element.id
        const tdName = document.createElement("td")
        tdName = textContent = element.name
        const tdLastname = document.createElement("td")
        tdLastname.textContent = element.lastname;
        const tdAge = document.createElement("td")
        tdAge.textContent = element,age;
        const tdEmail = document.createElement ("td")
        



    });



    console.log(tdbody);
}