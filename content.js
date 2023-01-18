

const multi_pause = () => {
     const audioNL = document.getElementsByTagName('audio');
     const videoNL = document.getElementsByTagName('video');

     const audioA = Array.prototype.slice.call(audioNL);
     const videoA = Array.prototype.slice.call(videoNL);
     audioA && audioA.forEach((value) => {
        value.pause();
     });
     videoA && videoA.forEach((value) => {
        value.pause();
     }) 
     
      //spotify
      const ele = document.querySelector('button[data-testid="control-button-playpause"]');
      if(ele) ele.click()
}


navigator.mediaDevices.enumerateDevices()
    .then((devices) => {
      devices.forEach((device) => {
        console.log(`${device.kind}: ${device.label} id = ${device.deviceId}`);
      });
    })
    .catch((err) => {
      console.error(`${err.name}: ${err.message}`);
    });


navigator.mediaDevices.ondevicechange = () => multi_pause(); 