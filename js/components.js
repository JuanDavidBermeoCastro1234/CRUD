export const mytable = (data) =>{


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
        tdEmail.textContent = element.email;
        const tdRoles = document.createElement("td")
        tdRoles.textContent = element.rol;
        const tdCreate = document.createElement("td")
        tdCreate.textContent = new Date(element.createAt *1000);
        const tdUpdate = document.createElement("td")
        tdUpdate.textContent = new Date(element.Update * 1000);

        tr.append(tdId,tdName,tdLastname,tdAge,tdEmail,tdRoles,tdCreate,tdUpdate);
        tdbody.append(tr);
        

        



    });



    console.log(tdbody);
}