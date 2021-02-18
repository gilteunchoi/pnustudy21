var id = prompt('아이디를 입력해주세요.');
//프롬프트 사용, 입력한 문자열이 id에 할당됨
		
if(id == 'egoing')/*동등연산자 사용*/ {
	var pw = prompt('비밀번호를 입력해주세요'); //입력한 문자열이 pw에 할당됨
	if(pw == '111111'){
		alert('로그인 하셨습니다.'+' '+id+' '+'님 반갑습니다.'); //비밀번호 일치 시 출력
	} else{
		alert('비밀번호가 일치하지 않습니다.'); //비밀번호가 다르면 출력
			}
	} else {
	alert('아이디가 일치하지 않습니다.'); //입력한 아이디가 'egoing'이 아니면 출력
}




var id = prompt('아이디를 입력해주세요.');
var pw = prompt('비밀번호를 입력해주세요');

if(id == 'egoing' && pw == '111111')
	/*아이디, 비밀번호 모두 일치 시 조건문 실행*/{
		alert('로그인 하셨습니다.'+' '+id+' '+'님 반갑습니다.'); 
	} else
	 /*둘 중 하나라도 일치하지 않는다면 실행*/{
		alert('아이디 또는 비밀번호가 일치하지 않습니다.'); 
	}




var id = prompt('아이디를 입력해주세요.'); //입력한 문자열이 id에 할당됨
var pw = prompt('비밀번호를 입력해주세요'); //입력한 문자열이 pw에 할당됨

if((id == 'egoing' || id == 'k8805' || id == 'sorialgi') && pw == '111111')
	/*or 연산자, 소괄호, and 연산자 사용*/{

		alert('로그인 하셨습니다.'+' '+id+' '+'님 반갑습니다.');
		//아이디가 셋 중 하나이고 비밀번호 일치 시 출력
	
	} else{
		
		alert('아이디 또는 비밀번호가 일치하지 않습니다.'); 
		//하나 이상의 연산자 미충족 시 출력
	
	}




//!은 true인 boolean을 false로, false인 boolean을 true로 바꿈
if(!true && !true){
	alert(1); //1 출력 안 함
}

if(!true && !false){
	alert(2); //2 출력 안 함
}

if(!true || !false){
	alert(3); //3 출력함
}

if(!false || !false){
	alert(4); //4 출력함
}





//false로 간주되는 데이터 형들이 있다.
if(1){
    alert('피곤하다'); //출력
}
if(0){
    alert('안 피곤하다'); //미출력
}
if(!''){
    alert('자고 싶다'); //빈 문자열. 출력
}
if(!null){
    alert('오늘도 고생하셨습니다~'); //null 데이터 형. 출력
}

if(undefined){
	alert('잠이 하나도 안 온다.') //undefined 데이터 형. 미출력
}
if(!NaN){
	alert('스터디 들어오길 잘했다.') //출력
}
var a;
if(a){
	alert('현재 컨디션이 매우 좋다.') //값이 할당되지 않은 변수. 미출력
}