    //해쉬를 이용한 풀이이다. 
    //s는 객체에 키와 밸류값을 증가시키고 t는 감소시킨다.
    //만약 두 문자가 같다면 증가한 만큼 감소할 테니 모든 요소가 0 이냐는 함수를 리턴했을 때 true 혹은 false가 도출된다.
	const map = {};
	s.split('').map(c => map[c] = map[c] ? map[c] + 1 : 1);
	t.split('').map(c => map[c] = map[c] ? map[c] - 1 : -1);
	return Object.keys(map).every(k => map[k] === 0);