const cloudName = "dntmeiqhg";
const uploadPreset = "admin_upload";

const imageInput = document.getElementById("imageInput");
const uploadBtn = document.getElementById("uploadBtn");

uploadBtn.addEventListener("click", async () => {

  const file = imageInput.files[0];

  if(!file){
    alert("Pilih gambar dulu");
    return;
  }

  const formData = new FormData();

  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);

  try{

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method:"POST",
        body:formData
      }
    );

    const data = await response.json();

    console.log(data);

    alert("Upload berhasil");

    console.log("URL GAMBAR:");
    console.log(data.secure_url);

  }catch(error){

    console.log(error);

    alert("Upload gagal");

  }

});
