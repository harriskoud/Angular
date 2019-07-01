import { ErrorHandler } from '@angular/core';

export class AppErrorHander implements ErrorHandler {

    handleError(error: any): void {
        alert('Unexcepted error ocurred.')
        console.log(error)
    }

}