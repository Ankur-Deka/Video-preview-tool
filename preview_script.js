videoContainer = document.getElementById('video_container')
function add(file, src) {
    vidBoxElement = document.createElement("div");
    vidBoxElement.setAttribute("class", "videoBox")

    nameElement = document.createElement("div")
    nameElement.setAttribute("class", "videoName")
    

    // determine video extension
    // console.log("src")
    // console.log(src)
    extension = file.split('.').pop()
    // add gif/video
    if(extension=="gif")
    {
        vidElement = document.createElement("img");
    }
    else
    {
        vidElement = document.createElement("video")
        vidElement.setAttribute("type", "video/".concat(extension))
        vidElement.setAttribute("autoplay","")
        vidElement.setAttribute("loop","")
    }  
    vidElement.setAttribute("src", src);
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
    files = Array.from(e.target.files)
    // files.sort(function(a,b){
    //     aName = a.name.split(".")[0].split("_");
    //     bName = b.name.split(".")[0].split("_");
    //     console.log(aName[aName.length-2], bName[bName.length-2]);
    //     return parseInt(aName[aName.length-2])-parseInt(bName[bName.length-2]);
    // });
    console.log(files)
    for(let i = 0; i < files.length; i++)
    {
        // -------- this section if you want to get from any location
        reader = new FileReader();
        reader.addEventListener("load", function(){
            add(files[i].name, this.result);
        })
        reader.readAsDataURL(files[i]);

        // -------- this section if you want sorted from specific location
        // console.log("../marl_transfer_fortattack/marlsave/save_new/videos/".concat(files[i]).name);
        // add(files[i].name, "../marl_transfer_fortattack/marlsave/save_new/videos/".concat(files[i].name))
    }

    console.log(videoContainer);
})
