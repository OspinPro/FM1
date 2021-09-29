var base_data = {
  "styles": [
	["top","#FFEFEF;#6E6EFF;center;'PT Sans', Tahoma;17px;;;;middle;;"],						
	["subtop","#818181;#EAEAEA;center;'PT Sans', Tahoma;15px;;;bold;middle;;"],
	["sales","#818181;;center;'PT Sans', Tahoma;15px;;;bold;middle;;"],
	["total","#818181;;right;'PT Sans', Tahoma;15px;;;bold;middle;;"],
	["count","#818181;#EAEAEA;center;'PT Sans', Tahoma;15px;;;;middle;;"],
	["values","#000;#fff;right;'PT Sans', Tahoma;15px;;;;middle;;;price"]
  ],
  "sizes": [
    [0,1,125],
    [0,3,137],
    [0,4,137],
	[0,5,137]
  ],
  "data": [
    [1,1,"Report - July 2016","top"],    
    [2,1,"Region","subtop"],
    [2,2,"Country","subtop"],
    [2,3,"Sales - Group A","sales"],
    [2,4,"Sales - Group B","sales"],
    [2,5,"Total","total"],
    [3,1,"Europe","count"],
    [3,2,"Germany","count"],
    [3,3,"188400","values"],
    [3,4,"52000","values"],
    [3,5,"=C3+D3","values"],
    [4,1,"Europe","count"],
    [4,2,"France","count"],
    [4,3,"192200","values"],
    [4,4,"12000","values"],
    [4,5,"=C4+D4","values"],
    [5,1,"Europe","count"],
    [5,2,"Poland","count"],
    [5,3,"68900","values"],
    [5,4,"8000","values"],
    [5,5,"=C5+D5","values"],
    [6,1,"Asia","count"],
    [6,2,"Japan","count"],
    [6,3,"140000","values"],
    [6,4,"14000","values"],
    [6,5,"=C6+D6","values"],
    [7,1,"Asia","count"],
    [7,2,"China","count"],
    [7,3,"50000","values"],
    [7,4,"4800","values"],
    [7,5,"=C7+D7","values"]
  ],
  "spans": [
    [1,1,5,1]
  ]
};

var math_data_simple = {
  "styles": [    
	["top","#FFEFEF;#6E6EFF;center;'PT Sans', Tahoma;17px;;;;middle;;"],
	["subtop","#818181;#EAEAEA;center;'PT Sans', Tahoma;15px;;;bold;middle;;"],
	["count","#818181;#EAEAEA;center;'PT Sans', Tahoma;15px;;;;middle;;"],
	["calc-top","#818181;#EAEAEA;;'PT Sans', Tahoma;15px;;;bold;middle;;"],
	["values","#000;;right;'PT Sans', Tahoma;15px;;;;middle;;;price"]
  ],  
  "data": [
	[1, 1, "Countries:", "subtop"],
		[2, 1, "France", "count"],
		[3, 1, "Poland", "count"],
		[4, 1, "China", "count"],
	[1, 2, "April", "count"],
		[2, 2, 1366,"values"],
		[3, 2, 684,"values"],
		[4, 2, 8142,"values"],
	[1, 3, "May", "count"],
		[2, 3, 842,"values"],
		[3, 3, 781,"values"],
		[4, 3, 7813,"values"],
	[1, 4, "June", "count"],
		[2, 4, 903,"values"],
		[3, 4, 549,"values"],
		[4, 4, 7754,"values"],
	[1, 5, "July", "count"],
		[2, 5, 806,"values"],
		[3, 5, 978,"values"],
		[4, 5, 8199,"values"],
	[1, 6, "Total:", "calc-top"],
		[2, 6, "=SUM(B2:E2)","values"],
		[3, 6, "=SUM(B3:E3)","values"],
		[4, 6, "=SUM(B4:E4)","values"],	
	[1, 7, "Std Deviation:", "calc-top"],
		[2, 7, "=STDEVP(B2:E2)","values"],
		[3, 7, "=STDEVP(B3:E3)","values"],
		[4, 7, "=STDEVP(B4:E4)","values"],
	[6, 1, "Start date:", "count"],
	[6, 2, "01/01/2010","","date"],
	[7, 1, "End date:", "count"],
	[7, 2, "02/18/2015","","date"],
	[8, 1, "Date diff, months:", "calc-top"],
	[8, 2, "=DATEDIF(B6,B7,\"M\")"]
  ],
  "sizes":[ 
	[0, 1, 140],
	[0, 2, 130],
	[0, 7, 130],
	[0, 8, 200]
  ]
};

