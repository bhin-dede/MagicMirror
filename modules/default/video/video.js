Module.register("video", {
    defaults: {
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', // 비디오 URL 기본값
    },

    getDom() {
        const wrapper = document.createElement("div");

		// 비디오 요소 생성
		const videoElement = document.createElement("video");
		videoElement.src = this.config.videoUrl; // 비디오 URL 설정
		videoElement.controls = true; // 비디오 컨트롤 표시
		videoElement.autoplay = true; // 비디오 자동 재생
		videoElement.loop = true; // 비디오 반복 재생 (선택 사항)
		videoElement.style.width = '50%'; // 비디오 너비 설정
        // 비디오 요소를 wrapper에 추가
        wrapper.appendChild(videoElement);

        return wrapper; 
    },
});