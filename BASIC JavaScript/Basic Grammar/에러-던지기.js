// 에러 던지기

function login(id, pw) {
    if (id === 'zero' && pw === 1000) {
        return true;
    }

    throw new Error('로그인 실패');
}


try {
    login('one', 111);
} catch (error) {
    console.error(error);
    window.alert(error);
    window.alert('에러 발생');
} finally {
    console.info('로그인 시도 시간 : ' + new Date())
}