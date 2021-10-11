from django.db import models
'''
로그
{
runway,sector,time(dateTime),finding(찾은것 개수),action(조치 결과) : , is_help: ( 긴급 요청여부 Default = False)
}
action
{
type ,
 time,
 isSuccess
}
ba ((((((발견알림 (ml -> ccp) birdalet
{
 photo, log
}

'''
# Create your models here.
class action(models.Model):
    type = models.IntegerField(default=0)
    time = models.DateTimeField(50)
    isSuccess = models.IntegerField(default= False)
    def __str__(self):
        return self.isSuccess

class Log(models.Model):
    runway = models.CharField(max_length=200)
    sector = models.CharField(max_length=200)
    time = models.DateTimeField(auto_now=False)
    action = models.CharField(max_length=300)
    finding = models.IntegerField(default = 0)
    is_help = models.IntegerField(default = False)

    def __str__(self):
        return self.runway

class BirdAlert(models.Model):
    photo = models.FileField(default=0)
    log = models.CharField(max_length=200)
    def __str__(self):
        return self.log
