if(true/*중괄호 속 명령 실행*/){
	alert(1); //"1"출력. 확인을 누를 때까지 해석기는 대기함
	alert(2);
	alert(3);
	alert(4);
} //조건문을 빠져나감
alert(5); //"5"를 출력 후 프로그램 종료


if(false/*중괄호 속 명령 실행 안 함*/){
	alert(1); //"1"출력 안 함
	alert(2);
	alert(3);
	alert(4);
}
alert(5); //"5" 출력


if(true){
	alert(1);
} else{
	alert(2);
}


if(false){
	alert(1);
} else{
	alert(2);
}


if(false/*skip*/){
	alert(1);
} else if(true){
	alert(2); //"2"출력
} else/*위의 명령을 실행했으므로 skip*/ if(true){
	alert(3);
} else/*마찬가지 skip*/ {
	alert(4);
}


if(false){
	alert(1);
} else if(false){
	alert(2);
} else if(false){
	alert(3);
} else {
	alert(4); //"4"출력
}