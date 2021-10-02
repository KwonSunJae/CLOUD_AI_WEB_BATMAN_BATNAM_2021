FROM ffmpeg
RUN docker run --rm -it --network=host aler9/rtsp-simple-server
RUN ffmpeg -re -stream_loop -1 -i file.ts -c copy -f rtsp://localhost:8854/stream
