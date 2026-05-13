async function uploadImage() {
  const file =
    document.getElementById("imageInput").files[0];

  const formData = new FormData();

  formData.append("file", file);

  formData.append(
    "upload_preset",
    "pondok_upload"
  );

  const response = await fetch(
    "https://api.cloudinary.com/v1_1/dntmeiqhg/image/upload",
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await response.json();

  console.log(data.secure_url);
}
