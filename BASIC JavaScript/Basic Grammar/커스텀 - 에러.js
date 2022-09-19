// 커스텀 - 에러

class LoginError extends Error {
    constructor (message) {
        super(message);

        this.name = 'Login Error';
    }
}


function login(id, pw) {
    if (id !== 'a') {
        throw new LoginError('아이디 불일치');
    } 
    else if (id === 'a' && pw === 100) {
        return true;    
    }

    throw new Error('로그인 실패');
}


try {
    login('one', 111);
} catch (error) {
    console.error(error);
    if (error instanceof LoginError) {
        console.error('로그인 에러가 발생했습니다.')
    } else {
        window.alert('에러 발생');
    }
} finally {
    console.info('로그인 시도 시간 : ' + new Date());
}