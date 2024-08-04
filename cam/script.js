const video = document.getElementById('video');
const cameraSelect = document.getElementById('cameraSelect');

// Function to get video input devices
async function getVideoInputs() {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const videoDevices = devices.filter(device => device.kind === 'videoinput');
    return videoDevices;
}

// Function to start the video stream
async function startVideo(cameraId) {
    const constraints = {
        video: { deviceId: cameraId ? { exact: cameraId } : undefined }
    };
    try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        video.srcObject = stream;
    } catch (error) {
        console.error("Error accessing the camera: ", error);
    }
}

// Function to initialize the app
async function init() {
    const videoInputs = await getVideoInputs();
    
    // Populate the camera select options
    videoInputs.forEach(device => {
        const option = document.createElement('option');
        option.value = device.deviceId;
        option.text = device.label || `Camera ${cameraSelect.length + 1}`;
        cameraSelect.appendChild(option);
    });

    // Start video with the first camera by default
    if (videoInputs.length > 0) {
        await startVideo(videoInputs[0].deviceId);
    }

    // Change camera when selected
    cameraSelect.addEventListener('change', (event) => {
        startVideo(event.target.value);
    });
}

// Initialize the application
init();