var sheet1_data = {"data":[["1","1","","wss8"],["1","2","","wss6"],["1","3","Sales","wss7"],["1","4","","wss6"],["1","5","Prediction","wss4"],["2","1","Department","wss1"],["2","2","2013","wss3"],["2","3","2014","wss3"],["2","4","2015","wss3"],["2","5","2016","wss3"],["3","1","Sport gears",""],["3","2","4550","wss5"],["3","3","4780","wss5"],["3","4","4920","wss5"],["3","5","5904","wss5"],["4","1","Gadgets",""],["4","2","2245","wss5"],["4","3","4483","wss5"],["4","4","7460","wss5"],["4","5","8952","wss14"],["5","1","Beverage",""],["5","2","750","wss5"],["5","3","640","wss5"],["5","4","755","wss5"],["5","5","830.5","wss5"],["6","1","Total","wss11"],["6","2","=SUM(B3:B5)","wss12"],["6","3","=SUM(C3:C5)","wss12"],["6","4","=SUM(D3:D5)","wss12"],["6","5","=SUM(E3:E5)","wss12"]],"styles":[["wss1",";#CEFEFE;"],["wss2",";#CEE6FE;"],["wss3","#000000;#CEE6FE;center"],["wss4","#000000;#CEFEFE;center"],["wss5",";;center"],["wss6","#000000;#CEFEE6;left"],["wss7","#000000;#CEFEE6;center"],["wss8","#000000;#FFFFFF;left"],["wss9","#FFFFFF;;"],["wss10","#FFFFFF;#424242;"],["wss11","#FFFFFF;#424242;right"],["wss12","#FFFFFF;#424242;center"],["wss13","#000000;#ffffff;left"],["wss14","#000000;#ffffff;center"]],"sizes":[["0","1","169"]],"spans":[]};
var sheet2_data = {"data":[["2","2","-","wss1"],["2","3","Page 1","wss2"],["2","4","-",""],["3","2","","wss3"],["3","3","","wss3"],["3","4","","wss3"]],"styles":[["wss1",";;right"],["wss2",";;center"],["wss3",";#f6b26b;"]],"sizes":[],"spans":[]};
var sheet3_data = {"data":[["2","2","-","wss1"],["2","3","Page 2","wss5"],["2","4","-",""],["3","2","","wss6"],["3","3","","wss6"],["3","4","","wss6"]],"styles":[["wss1",";;right"],["wss2",";;center"],["wss3",";#9E3EFF;"],["wss4","#000000;#ffffff;right"],["wss5","#000000;#ffffff;center"],["wss6","#000000;#6d9eeb;left"]],"sizes":[],"spans":[]};

