export class User {
    
    id!: number;
    first_name: string = '';
    last_name: string = '';
    email: string = '';
    password: string = '';
    created_at!: Date;
    updated_at!: Date;

    constructor(data: any) {
        Object.assign(this, data);
    }
}