export class Category {
    id!: number;
    name: string = '';
    color: string = '';

    constructor(data: any) {
        Object.assign(this, data);
    }
}
