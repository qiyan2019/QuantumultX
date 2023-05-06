
const version = 'V1.0.16';


var aaaaaa=JSON.parse($response.body);-1!=$request.url.indexOf("mtop.cainiao.nbpresentation.protocol.homepage.get.cn")?aaaaaa.data?.result?.dataList?.length>0&&(aaaaaa.data.result.dataList=aaaaaa.data.result.dataList.filter(d=>"big_banner_area_v870"!=d.type)):-1!=$request.url.indexOf("mtop.cainiao.guoguo.nbnetflow.ads.mshow")?(aaaaaa.data["1308"]&&delete aaaaaa.data["1308"],aaaaaa.data["1275"]&&delete aaaaaa.data["1275"]):-1!=$request.url.indexOf("mtop.cainiao.guoguo.nbnetflow.ads.index.cn")?aaaaaa.data?.result&&(aaaaaa.data.result=[{}]):-1!=$request.url.indexOf("mtop.cainiao.adkeyword")&&aaaaaa.data?.result?.adHotKeywords&&(aaaaaa.data.result.adHotKeywords=[]);var body=JSON.stringify(aaaaaa);$done({body});
