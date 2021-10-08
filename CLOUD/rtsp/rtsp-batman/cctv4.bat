
cd C:\ffmpeg-4.4-full_build\bin
ffmpeg -re -stream_loop -1 -i cctv4.mp4 -f rtsp rtsp://192.168.0.183:8554/cctv4
