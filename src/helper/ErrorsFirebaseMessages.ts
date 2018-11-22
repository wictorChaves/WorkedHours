export class ErrorsFirebaseMessages {
    static CodeToMessages(errorCode, errorMessage = '') {
        switch (errorCode) {
            case 'auth/invalid-email': {
                return 'E-mail inválido';
            }
            case 'auth/weak-password': {
                return 'A senha deve ter no mínimo 6 caracteres';
            }
            case 'auth/email-already-in-use': {
                return 'E-mail já esta cadastrado';
            }
            case 'auth/user-not-found': {
                return 'Usuário não cadastrado';
            }
            case 'auth/wrong-password': {
                return 'Senha incorreta';
            }
            default: {
                console.log(errorCode);
                return errorMessage;
            }
        }

    }
}