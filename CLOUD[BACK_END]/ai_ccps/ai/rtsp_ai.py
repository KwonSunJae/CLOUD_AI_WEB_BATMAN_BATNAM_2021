# from https://cloudxlab.com/blog/how-to-run-yolo-on-cctv-feed/
# github.com/BaekKyunShin/OpenCV_Project_Python/tree/master/08.match_track
# import the necessary packages
import numpy as np
import time
import cv2
import os
import threading
from imutils.video import FPS
from queue import Queue
import requests
def Do_yolo(rtsp,runway,sector,que):
	RTSP_URL=rtsp

	CFG_PATH="./ai/cfg"
	WEIGHT_PATH="./ai/backup"
	DATA_PATH="./ai/data"
	weightsPath =  os.path.sep.join([WEIGHT_PATH, "yolov4-obj.weights"])
	configPath = os.path.sep.join([CFG_PATH ,"yolov4-obj.cfg"])
	labelsPath = os.path.sep.join([DATA_PATH ,"obj.names"])
	# load the COCO class labels our YOLO model was trained on
	labelsPath = os.path.sep.join([DATA_PATH, "obj.names"])
	print(weightsPath)
	LABELS = open(labelsPath).read().strip().split("\n")
	CONFIDENCE=0.5
	THRESHOLD=0.5

	# initialize a list of colors to represent each possible class label
	np.random.seed(42)
	COLORS = np.random.randint(0, 255, size=(len(LABELS), 3),
		dtype="uint8")

	# calcOpticalFlowPyrLK 중지 요건 설정
	#termcriteria =  (cv2.TERM_CRITERIA_EPS | cv2.TERM_CRITERIA_COUNT, 10, 0.03)
	# derive the paths to the YOLO weights and model configuration

	# load our YOLO object detector trained on COCO dataset (80 classes)
	# and determine only the *output* layer names that we need from YOLO
	print("[INFO] loading YOLO from disk...")
	net = cv2.dnn.readNetFromDarknet(configPath, weightsPath)
	ln = net.getLayerNames()
	ln = [ln[i[0] - 1] for i in net.getUnconnectedOutLayers()]

	# initialize the video stream, pointer to output video file, and
	# frame dimensions
	vs = cv2.VideoCapture(RTSP_URL)
	print(vs.get(cv2.CAP_PROP_FPS))
	print("START")
	#time.sleep(2.0)
	fps = FPS().start()

	(W, H) = (None, None)

	cnt=0
	prev_time = 0
	cur_time=time.time()

	# loop over frames from the video file stream
	while True:
		bird_dec=0
		cnt+=1
		# read the next frame from the file
		(grabbed, frame) = vs.read()
		

		# or something
		# if the frame was not grabbed, then we have reached the end
		# of the stream
		if not grabbed:
			break
		# if the frame dimensions are empty, grab them
		
		if W is None or H is None:
			(H, W) = frame.shape[:2]
			
			print(H, W)
			
		#gray = cv2.cvtColor(frame[s_x:s_x+s_h, s_y:s_y+s_w], cv2.COLOR_BGR2GRAY)

		
		# construct a blob from the input frame and then perform a forward
		# pass of the YOLO object detector, giving us our bounding boxes
		# and associated probabilities
		blob = cv2.dnn.blobFromImage(frame, 1 / 255.0, (416, 416),
			swapRB=True, crop=False)
		
		net.setInput(blob)
		
		layerOutputs = net.forward(ln)
		

		# initialize our lists of detected bounding boxes, confidences,
		# and class IDs, respectively
		boxes = []
		confidences = []
		
		Detect_f=False
		# loop over each of the layer outputs
		for output in layerOutputs:
			# loop over each of the detections
			for detection in output:
				# extract the class ID and confidence (i.e., probability)
				# of the current object detection
				scores = detection[5:]
				classID = np.argmax(scores)
				
				confidence = scores[classID]
				
				# filter out weak predictions by ensuring the detected
				# probability is greater than the minimum probability
				if confidence > CONFIDENCE:
					Detect_f = True
					print("detect")
					
					bird_dec+=1
					
					# scale the bounding box coordinates back relative to
					# the size of the image, keeping in mind that YOLO
					# actually returns the center (x, y)-coordinates of
					# the bounding box followed by the boxes' width and
					# height
					box = detection[0:4] * np.array([W, H, W, H])
					(centerX, centerY, width, height) = box.astype("int")

					# use the center (x, y)-coordinates to derive the top
					# and and left corner of the bounding box
					x = int(centerX - (width / 2))
					y = int(centerY - (height / 2))
					
					# update our list of bounding box coordinates,
					# confidences, and class IDs
					'''
					boxes.append([x, y, int(width), int(height)])
					confidences.append(float(confidence))
					classIDs.append(classID) '''
		
				
		# apply non-maxima suppression to suppress weak, overlapping
		# bounding boxes
		idxs = cv2.dnn.NMSBoxes(boxes, confidences, CONFIDENCE,
			THRESHOLD)

		# ensure at least one detection exists
		if len(idxs) > 0:
			'''
			if prevImg is None:
				prevImg = gray
				# 추적선 그릴 이미지를 프레임 크기에 맞게 생성
				lines = np.zeros_like(frame)
				# 추적 시작을 위한 코너 검출  ---①
				prevPt = cv2.goodFeaturesToTrack(prevImg, 200, 0.01, 10)
			else:
				nextImg = gray
				# 옵티컬 플로우로 다음 프레임의 코너점  찾기 ---②
				nextPt, status, err = cv2.calcOpticalFlowPyrLK(prevImg, nextImg, \
												prevPt, None, criteria=termcriteria)
				# 대응점이 있는 코너, 움직인 코너 선별 ---③
				prevMv = prevPt[status==1]
				nextMv = nextPt[status==1]
				for i,(p, n) in enumerate(zip(prevMv, nextMv)):
					px,py = p.ravel()
					nx,ny = n.ravel()
					# 이전 코너와 새로운 코너에 선그리기 ---④
					cv2.line(lines, (int(px + s_y), int(py + s_x)), (int(nx + s_y), int(ny + s_x)), (0, 0, 255), 2)
					# 새로운 코너에 점 그리기
					cv2.circle(frame, (int(nx + s_y), int(ny + s_x)), 2, (0, 0, 255), -1)
				# 누적된 추적 선을 출력 이미지에 합성 ---⑤
				frame = cv2.add(frame, lines)
				# 다음 프레임을 위한 프레임과 코너점 이월
				prevImg = nextImg
				prevPt = nextMv.reshape(-1,1,2)
			
			#print(len(idxs))
			# loop over the indexes we are keeping
			#for i in idxs.flatten():
				# extract the bounding box coordinates
				#(x, y) = (boxes[i][0], boxes[i][1])
				#(w, h) = (boxes[i][2], boxes[i][3])
				
				
				# draw a bounding box rectangle and label on the frame
				color = [int(c) for c in COLORS[classIDs[i]]]
				cv2.rectangle(frame, (int(x), int(y)), (int(x + w), int(y + h)), color, 2)
				text = "{}: {:.4f}".format(LABELS[classIDs[i]],
					confidences[i])
				cv2.putText(frame, text, (int(x), int(y - 5)),
					cv2.FONT_HERSHEY_SIMPLEX, 0.5, color, 2)'''
		else:
			prevImg = None
		# check if the video writer is None
		'''if writer is None:
			# initialize our video writer
			fourcc = cv2.VideoWriter_fourcc(*"MJPG")
			writer = cv2.VideoWriter(OUTPUT_FILE, fourcc, 30,
				(frame.shape[1], frame.shape[0]), True)

			

		# write the output frame to disk
		writer.write(frame)'''
		# show the output frame
		#cv2.imshow("Frame", frame)
		#key = cv2.waitKey(1) & 0xFF
		#print ("key", key)
		# if the `q` key was pressed, break from the loop
		'''if key == ord("q"):
			break
		elif key == 8: # Backspace:추적 이력 지우기
			prevImg = None'''
		
		
		# update the FPS counter
		fps.update()
		if Detect_f:
			cur_time = time.time()
			if cur_time-prev_time <1:
				continue
			print(str(bird_dec) )
			print("Detected!")
			evt = threading.Event()
			data = { 
				'runway': runway,
				'sector': sector,
				'finding': bird_dec
			}
			urls ='http://batman.demo-web.default.svc.cluster.local/demo'
			res = requests.post(urls, data=data)
			HttpResponse(res)
			q.put((data,evt))
			evt.wait()
			prev_time= cur_time

	# stop the timer and display FPS information
	fps.stop()

	print("[INFO] elasped time: {:.2f}".format(fps.elapsed()))
	print("[INFO] approx. FPS: {:.2f}".format(fps.fps()))

	# do a bit of cleanup
	#cv2.destroyAllWindows()
	# release the file pointers
	print("[INFO] cleaning up...")

	vs.release()
