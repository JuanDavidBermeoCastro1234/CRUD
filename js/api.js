export const find = async() =>{
    const url = new URL ("https://6734e0be5995834c8a913525.mockapi.io/")
    url.pathname += "inform"
    const response = await fetch((url.toString), {method: " get"})
    return await response.json;
    
}
export const search = async (id) =>{
    const url = new URL ("https://6734e0be5995834c8a913525.mockapi.io/")
    url.pathname += `inform/${id}`
    const response = await fetch (url.toString(),{method: "get"});
    return await response.json;
}
export const save = async (data) =>{
    const url = new URL ("https://6734e0be5995834c8a913525.mockapi.io/")
    Headers.set("content-Type", "application/json");
    url.pathname += `inform`;
    const config ={
        method: "post",
        Headers,
        body: JSON.stringify(data)
    }
    const response = await fetch(url.toString(),config);
    return await response.json();
    
}

export const edit = () =>{
    
}
export const remove = () =>{
    
}