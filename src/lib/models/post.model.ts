import type { Category } from "./category.model";
import type { User } from "./user.model";

export class Post {
    
    id!: number;
    title: string = '';
    content: string = '';
    category!: Category;
    author!: User;
    created_at!: Date;
    updated_at!: Date;

    constructor(data: any) {
        Object.assign(this, data);
    }
}
