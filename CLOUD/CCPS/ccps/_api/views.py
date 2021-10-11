
from django.views import View
from django.http import HttpResponse, JsonResponse
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
import random
class IndexView(View):
    def get(self, request):
        
        return HttpResponse(status=200)

    def post(self, request):
        if request.META['CONTENT_TYPE'] == "application/json":
            request = json.loads(request.body)
            action_req = json.loads(request['action'])
            flag = random.range(1,5)
            is_help = False
            if flag ==5 :
                is_help = True
            if request['is_help'] == "True":
                is_help = True

            action_json =  action(type= action_req['type'],
                                    time = action_req['time'],
                                    isSuccess = (flag<=4) )
            log = Log(runway = request['runway'],
                                    sector = request['sector'],
                                    time = request['time'],
                                    finding = request['finding'],
                                    action = request['action'],
                                    is_help=is_help)
            birdalert = BirdAlert(photo = request['photo'],
                                    log = request['log'])
        
        
        return HttpResponse(status=200)

    def put(self, request):
        return HttpResponse("Put 요청을 잘받았다")

    def delete(self, request):
        return HttpResponse("Delete 요청을 잘받았다")