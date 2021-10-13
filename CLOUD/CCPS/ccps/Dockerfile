FROM python
RUN mkdir /code
WORKDIR /code
RUN pip install --upgrade pip
ADD requirements.txt /code/
RUN pip install -r requirements.txt
RUN pip install -r requirements.txt
ADD . /code/
