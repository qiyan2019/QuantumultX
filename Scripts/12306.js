const version = 'V1.0.22';

var obj=JSON.parse($request.body),aaaaaa={};"0007"==obj.placementNo?(aaaaaa.materialsList=[{billMaterialsId:"6491",filePath:"aaaaaa",creativeType:1}],aaaaaa.advertParam={skipTime:1},aaaaaa.code="00"):aaaaaa="G0054"==obj.placementNo?{code:"00",materialsList:[{}]}:{code:"00",message:"无广告返回"},$done({body:JSON.stringify(aaaaaa)});
