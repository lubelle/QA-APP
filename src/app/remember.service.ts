import { Injectable } from '@angular/core';

@Injectable()
export class RememberService<T> {
    content: T;
    // public API
    save(content: T) {
        this.content = JSON.parse(JSON.stringify(content));
    }
    recall(): T {
        return this.content;
    }
}
