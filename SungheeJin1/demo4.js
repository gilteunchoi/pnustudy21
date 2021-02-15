alert(1==2);			//false
alert(1==1);			//true
alert('one'=='two');	//false

a=1;					//1을 a에 대입

alert('one'=='two');	//false
undefined
alert(1==='1');			//false
undefined
alert(1=='1');			//true

alert(undefined == null);	//true, 모두 정의되지 않음
alert(undefined === null);	//false, 데이터 형이 다름

alert(true); 			//true

alert(true == 1);		//true, 숫자 1을 true로 간주!
alert(true == "1");		//true, 의미 같음
alert(true == 2);		//false
alert(true == 0);		//false
alert(true === "1");	//false, 문자 1이므로
alert(true === 1);		//false

alert(0 === -0);		//true
alert(NaN === NaN);		//false, 계산 불능

alert(1!=2);			//true
alert(1!=1);			//false
alert("a"!="a");		//false	
alert('a'!='b');		//true

alert(1 !== "1");	 	//true
alert(0 !== -0);		//false

alert(999<100);
alert(999>=100);
alert(1<=2);