var math_data = [{"name":"Report","content":{"conditions":[],"sizes":[[0,2,407],[0,4,207],[4,0,115]],"styles":[["wss1",";;;;;;;;;wrap;;;;;;"],["wss2",";;;;;;;;;nowrap;;;;;;"],["wss3",";;;;;;;;;;;percent;;;;"]],"spans":[],"ranges":[],"table":{"frozenColumns":0,"frozenRows":0,"gridlines":1,"headers":1},"data":[[2,2,"You can fill charts and dropdowns from a different sheet","wss2"],[2,3,"","wss2"],[2,4,"Germany",""],[2,5,"","wss2"],[2,6,"","wss2"],[2,7,"","wss2"],[2,8,"","wss2"],[2,9,"","wss2"],[2,10,"","wss2"],[4,2,"=SPARKLINE(Countries!DATA,\"splineArea\",\"#6666FF\")",""],[7,2,"You can use values and ranges from different sheets",""],[8,3,"value",""],[8,4,"=Countries!A4 & \" \" &  Countries!B4 & \"mil\"",""],[9,3,"range",""],[9,4,"=SUM(Countries!B2:B3)",""],[10,3,"named range",""],[10,4,"=SUM(Countries!DATA)",""],[13,2,"You can reference formula results from different sheets",""],[13,3,"base",""],[13,4,"2",""],[14,3,"result",""],[14,4,"=Data!B8*D13","wss3"]],"locked":[],"editors":[["2","4",{"editor":"richselect","options":"Countries!NAMES"}]],"filters":[],"formats":[]}},{"name":"Data","content":{"conditions":[],"sizes":[],"styles":[["wss1",";;;;;;;;;wrap;;;;;;"],["wss2",";;;;;;;;;nowrap;;;;;;"]],"spans":[[8,3,4,1]],"ranges":[],"table":{"frozenColumns":0,"frozenRows":0,"gridlines":1,"headers":1},"data":[[2,2,"1",""],[2,3,"=B2*2+1",""],[3,2,"=C2*3-2",""],[3,3,"=B3*2+1",""],[4,2,"=C3*3-2",""],[4,3,"=B4*2+1",""],[5,2,"=C4*3-2",""],[5,3,"=B5*2+1",""],[6,2,"=C5*3-2",""],[6,3,"=B6*2+1",""],[7,2,"=C6*3-2",""],[7,3,"=B7*2+1",""],[8,2,"=SUM(Countries!DATA)  / C7",""],[8,3,"<- uses math from this and from Countries sheet","wss2"],[8,4,"","wss2"],[8,5,"","wss2"],[8,6,"","wss2"]],"locked":[],"editors":[],"filters":[],"formats":[]}},{"name":"Countries","content":{"conditions":[],"sizes":[],"styles":[["wss1",";;right;;;;;;;;;;;;;"],["wss2",";#4a86e8;;;;;;;;;;;;;;"],["wss3","#ffffff;#4a86e8;;;;;;;;;;;;;;"]],"spans":[],"ranges":[["DATA","B2:B7"],["NAMES","A2:A7"]],"table":{"frozenColumns":0,"frozenRows":0,"gridlines":1,"headers":1},"data":[[1,1,"Name","wss3"],[1,2,"Population","wss3"],[2,1,"Belarus",""],[2,2,"9","wss1"],[3,1,"Russia",""],[3,2,"146","wss1"],[4,1,"USA",""],[4,2,"324","wss1"],[5,1,"Germany",""],[5,2,"82","wss1"],[6,1,"China",""],[6,2,"1381","wss1"],[7,1,"India",""],[7,2,"1311","wss1"]],"locked":[],"editors":[],"filters":[],"formats":[]}}];

var base_data_contrast = {
	"styles": [
		["top","#FFEFEF;#6868d8;center;'PT Sans', Tahoma;17px;;;;middle;;"],
		["subtop",";#5d5b5b;center;'PT Sans', Tahoma;15px;;;bold;middle;;"],
		["sales",";;center;'PT Sans', Tahoma;15px;;;bold;middle;;"],
		["total",";;right;'PT Sans', Tahoma;15px;;;bold;middle;;"],
		["count",";#5d5b5b;center;'PT Sans', Tahoma;15px;;;;middle;;"],
		["values",";;right;'PT Sans', Tahoma;15px;;;;middle;;;price"]
	],
	"sizes": [
		[0,1,125],
		[0,3,137],
		[0,4,137],
		[0,5,137]
	],
	"data": [
		[1,1,"Report - July 2016","top"],
		[2,1,"Region","subtop"], [2,2,"Country","subtop"], [2,3,"Sales - Group A","sales"], [2,4,"Sales - Group B","sales"], [2,5,"Total","total"],
		[3,1,"Europe","count"], [3,2,"Germany","count"], [3,3,"188400","values"], [3,4,"52000","values"], [3,5,"=C3+D3","values"],
		[4,1,"Europe","count"], [4,2,"France","count"], [4,3,"192200","values"], [4,4,"12000","values"], [4,5,"=C4+D4","values"],
		[5,1,"Europe","count"], [5,2,"Poland","count"], [5,3,"68900","values"], [5,4,"8000","values"], [5,5,"=C5+D5","values"],
		[6,1,"Asia","count"], [6,2,"Japan","count"], [6,3,"140000","values"], [6,4,"14000","values"], [6,5,"=C6+D6","values"],
		[7,1,"Asia","count"], [7,2,"China","count"], [7,3,"50000","values"], [7,4,"4800","values"], [7,5,"=C7+D7","values"]
	],
	"spans": [
		[1,1,5,1]
	]
};

