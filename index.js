
document.querySelector("button").addEventListener("click",result)

var container=document.createElement("div");
container.className="container";

var row=document.createElement("div");
row.className="row";


async function result(){
    try {
        var ask = document.getElementById("word").value; 
        var data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${ask}`);
        var res = await data.json();
        console.log(res);
        var col=document.createElement("div");
        col.className="col-lg-4"
        col.innerHTML=`<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Meaning:</h5>
          <p class="card-text">${res[0].meanings[0].synonyms}</p>
        </div>
      </div>`
      row.append(col);
      container.append(row);
      document.body.append(container);
    } catch (error) {
        console.log(error);
    }
}
