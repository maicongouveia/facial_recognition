let video = document.getElementById("video");

const accessCamera = () => {
  navigator.mediaDevices
    .getUserMedia({
      audio: false,
      video: { width: 500, height: 400 },
    })
    .then((stream) => {
      video.srcObject = stream;
    });
};

accessCamera();