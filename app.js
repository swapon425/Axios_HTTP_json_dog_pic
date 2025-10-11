let btn=document.querySelector("button");
btn.addEventListener("click",async()=>{
   let link=await getImage();
   let img=document.querySelector("#result");
   img.setAttribute("src",link);
   console.log(link);
      
});






let url="https://dog.ceo/api/breeds/image/random";
async function getImage(){
   try{
     let  res= await axios.get(url);
      return res.data.message;
    

   }catch(e){
    console.log("error- ",e);
    return "/";
   }
   
    
}