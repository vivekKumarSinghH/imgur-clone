let x=document.getElementById("imgurPosts")




async function getData(title,page) {
    let data = await fetch(
      `https://www.omdbapi.com/?apikey=c44a58d8&s=${title}&page=${page}`
    );
    let res = await data.json();
    // console.log(res.Search)
    displayData(res.Search);
  }
  getData("top",1);

 let count=1,val
  
  function searchText() {
    let input = document.getElementById("inputsearch");
     val = input.value;
     x.innerHTML=null
    getData(val,1);
   
  }
  x.addEventListener("scroll", function () {
    if (x.scrollTop + x.clientHeight >= x.scrollHeight) {
      getData(val,count++);
    }
   });
  
  function debouncing() {
    let id;
    if (id) {
      clearTimeout(id);
    }
    id = setTimeout(() => {
      searchText();
    }, 3000);
  }



  
  function displayData( data ) {
    // console.log(data);
 
    data.forEach((el, i) => {
      let mainDiv = document.createElement("div");
      let title = document.createElement("p");
      title.innerText = el.Title;
  
      let img = document.createElement("img");
    img.src=el.Poster

    
  
    
  
      mainDiv.append(title, img);

      x.append(mainDiv)
  
    });
  }