var catUrl= "https://api.thecatapi.com/v1/breeds?api_key=de0110f5-c08f-465d-b969-3d17b085f063"

fetch(catUrl)
.then(res=>{
    return res.json();
})
.then(result=>{
    console.log(result);
   display(result);
})
.catch(error=>{
    document.body.append(error);
})

function display(data){

    var row=document.getElementById("row");

    data.forEach((element) => {

        let col=document.createElement('div');
        col.setAttribute('class','col-sm-12')

        let card=document.createElement('div');
        card.setAttribute('class','card');

        let cimg=document.createElement('img');
        cimg.setAttribute('class','card-img-top');
        cimg.src=element.image.url;

        let cbody=document.createElement('div');
        cbody.setAttribute('class','card-body');

        let h4=document.createElement('h4');
        h4.setAttribute('class','card-title');
        h4.innerHTML=element.name;

        let p=document.createElement('p');
        p.setAttribute('class','card-text');
        p.innerHTML=element.description;

        let ahref=document.createElement('a');
        ahref.setAttribute('class','btn btn-primary');
        ahref.innerHTML="Learn More"
        ahref.href=element.cfa_url;

        cbody.append(h4,p,ahref);
        card.append(cimg,cbody);
        col.append(card);
        row.append(col);

    })
}