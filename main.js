let datos={
    a:1,
    c:3,
    b:2
};
let datos2={
    c:"Google",
    a:"Apple",
    b:"Microsoft"
}
let datos3={
    key8:true,
    key1:false,
    key5:undefined
}
let objetoNuevo={};
let objetollaves=[];
let objetovalores=[];
function ORDENAR(objetooo){//ordenar las llaves de nuestro objeto alfabeticamente 
    for(let llave of Object.keys(objetooo).sort())
    {
        objetoNuevo[llave]=objetooo[llave];
    }
    objetollaves=Object.keys(objetoNuevo);
    objetovalores=Object.values(objetoNuevo);
    return {
        objetoNuevo,
        objetollaves,
        objetovalores,
    }
}
console.log(datos)
console.log(ORDENAR(datos).objetoNuevo);
console.log(ORDENAR(datos).objetollaves,ORDENAR(datos).objetovalores);
objetoNuevo={};
objetollaves=[];
objetovalores=[];

console.log(datos2)
console.log(ORDENAR(datos2).objetoNuevo);
console.log(ORDENAR(datos2).objetollaves,ORDENAR(datos2).objetovalores);
objetoNuevo={};
objetollaves=[];
objetovalores=[];

console.log(datos3);
console.log(ORDENAR(datos3).objetoNuevo);
console.log(ORDENAR(datos3).objetollaves,ORDENAR(datos3).objetovalores);
