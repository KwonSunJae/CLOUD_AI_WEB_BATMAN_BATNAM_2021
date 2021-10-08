FROM ubuntu


RUN apt-get update
RUN apt-get install -y docker
RUN apt-get install -y ffmpeg
RUN apt-get install -y git
CMD git clone https://github.com/osamhack2021/AI_CLOUD_WEB_BATMAN_BATNAM.git
WORKDIR /AI_CLOUD_WEB_BATMAN_BATNAM/CLOUD/rtsp
CMD docker run --rm -d --network=host aler9/rtsp-simple-server
CMD ffmpeg -re -stream_loop -1 -i cctv.mp4 -c copy -f rtsp rtsp://localhost:8554/stream
