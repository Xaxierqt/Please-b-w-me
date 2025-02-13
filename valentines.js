// Get all sidebar links and content section
const sidebarLinks = document.querySelectorAll('.sidebar ul li a');
const content = document.getElementById('content');

// Audio element for the "Blue" song
const blueAudio = new Audio('blue.mp3');
blueAudio.loop = true; // Enable looping

// Function to play the "Blue" song
function playBlueSong() {
    blueAudio.play().catch(error => {
        console.error('Error playing audio:', error);
    });
}

// Function to pause the "Blue" song
function pauseBlueSong() {
    blueAudio.pause();
}

// Default content for "Moments We Shared"
const momentsContent = `
    <div class="happy-valentines">
        <div class="valentines-day-card">
            <div class="clouds"></div>
            <div class="hearts">
                <div class="heartOne">
                    <div class="left-side"></div>
                    <div class="right-side"></div>
                </div>
                <div class="heartTwo">
                    <div class="left-side"></div>
                    <div class="right-side"></div>
                </div>
                <div class="heartThree">
                    <div class="left-side"></div>
                    <div class="right-side"></div>
                </div>
                <div class="heartFour">
                    <div class="left-side"></div>
                    <div class="right-side"></div>
                </div>
                <div class="heartFive">
                    <div class="left-side"></div>
                    <div class="right-side"></div>
                </div>
            </div>
            <div class="text">
                <span>Happy Valentine's Day! <br /></span>
            </div>
        </div>
    </div>
`;

// Content for "Video Together"
const videoTogetherContent = `
    <div class="video-container">
        <video class="vid-box" src="video1.mp4" muted loop playsinline disablePictureInPicture></video>
        <video class="vid-box" src="video2.mp4" muted loop playsinline disablePictureInPicture></video>
        <video class="vid-box" src="video3.mp4" muted loop playsinline disablePictureInPicture></video>
        <video class="vid-box" src="video4.mp4" muted loop playsinline disablePictureInPicture></video>
        <video class="vid-box" src="video5.mp4" muted loop playsinline disablePictureInPicture></video>
        <video class="vid-box" src="video6.mp4" muted loop playsinline disablePictureInPicture></video>
    </div>
`;

// Content for "The Journey We’ve Taken"
const journeyContent = `
    <div class="container">
        <img src="together1.jpg" alt="Image 1">
        <img src="together2.jpg" alt="Image 2">
        <img src="together3.jpg" alt="Image 3">
        <img src="together4.jpg" alt="Image 4">
        <img src="together5.jpg" alt="Image 5">
    </div>
`;

// Content for "Favorite Foods We Enjoy"
const favoriteFoodsContent = `
    <div id="hedlinecontainer">
        <div id="shine">Favssssssssss to consume!!</div>
    </div>
    <div class="gallery">
        <img src="popcorn.jpeg" alt="popcorn from kettle korn">
        <img src="chicken.jpg" alt="mystie chimken">
        <img src="takoyaki.jpg" alt="takoyaki">
        <img src="kopiko.jpeg" alt="ugh wake me up">
        <img src="manginasal.png" alt="manginasal">
    </div>
`;

