
FROM python:3.6
# 생성하는 docker의 python 버전

ENV PYTHONUNBUFFERED 1 

RUN apt-get -y update 
RUN apt-get -y install build-essential
# docker 안에서 vi 설치 안해도됨

RUN mkdir /srv/ccps
# docker안에 srv/ccps 폴더 생성
ADD . /srv/ccps
# 현재 디렉토리를 srv/ccps 폴더에 복사

WORKDIR /srv/ccps 
# 작업 디렉토리 설정

RUN pip install --upgrade pip 
# pip 업글
RUN pip install -r requirements.txt 
# 필수 패키지 설치
#CMD [ "uwsgi","--ini","uwsgi.ini" ]
#EXPOSE 8000
#CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]