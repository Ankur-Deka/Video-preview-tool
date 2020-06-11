videoContainer = document.getElementById('video_container')
function add(file, src) {
    vidBoxElement = document.createElement("div");
    vidBoxElement.setAttribute("class", "videoBox")

    nameElement = document.createElement("div")
    nameElement.setAttribute("class", "videoName")
    
    vidElement = document.createElement("video")

    // determine video extension
    extension = src.split('.').pop()

    // then add video
    vidElement.setAttribute("src", src);
    vidElement.setAttribute("type", "video/".concat(extension))
    vidElement.setAttribute("autoplay","")
    vidElement.setAttribute("loop","")
    vidElement.setAttribute("width","300px")
    vidBoxElement.appendChild(vidElement);
    
    // first add name
    nameElement.innerText = file;
    vidBoxElement.appendChild(nameElement) 
    
    // finally add the whole videoBox
    videoContainer.appendChild(vidBoxElement);
      
}
// <video class="video" width="800" controls>
// 				<!-- <source src="1.mp4" type="video/mp4"> -->
// 			</video>

// var fs = require('fs');
// var files = fs.readdirSync('videos')
// console.log(files)
// for(i = 0; i<10; i++)
// 	add()

let i = document.querySelector('input').addEventListener('change', (e)=>{
console.log(e)
  console.log(e.target)
  for(let i = 0; i < e.target.files.length; i++)
  {
    reader = new FileReader();
    reader.addEventListener("load", function(){
        add(e.target.files[i].name, this.result);
    })
    reader.readAsDataURL(e.target.files[i])
    // add(e.target.files[i].name);
    // console.log(e.target.files[i].name);
  }
})