// Content for "Songs That Define Us"
const songsContent = `
    <div class="songs-container">
        <!-- My Favorite Songs Section -->
        <div class="section">
            <div class="heart" id="heart1">❤️</div>
            <h2>My Favorite Songs</h2>
            <div class="photo-container">
                <!-- Your favorite songs -->
                <div class="photo" id="photo1">
                    <img src="isalang.jpeg" alt="Isalang">
                    <div class="info">
                        <h3>Isa lang</h3>
                        <button class="play-btn" data-audio="audio1" aria-label="Play Isa lang">
                            <div class="play-icon"></div>
                        </button>
                        <audio id="audio1">
                            <source src="isalang.mp3" type="audio/mp3">
                        </audio>
                    </div>
                </div>
                <div class="photo" id="photo2">
                    <img src="blue.jpeg" alt="Blue">
                    <div class="info">
                        <h3>Blue</h3>
                        <button class="play-btn" data-audio="audio2" aria-label="Play Blue">
                            <div class="play-icon"></div>
                        </button>
                        <audio id="audio2">
                            <source src="blue.mp3" type="audio/mp3">
                        </audio>
                    </div>
                </div>
                <div class="photo" id="photo3">
                    <img src="theycallthislove.jpeg" alt="They Call This Love">
                    <div class="info">
                        <h3>They Call This Love</h3>
                        <button class="play-btn" data-audio="audio3" aria-label="Play They Call This Love">
                            <div class="play-icon"></div>
                        </button>
                        <audio id="audio3">
                            <source src="theycallthislove.mp3" type="audio/mp3">
                        </audio>
                    </div>
                </div>
            </div>
        </div>

        <!-- Her Favorite Songs Section -->
        <div class="section">
            <div class="heart" id="heart2">❤️</div>
            <h2>Her Favorite Songs</h2>
            <div class="photo-container">
                <!-- Her favorite songs -->
                <div class="photo" id="photo4">
                    <img src="14.jpeg" alt="14">
                    <div class="info">
                        <h3>14</h3>
                        <button class="play-btn" data-audio="audio4" aria-label="Play 14">
                            <div class="play-icon"></div>
                        </button>
                        <audio id="audio4">
                            <source src="14.mp3" type="audio/mp3">
                        </audio>
                    </div>
                </div>
                <div class="photo" id="photo5">
                    <img src="rememberme.jpeg" alt="Remember Me">
                    <div class="info">
                        <h3>Remember Me</h3>
                        <button class="play-btn" data-audio="audio5" aria-label="Play Remember Me">
                            <div class="play-icon"></div>
                        </button>
                        <audio id="audio5">
                            <source src="rememberme.mp3" type="audio/mp3">
                        </audio>
                    </div>
                </div>
                <div class="photo" id="photo6">
                    <img src="heavy.jpeg" alt="Heavy">
                    <div class="info">
                        <h3>Heavy</h3>
                        <button class="play-btn" data-audio="audio6" aria-label="Play Heavy">
                            <div class="play-icon"></div>
                        </button>
                        <audio id="audio6">
                            <source src="heavy.mp3" type="audio/mp3">
                        </audio>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

// Set the "Moments We Shared" content as the default when the page loads
content.innerHTML = momentsContent;

// Mark the "Moments We Shared" link as active on page load
document.getElementById('momentsWeShared').classList.add('active');

// Function to load content dynamically based on the clicked sidebar link
function loadContent(pageId) {
    if (pageId === 'momentsWeShared') {
        // Load the "Moments We Shared" content
        content.innerHTML = momentsContent;
        playBlueSong(); // Play the "Blue" song
    } else if (pageId === 'individualPictures') {
        // Load the "Video Together" content
        content.innerHTML = videoTogetherContent;
        // Add event listeners for video hover effects
        document.querySelectorAll(".vid-box").forEach(video => {
            video.addEventListener("mouseenter", () => {
                video.play();
            });

            video.addEventListener("mouseleave", () => {
                video.pause();
                video.currentTime = 0; // Reset video to start
            });
        });
        playBlueSong(); // Play the "Blue" song
    } else if (pageId === 'ourStory') {
        // Load the "The Journey We’ve Taken" content
        content.innerHTML = journeyContent;
        playBlueSong(); // Play the "Blue" song
    } else if (pageId === 'favoriteFoods') {
        // Load the "Favorite Foods We Enjoy" content
        content.innerHTML = favoriteFoodsContent;
        playBlueSong(); // Play the "Blue" song
    } else if (pageId === 'favoriteSongs') {
        // Load the "Songs That Define Us" content
        content.innerHTML = songsContent;
        pauseBlueSong(); // Pause the "Blue" song
        // Add event listeners for audio play buttons
        document.querySelectorAll('.play-btn').forEach(button => {
            button.addEventListener('click', function() {
                const audioId = this.getAttribute('data-audio');
                playAudio(audioId, this);

                // Trigger confetti animation
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: ['#ff3366']
                });
            });
        });
        // Add event listeners for audio end
        document.querySelectorAll('audio').forEach(audio => {
            audio.addEventListener('ended', function() {
                const btn = document.querySelector(`.play-btn[data-audio="${audio.id}"]`);
                if (btn) {
                    btn.classList.remove('pumping');
                    btn.querySelector('.play-icon').classList.remove('pause-icon');
                }
            });
        });
    } else {
        // Load other content for different sections
        content.innerHTML = `<h1>Explore Other Sections</h1><p>Select a section to see more content.</p>`;
        playBlueSong(); // Play the "Blue" song
    }
}

// Event listener for sidebar links
sidebarLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        // Remove active class from all links
        sidebarLinks.forEach(link => link.classList.remove('active'));

        // Add active class to the clicked link
        event.target.classList.add('active');

        // Load the respective content
        loadContent(event.target.id);

        // Optional: You can add a sound effect or some other action on click
        const clickSound = document.getElementById('click-sound');
        clickSound.play();
    });
});

// Function to play audio
function playAudio(audioId, button) {
    const audio = document.getElementById(audioId);
    
    // Pause any other playing audio and remove pumping animation
    const audios = document.querySelectorAll('audio');
    audios.forEach(a => {
        if (a !== audio) {
            a.pause();
            const btn = document.querySelector(`.play-btn[data-audio="${a.id}"]`);
            if (btn) {
                btn.classList.remove('pumping');
                btn.querySelector('.play-icon').classList.remove('pause-icon');
            }
        }
    });
    
    // Play or pause the current audio and add/remove pumping animation
    if (audio.paused) {
        audio.play();
        button.classList.add('pumping');
        button.querySelector('.play-icon').classList.add('pause-icon');
    } else {
        audio.pause();
        button.classList.remove('pumping');
        button.querySelector('.play-icon').classList.remove('pause-icon');
    }
}

// Function to create snowflakes
function createSnowflakes() {
    const snowflakeContainer = document.createElement('div');
    snowflakeContainer.classList.add('snowflake-container');
    document.body.appendChild(snowflakeContainer);

    for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
        snowflake.style.animationDelay = `${Math.random() * 5}s`;
        snowflakeContainer.appendChild(snowflake);
    }
}

// Call the function to create snowflakes
createSnowflakes();

// Volume control
const volumeSlider = document.getElementById('volume-slider');
volumeSlider.addEventListener('input', function() {
    const audios = document.querySelectorAll('audio');
    audios.forEach(audio => {
        audio.volume = volumeSlider.value;
    });
});

// Play the "Blue" song when the page loads
window.onload = function() {
    playBlueSong();
};