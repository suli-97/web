const req = new XMLHttpRequest();
const url = "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3904899539,3422603776&fm=26&gp=0.jpg";
const img = document.getElementById("img");


fetch(url)
    .then(response => response.blob())
    .then(blob => {
        img.src = URL.createObjectURL(blob);
    });