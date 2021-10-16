FROM python:3.6
# 생성하는 docker의 python 버전

ENV PYTHONUNBUFFERED 1 

RUN apt-get update 
RUN apt-get -y install libgl1-mesa-glx
# docker 안에서 vi 설치 안해도됨

WORKDIR /usr/src/app

COPY . ./ai_ccps

WORKDIR ./ai_ccps

RUN pip install --upgrade pip 
# pip 업글
RUN pip install -r requirements.txt 
# 필수 패키지 설치
#CMD [ "uwsgi","--ini","uwsgi.ini" ]
#EXPOSE 8000
#CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]