var all_math_data = {
  "conditions": [],
  "styles": [
    [
      "wss1",
      ";;;;;;;;;;;date;;;;"
    ],
    [
      "wss2",
      ";;;;;;;;;;;fmt0;;;;"
    ],
    [
      "wss3",
      ";;;;;;;bold;;;;;;;;"
    ],
    [
      "wss4",
      ";#00ffff;;;;;;bold;;;;;;;;"
    ],
    [
      "wss5",
      "#ffffff;#00ffff;;;;;;bold;;;;;;;;"
    ],
    [
      "wss6",
      "#ffffff;#ff0000;;;;;;bold;;;;;;;;"
    ],
    [
      "wss7",
      "#ffffff;#0000ff;;;;;;bold;;;;;;;;"
    ],
    [
      "wss8",
      ";#0000ff;;;;;;;;;;;;;;"
    ],
    [
      "wss9",
      "#ffffff;#0000ff;;;;;;;;;;;;;;"
    ],
    [
      "wss10",
      "#0000ff;;;;;;;;;;;;;;;"
    ],
    [
      "wss11",
      "#ffffff;;;;;;;;;;;;;;;"
    ]
  ],
  "formats": [
    [
      "fmt0",
      "hh:mm AM/PM"
    ]
  ],
  "spans": [],
  "sizes": [
    [
      0,
      4,
      102
    ],
    [
      0,
      5,
      102
    ],
    [
      0,
      8,
      120
    ],
    [
      0,
      9,
      78
    ],
    [
      0,
      12,
      125
    ],
    [
      0,
      16,
      102
    ]
  ],
  "table": {
    "frozenColumns": 0,
    "frozenRows": 0,
    "gridlines": 1,
    "headers": 1
  },
  "data": [
    [
      1,
      1,
      0,
      "",
      "number"
    ],
    [
      1,
      3,
      "DATES",
      "wss7",
      "string"
    ],
    [
      1,
      4,
      "DATE",
      "",
      "string"
    ],
    [
      1,
      5,
      "=DATE(A1,A2,A3)",
      "wss1",
      "date"
    ],
    [
      1,
      7,
      "NUMBERS",
      "wss9",
      "string"
    ],
    [
      1,
      8,
      "SUM",
      "",
      "string"
    ],
    [
      1,
      9,
      "=SUM(A1:A5)",
      "",
      "number"
    ],
    [
      1,
      11,
      "STRINGS",
      "wss9",
      "string"
    ],
    [
      1,
      12,
      "CONCATENATE",
      "",
      "string"
    ],
    [
      1,
      13,
      "=CONCATENATE(A2,A3)",
      "",
      "number"
    ],
    [
      1,
      15,
      "OTHERS",
      "wss9",
      "string"
    ],
    [
      1,
      16,
      "IF",
      "",
      "string"
    ],
    [
      1,
      17,
      "=IF(E37,M3,M5)",
      "",
      "number"
    ],
    [
      2,
      1,
      1,
      "",
      "number"
    ],
    [
      2,
      4,
      "TIME",
      "",
      "string"
    ],
    [
      2,
      5,
      "=TIME(A1,A2,A3)",
      "wss2",
      "date"
    ],
    [
      2,
      8,
      "AVERAGE",
      "",
      "string"
    ],
    [
      2,
      9,
      "=AVERAGE(A1:A5)",
      "",
      "number"
    ],
    [
      2,
      12,
      "LEFT",
      "",
      "string"
    ],
    [
      2,
      13,
      "=LEFT(M1,1)",
      "",
      "number"
    ],
    [
      2,
      16,
      "SPARKLINE",
      "",
      "string"
    ],
    [
      2,
      17,
      "=SPARKLINE(A1:A5,\"line\",\"#6666FF\")",
      "",
      "string"
    ],
    [
      3,
      1,
      2,
      "",
      "number"
    ],
    [
      3,
      4,
      "DAY",
      "",
      "string"
    ],
    [
      3,
      5,
      "=DAY(E1)",
      "",
      "number"
    ],
    [
      3,
      8,
      "COUNT",
      "",
      "string"
    ],
    [
      3,
      9,
      "=COUNT(A1:A7)",
      "",
      "number"
    ],
    [
      3,
      12,
      "MID",
      "",
      "string"
    ],
    [
      3,
      13,
      "=MID(L1,A4,A4)",
      "",
      "number"
    ],
    [
      3,
      16,
      "IMAGE",
      "",
      "string"
    ],
    [
      3,
      17,
      "=IMAGE(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAbCAMAAAByZu6xAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAFdQTFRFmdnqAAAAXjkmYj0qbkk2cU06AAAA/3mmra2tcU05////NrxgNbxgkJCQ7y84VFRULi4uLS0tj4+PiYmJTk5OQkJCbUk2YTwpSEhIhYWFgYGBf39/QEBAq14fJwAAAB10Uk5T/wD////////////////////////////////////nQ6jsAAAAgElEQVR4nI3OaxeCIAwG4C31jTRaYNoF/v/vbAMLP7rD5Tk724CIf0F7/k0nPs6usW8c9gT01sN4BnQXOgvlhTFObpwar5Xe3Zwv1G7YFMsK7ijDIB4BiDMNEjUteECzHCQKFtDKHCJmq30yv96fhPr1DEauTMlWoabyVqAt9toXKJ4FsGUNdyYAAAAASUVORK5CYII=\")",
      "",
      "string"
    ],
    [
      4,
      1,
      3,
      "",
      "number"
    ],
    [
      4,
      4,
      "MONTH",
      "",
      "string"
    ],
    [
      4,
      5,
      "=MONTH(E1)",
      "",
      "number"
    ],
    [
      4,
      8,
      "COUNTA",
      "",
      "string"
    ],
    [
      4,
      9,
      "=COUNTA(A1:A7)",
      "",
      "number"
    ],
    [
      4,
      12,
      "RIGHT",
      "",
      "string"
    ],
    [
      4,
      13,
      "=RIGHT(M3,A3)",
      "",
      "number"
    ],
    [
      4,
      16,
      "HYPERLINK",
      "",
      "string"
    ],
    [
      4,
      17,
      "=HYPERLINK(\"https://webix.com/\",\"WEBIX\")",
      "",
      "number"
    ],
    [
      5,
      1,
      4,
      "",
      "number"
    ],
    [
      5,
      4,
      "YEAR",
      "",
      "string"
    ],
    [
      5,
      5,
      "=YEAR(E1)",
      "",
      "number"
    ],
    [
      5,
      8,
      "COUNTBLANK",
      "",
      "string"
    ],
    [
      5,
      9,
      "=COUNTBLANK(A1:A7)",
      "",
      "number"
    ],
    [
      5,
      12,
      "LOWER",
      "",
      "string"
    ],
    [
      5,
      13,
      "=LOWER(M3)",
      "",
      "number"
    ],
    [
      6,
      1,
      5,
      "",
      "number"
    ],
    [
      6,
      4,
      "HOUR",
      "",
      "string"
    ],
    [
      6,
      5,
      "=HOUR(E2)",
      "",
      "number"
    ],
    [
      6,
      8,
      "MAX",
      "",
      "string"
    ],
    [
      6,
      9,
      "=MAX(A1:A6)",
      "",
      "number"
    ],
    [
      6,
      12,
      "UPPER",
      "",
      "string"
    ],
    [
      6,
      13,
      "=UPPER(M5)",
      "",
      "number"
    ],
    [
      7,
      4,
      "MINUTE",
      "",
      "string"
    ],
    [
      7,
      5,
      "=MINUTE(E2)",
      "",
      "number"
    ],
    [
      7,
      8,
      "MIN",
      "",
      "string"
    ],
    [
      7,
      9,
      "=MIN(A1:A6)",
      "",
      "number"
    ],
    [
      7,
      12,
      "PROPER",
      "",
      "string"
    ],
    [
      7,
      13,
      "=PROPER(CONCATENATE(M3, \" \", M5))",
      "",
      "number"
    ],
    [
      8,
      4,
      "SECOND",
      "",
      "string"
    ],
    [
      8,
      5,
      "=SECOND(E2)",
      "",
      "number"
    ],
    [
      8,
      8,
      "PRODUCT",
      "",
      "string"
    ],
    [
      8,
      9,
      "=PRODUCT(A2:A6)",
      "",
      "number"
    ],
    [
      8,
      12,
      "TRIM",
      "",
      "string"
    ],
    [
      8,
      13,
      "=TRIM(\"     \"&M7&\"   \")",
      "",
      "number"
    ],
    [
      9,
      4,
      "NOW",
      "",
      "string"
    ],
    [
      9,
      5,
      "=NOW()",
      "wss1",
      "date"
    ],
    [
      9,
      8,
      "SUMPRODUCT",
      "",
      "string"
    ],
    [
      9,
      9,
      "=SUMPRODUCT(A1:A6)",
      "",
      "number"
    ],
    [
      9,
      12,
      "LEN",
      "",
      "string"
    ],
    [
      9,
      13,
      "=LEN(M7)",
      "",
      "number"
    ],
    [
      10,
      4,
      "DATEDIF",
      "",
      "string"
    ],
    [
      10,
      5,
      "=DATEDIF(E9,E1,\"M\")",
      "",
      "number"
    ],
    [
      10,
      8,
      "SUMSQ",
      "",
      "string"
    ],
    [
      10,
      9,
      "=SUMSQ(A1:A6)",
      "",
      "number"
    ],
    [
      11,
      8,
      "VARP",
      "",
      "string"
    ],
    [
      11,
      9,
      "=VARP(A1:A6)",
      "",
      "number"
    ],
    [
      12,
      8,
      "STDEVP",
      "",
      "string"
    ],
    [
      12,
      9,
      "=STDEVP(A2:A6)",
      "",
      "number"
    ],
    [
      13,
      8,
      "POWER",
      "",
      "string"
    ],
    [
      13,
      9,
      "=POWER(A3,A4)",
      "",
      "number"
    ],
    [
      14,
      8,
      "QUONTIENT",
      "",
      "string"
    ],
    [
      14,
      9,
      "=QUOTIENT(A5,A3)",
      "",
      "number"
    ],
    [
      15,
      8,
      "SQRT",
      "",
      "string"
    ],
    [
      15,
      9,
      "=SQRT(A5)",
      "",
      "number"
    ],
    [
      16,
      8,
      "ABS",
      "",
      "string"
    ],
    [
      16,
      9,
      "=ABS(A6*-1)",
      "",
      "number"
    ],
    [
      17,
      8,
      "RAND",
      "",
      "string"
    ],
    [
      17,
      9,
      "=RAND()",
      "",
      "number"
    ],
    [
      18,
      8,
      "PI",
      "",
      "string"
    ],
    [
      18,
      9,
      "=PI()",
      "",
      "number"
    ],
    [
      19,
      8,
      "INT",
      "",
      "string"
    ],
    [
      19,
      9,
      "=INT(A4/A5)",
      "",
      "number"
    ],
    [
      20,
      8,
      "ROUND",
      "",
      "string"
    ],
    [
      20,
      9,
      "=ROUND(A4/A5,A2)",
      "",
      "number"
    ],
    [
      21,
      8,
      "ROUNDDOWN",
      "",
      "string"
    ],
    [
      21,
      9,
      "=ROUNDDOWN(A4/A5,A2)",
      "",
      "number"
    ],
    [
      22,
      8,
      "ROUNDUP",
      "",
      "string"
    ],
    [
      22,
      9,
      "=ROUNDUP(A4/A5,A2)",
      "",
      "number"
    ],
    [
      23,
      8,
      "TRUNC",
      "",
      "string"
    ],
    [
      23,
      9,
      "=TRUNC(A4/A5)",
      "",
      "number"
    ],
    [
      24,
      8,
      "EVEN",
      "",
      "string"
    ],
    [
      24,
      9,
      "=EVEN(A2)",
      "",
      "number"
    ],
    [
      25,
      8,
      "ODD",
      "",
      "string"
    ],
    [
      25,
      9,
      "=ODD(A5)",
      "",
      "number"
    ]
  ],
  "ranges": [],
  "locked": [],
  "editors": [],
  "filters": [],
  "comments": [],
  "views": []
}