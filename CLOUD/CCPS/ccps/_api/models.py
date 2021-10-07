from django.db import models
'''
로그
{
runway,sector,time,finding(찾은것),action(조치 결과) : , is_help: ( 긴급 요청여부 Default = False)
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
    type = models.IntegerFeild(default=0)
    time = models.CharFeild(50)
    isSuccess = models.IntegerFeild(default= False)
    def __str__(self):
        return self.isSuccess

class Log(models.Model):
    runway = models.CharFeild(max_length=200)
    sector = models.CharFeild(50)
    time = models.DateTimeFeild(auto_now=False)
    action = models.CharFeild(max_length=300)
    finding = models.IntegerFeild(default = 0)
    is_help = models.IntegerFeild(default = False)

    def __str__(self):
        return self.runway

class BirdAlert(models.Model):
    photo = models.FileFeild(default=0)
    log = models.CharFeild(max_length=300)
    def __str__(self):
        return self.log
